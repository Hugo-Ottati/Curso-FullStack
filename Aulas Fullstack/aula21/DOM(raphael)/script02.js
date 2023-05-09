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

const table = document.createElement("table");
const tbody = document.createElement("tbody");
table.appendChild(tbody);
document.querySelector(".list").appendChild(table);

let cont = 0;

const adicionarItem = () => {
  if (cont < nomes.length) {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const text1 = document.createTextNode(`Nome ${cont}:`);
    const text2 = document.createTextNode(nomes[cont]);

    td1.classList.add("bold");
    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);

    cont++;
  }
};

const button = document.querySelector("button");
button.addEventListener("click", adicionarItem);
