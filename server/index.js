const express = require("express");
const path = require("path");
const url = require("url")

const { handleNote } = require("./src/handle-note")
const { getClient } = require("./src/db-connect")
const { queryBlog } = require("./src/queryBlog")
const { querySkills } = require("./src/querySkills");

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

app.use(require('sanitize').middleware);

app.get("/", (req, res) => {
    res.status(200).send("Hello from express.");
});

app.get("/blog-posts", (req, res) => {
    queryBlog(req, res, pgclient)
});

app.get("/skills", (req, res) => {
    querySkills(req, res, pgclient)
});

app.post("/note",
    (req, res) => {
        handleNote(req, res, pgclient);
});

app.get("/*", (req, res) => {
    res.redirect("/")
});

app.listen(PORT, () => {
  console.log(`Express server running on port `+ PORT);
});