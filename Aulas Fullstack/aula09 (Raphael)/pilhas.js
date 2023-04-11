let topo = null;
let quantidade = 0;

//Retorna o Número de itens na pilha
const retornarNumeroItens = () => {
  return quantidade;
}

//Push: Adiciona itens ao topo da pilha
const adicionar = (dados) => {
  let node = {
    dados: dados,
    proximo: null,
  };

  node.proximo = topo;
  topo = node;

  quantidade++;
}

//Pop: Remove itens do topo da pilha
const remover = () => {
  if (topo === null) {
    return null;
  } else {
    let removido = topo;
    topo = topo.proximo;

    if (quantidade > 0) {
      quantidade--;
    }

    return removido.dados;
  }

  //Exibe o Item do topo da pilha
  const exibirTopo = () => {
    if(topo === null) {
      return null;
    } else {
      return topo.dados;
    }
  }

  //Retorna um vetor com todos os itens da pilha
  function exibirTodos() {
    if(topo === null) {
      return null;
    } else {
      let arr = new Array();
      let current = topo;
      for (let i = 0; i < quantidade; i++) {
        arr[i] = current.dados;
        current = current.proximo;
      }

      return arr;
    }
  }

}