const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Rodando no link http://127.0.0.1:${port}`));

app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Pregos",
    valor: 5.99,
  },
  {
    id: 2,
    nome: "Martelo",
    valor: 12.99,
  },
  {
    id: 3,
    nome: "Trena",
    valor: 8.99,
  },
];

//Rotas da API
app.get("/produtos/", (req, res) => {
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find((el) => el.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({
        error: "Product Not Found =("
    })
  }
});
