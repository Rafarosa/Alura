const mago = {
  nome: "Gandalf",
  classe: "mago",
};
const guerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const ranger = {
  nome: "Legolas",
  classe: "ranger",
};

const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)
