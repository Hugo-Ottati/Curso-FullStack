const numeros = [7, 14, 21, 28, 35, 42];    //map percorre e coloca tudo dentro de um array novo

const numeros2 = numeros.map((numero) => {
 return numero * 15; 
});

console.log(numeros2);