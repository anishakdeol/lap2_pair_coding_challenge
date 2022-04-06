const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
const postRoute = require("./routes/publish");
server.use("/posts", postRoute);

server.get("/", (req, res) => res.send("Welcome to publish"));

module.exports = server;
