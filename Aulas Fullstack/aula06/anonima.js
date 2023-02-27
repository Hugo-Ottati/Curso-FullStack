function fazerAlgo (param){
return param;
}

//Calculadora com funçoes anonimas:

let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));

const somar = (n1, n2) => n1 + n2;
console.log(somar(10, 10));

const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(15, 10));

const multiplicar = (n1, n2) => n1 * n2;
console.log(multiplicar(12, 12));

const dividir = (n1, n2) => n1 / n2;
console.log(dividir(22, 11));

// --------------------------

const soma = somar(n1, n2);
const subtracao = subtrair(n1, n2);
const multiplicacao = multiplicar(n1, n2);
const divisao = dividir(n1, n2);

document.write(`Soma: ${soma} | Subtração: ${subtracao} | Multiplicação: ${multiplicacao} | Divisão: ${divisao}`);