require("dotenv").config();

const cors = require("cors");
const server = require("express");
const db = require("./database/client");

const tunersController = require("./controllers/tuners.controller");

const app = server();

app.use(server.json());
app.use(cors());

//Making the routes:

app.get("/", (req, res) => {
  res.send("Welcome to tuner App");
});

app.use("/tuners", tunersController);

app.get("/*", (req, res) => {
  res.status(404).send("Page doesn't exist");
});

app.listen(3001, () => console.log("Running great"));

module.exports = app;
