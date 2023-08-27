const nomes = ["Evaldo", "Mari", "Camis"];

//função declarativa no parametro
nomes.forEach(function (nome) {
  console.log(nome);
});
// Arrow function
nomes.forEach((nome) => {
  console.log(`01 - ${nome}`);
});

//função externa 
function imprimeNome(nome) {
    console.log(nome);
  }
  nomes.forEach(imprimeNome);