const express = require("express");
const path = require("path");
const { body, validationResult } = require("express-validator")
const url = require("url")

const { handleNote } = require("./src/handle-note")
const { getClient } = require("./src/db-connect")
const { queryBlog } = require("./src/queryBlog")

const app = express();

var production = false
process.argv.forEach(function (val, index, array) {
    if (val === "-p")
        production = true;
  });
const cors = require('cors')
const PORT = production ? 3000 : 8080;

const pgclient = getClient();

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(express.json())
if(!production)
    app.use(cors())

app.get("/", (req, res) => {
    res.status(200).send("Hello from express.");
});

app.get("/blog", (req, res) => {
    queryBlog(req, res, pgclient)
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

app.get("/*", (req, res) => {
    res.redirect("/")
});

app.listen(PORT, () => {
  console.log(`Express server running on port `+ PORT);
});