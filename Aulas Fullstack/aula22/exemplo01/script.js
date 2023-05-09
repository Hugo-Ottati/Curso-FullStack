const nomes = [
"Rapha", "José", "Paulier", "Hugo", "Bruno"
];

const lista = document.querySelector(".lista");

let cont = 0;

const adicionarItem = () => {
    if(cont < nomes.length){
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const text1 = document.createTextNode(`Nome ${cont}`);
        const text2 = document.createTextNode(nomes[cont]);

        td1.classList.add("bold");
        td1.appendChild(text1);
        td2.appendChild(text2);
        tr.appendChild(td1);
        tr.appendChild(td2);
        lista.appendChild(tr);

        cont++
    }
}

const button = document.querySelector("button");

