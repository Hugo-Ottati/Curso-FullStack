const fruta = prompt("Digite uma fruta: ");


const frutas = ["Caju", "Manga","Pera"];


if(frutas.indexOf(fruta) === -1){
  console.log("ESSA FRUTA NÃO EXISTE NA LISTA"); 
  frutas.push(fruta);
  console.log(frutas);
}

frutas.splice(2);

//alert(frutas);