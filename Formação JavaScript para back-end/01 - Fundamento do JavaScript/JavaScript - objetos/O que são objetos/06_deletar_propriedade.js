// Como deletar uma propriedade?

const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};

console.log(objPersonagem);

delete objPersonagem.aliado

console.log(objPersonagem.aliado);

// Também é possível utilizar a notação de colchetes:

delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined