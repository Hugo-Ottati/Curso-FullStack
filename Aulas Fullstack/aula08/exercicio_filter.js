const itens = ["B", "B", "O", "R", "B", "R","O", "B", "O", "R"];

const itensFiltrados = itens.filter((itens) =>{
 return itens == "R";
}).map((itens) => {
 return itens = "B"
});

console.log(itensFiltrados);