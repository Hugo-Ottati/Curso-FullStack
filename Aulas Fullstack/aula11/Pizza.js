//Classes são SEMPRE iniciadas com maiusculo quando for salvar um novo arquivo.

function Pizza (sabor, borda, tamanho, preco) {
 this.sabor = sabor
 this.borda = borda 
 this.tamanho = tamanho
 this.preco = preco 
 //Metodo de um objeto ou classe:
 this.prepararPizza = () => {
   return `A Pizza de ${this.sabor} fica no valor de ${this.preco}!`;
 }
};

let pizza1 = new Pizza ("Marguerita", "Recheada c/ Catupiry", "Grande", 49.90);
let pizza2 = new Pizza ("Calabresa", "Sem recheio", "Média", 39.90);
let pizza3 = new Pizza ("Portuguesa", "Crocante", "Brotinho", 29.90);

console.log(pizza1.prepararPizza());

