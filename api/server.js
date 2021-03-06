const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

const authenticate= require("../auth/restricted-middleware");
const authRouter = require("../auth/auth-router");
const foodRouter = require("../foodiefun/food-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/app", authenticate, foodRouter);

server.get("/", (req, res) => {
    res.send("Server operational")
})

module.exports = server;