const express = require('express');
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT || 7777;

// app.get("/", (req, res) => {
//     res.send("<h1>Fala Galera! Tranquilidade?</h1>")
// });

app.use(express.static(__dirname + "/public"));

app.listen(port, () => {
console.log(`Aplicação rodando no link http://localhost:${port}`);
});
