const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '../client/build')));

app.get("/", (req, res) => {
    res.status(200).send("Hello from express.");
});

app.get("/*", (req, res) => {
    res.redirect("/")
});

app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});