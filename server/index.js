const express = require("express");
const path = require("path");
const { body, validationResult } = require("express-validator")

//import handleNote from "./src/handle-note";
const { handleNote } = require("./src/handle-note")
const { getClient } = require("./src/db-connect")

const app = express();
const cors = require('cors')
const PORT = 8080;

const pgclient = getClient();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("Hello from express.");
});

app.get("/*", (req, res) => {
    res.redirect("/")
});

app.post("/note",
    [[
        body("name").isLength({ max: 50 }).escape().trim(),
        body("email").isLength({ max: 50 }).isEmail().normalizeEmail().escape().trim(),
        body("body").isLength({ max: 500 }).escape().trim()
    ]], 
    (req, res) => {
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(400).json({ errors: err.array() });
        }
  
        handleNote(req, res, pgclient);
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});