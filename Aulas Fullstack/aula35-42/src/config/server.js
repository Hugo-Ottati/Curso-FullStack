const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json({limit: "50mb"}));

app.use(routes)

module.exports = app;
