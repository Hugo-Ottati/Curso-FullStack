const express = require("express");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    return res.send("Ola Galerinha! Tudo tranquilo com vocês?")
})

app.listen(port, () => console.log(`Rodando no link http://127.0.0.1:${port}`));