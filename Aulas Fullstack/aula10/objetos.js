const pessoas = [
{
 id: "4576b8",
 nome: "Hugo",
 idade: 23,
 cpf: "135.965.827-09"           
},
{
id: "7856d8",
nome: "João",
idade: 62,
cpf: "154.698.785-78"  
},
{
id: "8965e2",
nome: "Laura",
idade: 64,
cpf: "854.652.357-89"           
},
{
id: "9845f8",
nome: "Daniel",
idade: 22,
cpf: "563.458.123-75"           
},
{
id: "8524x8",
nome: "Bruno",
idade: 33,
cpf: "841.235.658-12"           
},
]

//ForEach:
//pessoas.forEach((pessoa, indice) => {
// console.log(`${indice} - Nome: ${pessoa.nome} | Idade: ${pessoa.idade} | CPF: ${pessoa.cpf}`); 
//});

//Codigo sujo (Arrow Function - Completo)
//const pessoasFiltradas = pessoas.filter((pessoa) => {
//    return pessoa.idade > 60;
//}).forEach((pessoa) => {
//  console.log(pessoa.nome);  
//})
   
//Codigo limpo (Arrow Function - Resumido):
const pessoasFiltradas = pessoas
.filter(pessoa => pessoa.idade > 60)
.forEach (pessoa => console.log(pessoa.nome));




//pessoasFiltradas.forEach((pessoa) => {
// console.log(pessoa.nome)
//});


// Estrutura de um objeto:
//const pessoa = {
//  nome: "Hugo", 
//  idade: 23,
//  cpf: "135.965.827-09",
//}