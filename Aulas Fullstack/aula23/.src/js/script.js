class Pessoa {
  constructor(nome, sobrenome, email) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.email = email;
  }
}

class TabelaCadastro {
  constructor(elemento) {
    this.elemento = elemento;
  }

  adicionarPessoa(pessoa) {
    let linha = document.createElement("tr");
    let colunaNome = document.createElement("td");
    let colunaSobrenome = document.createElement("td");
    let colunaEmail = document.createElement("td");

    colunaNome.innerText = pessoa.nome;
    colunaSobrenome.innerText = pessoa.sobrenome;
    colunaEmail.innerText = pessoa.email;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaSobrenom);
    linha.appendChild(colunaEmail);
    this.elemento.appendChild(linha);
  }

  limpar() {
    this.elemento.innerHTML = "";
  }
}

const pessoas = [];
const tabelaCadastro = new TabelaCadastro(document.querySelector(".cadastro"));

const nome = document.querySelector("#nome");
const sobrenome = document.querySelector("#sobrenome");
const email = document.querySelector("#email");

function cadastrar() {
  const nomeValor = nome.value.trim();
  const sobrenomeValor = sobrenome.value.trim();
  const emailValor = email.value.trim();

  if (nomeValor === "" || sobrenomeValor === "" || emailValor === "") {
    alert("Por favor preencha todos os campos abaixo");
    return;
  }

  const pessoa = new Pessoa(nomeValor, sobrenomeValor, emailValor);
  pessoas.push(pessoa);
  tabelaCadastro.adicionarPessoa(pessoa);
}
