function Pessoa (nome, sobrenome, idade, cpf, id){
 this.nome = nome;
 this.sobrenome = sobrenome,
 this.idade = idade;
 this.cpf = cpf;
 this.id = id;
};

let pessoa1 = new Pessoa("Hugo", "Ottati", 23, "135.965.827-09", 5678);
let pessoa2 = new Pessoa("Bruno", "Lima", 33, "251.635.987-45", 8547);
let pessoa3 = new Pessoa("Sophia", "Heinz", 25, "524.658.789-85", 7854);

console.log(pessoa1.nome, pessoa1.sobrenome);

