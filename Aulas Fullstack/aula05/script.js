let num1 = Number(prompt("Digite o primeiro número: "));
let num2 = Number(prompt("Digite o segundo número: "));

//Criação das funções 
function somar(n1, n2) {
let resultado = n1 + n2;
return resultado;
}


function subtrair(n1,n2) {
    let resultado = n1 - n2;
    return resultado;   
}


function multiplicar(n1, n2) {
    let resultado = n1 * n2;
    return resultado;  
}


function dividir (n1, n2){
    let resultado = n1 / n2; 
    return resultado;   
}

//Chamada das funções
const soma = (somar(num1, num2));
const subtracao = (subtrair(num1, num2));
const multiplicacao = (multiplicar(num1, num2));
const divisao =(dividir(num1, num2));

document.write(soma);
document.write(subtracao);
document.write(multiplicacao);
document.write(divisao);