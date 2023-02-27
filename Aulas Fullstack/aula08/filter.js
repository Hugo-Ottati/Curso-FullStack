const notas = [7.5, 8.0, 0.2, 6.7, 5.0];   //filter utilizado para filtrar elementos do array 

const notasFiltradas = notas.filter((elemento) => {
 return elemento > 7;
});

console.log(notasFiltradas);
