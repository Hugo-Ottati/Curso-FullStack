const nomes = ["Pedro", "Julia", "Thiago", "Marcelo", "Joana", "Juliana", "Bruno"];

// const list = document.getElementById("list");

const list = document.querySelector(".list");

let cont = 0;

const adicionarItem = () => {
  if (cont < nomes.length) {
    list.innerHTML += `<tr><td> ${nomes[cont++]} </td></tr>`;
  }
};
