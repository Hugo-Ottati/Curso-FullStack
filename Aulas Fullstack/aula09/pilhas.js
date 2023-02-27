let topo = null;
let quantidade = 0;

//Retorna o nuemro de itens na pilha
const retornarNumeroItens = () => {
 return quantidade;   
}

//Adiciona itens ao topo da pilha
const adicionar = (dados) => {
  let node = {
   dados: dados, 
   proximo: null
  };
 node.proximo = topo;
 topo = node;
 
 quantidade++;
}


//Pop: Remove itens do topo da pilha
const remover = () => {
 if (topo === null); {
  return null:
 }
  
};