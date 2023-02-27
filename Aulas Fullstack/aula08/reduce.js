const numeros = [7, 8, 9, 10, 11];

const numerosReduzidos = numeros.reduce((acumulado, elemento) =>{
  return acumulado *= elemento;
});

console.log(numerosReduzidos);