const nomes = [
"Rapha", "José", "Paulier", "Hugo", "Bruno"
];

const principal = document.querySelector("#principal");
const tabela = document.createElement("table");
const tbody = document.createElement("tbody");

nomes.forEach((nome, indice) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const text1 = document.createTextNode(`Nome ${indice}:`);
    const text2 = document.createTextNode(nome);

    td1.appendChild(text1);
    td2.appendChild(text2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tbody.appendChild(tr);
})

tabela.appendChild(tbody);
principal.appendChild(tabela);

