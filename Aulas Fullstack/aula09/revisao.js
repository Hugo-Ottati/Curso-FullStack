const numeros = [7, 14, 21, 28, 35];

numeros.push(10);

numeros.unshift(33);

numeros.pop();

numeros.shift();

numeros.forEach((elemento, indice,array) => {
 console.log(elemento); 
});
