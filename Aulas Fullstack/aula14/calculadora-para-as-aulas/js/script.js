const n1Input = document.querySelector("#n1");
const n2Input = document.querySelector("#n2");
const result = document.querySelector(".result-caixa p");
const operador = document.querySelector(".operador p");

const getN1 = () => Number(n1Input.value);
const getN2 = () => Number(n2Input.value);

const calcular = (operacao) => {
    const n1 = getN1();
    const n2 = getN2();

    switch (operacao) {
        case "soma":
        somar(n1, n2)
        break;

        case "subtracao":
        subtrair(n1, n2)
        break;
        
        case "divisao":
        dividir(n1, n2)
        break;

        case "multiplicacao":
        multiplicar(n1, n2)
        break; 
        

    }
}

const somar = (n1, n2) => {
   operador.innerHTML = "+";
   operador.style.color = "purple"
   result.innerHTML = (n1 + n2);
}

const subtrair = (n1, n2) => {
    operador.innerHTML = "-";
    operador.style.color = "red"
    result.innerHTML = (n1 - n2);
 }

 const multiplicar = (n1, n2) => {
    operador.innerHTML = "X";
    operador.style.color = "orange"
    result.innerHTML = (n1*n2);
 }

 const dividir = (n1, n2) => {
    operador.innerHTML = "/";
    operador.style.color = "green"
    result.innerHTML = (n1/n2);
 }