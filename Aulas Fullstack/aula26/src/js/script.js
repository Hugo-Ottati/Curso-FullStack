const verificar = () => {
  let anoAtual = new Date().getFullYear();
  let anoNascimentoForm = document.querySelector("#textano");
  let resultado = document.querySelector("#resultado");

  if (anoNascimentoForm.value === 0 || anoNascimentoForm.value > anoAtual) {
    alert("ERRO - VOCÊ NÃO EXISTE!");
  } else {
    let formSexo = document.getElementsByName("radsex");
    let idade = anoAtual - Number(anoNascimentoForm.value);
    let genero = "";
    let img = document.createElement("img");
    img.setAttribute("id", "imagem");

    if (formSexo[0].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade <= 4){
        img.setAttribute("src", "./assets/bebe-f.png");
    } else if (idade >= 5 && idade <= 15){
      img.setAttribute("src", "./assets/jovem-f.png");
    } else if (idade >= 16 && idade <= 21){
      img.setAttribute("src", "./assets/adulto-f.png");
        
      }
    }
  }
};
