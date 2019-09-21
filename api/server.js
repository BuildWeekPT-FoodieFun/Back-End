const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("dotenv").config();

// const authRouter = require("../auth/auth-router");
const foodRouter = require("../foodiefun/food-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// server.use("/api/auth", authRouter);
server.use("/api/app", foodRouter);

server.get("/", (req, res) => {
    res.status(200).json({ 
        message: "Server operational"
    })
})

module.exports = server;