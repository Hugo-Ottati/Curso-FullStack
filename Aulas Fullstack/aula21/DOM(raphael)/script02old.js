const nomes = [
  "Raphael",
  "Zé",
  "Paulier",
  "Simone",
  "Bruno",
  "Juliana",
  "Hugo",
  "Pablo",
  "Walace",
  "Alexandre",
  "José",
];
// const list = document.getElementById("list");

const list = document.querySelector(".list");

let cont = 0;

const adicionarItem = () => {
  if (cont < nomes.length) {
    list.innerHTML += `<tr><td class="bold">Nome ${cont}: </td><td>${nomes[cont]}</td></tr>`;
    cont++;

    // const tr = document.createElement("tr");
    // const td = document.createElement("td");
    // p.id = "teste";
  }
};
