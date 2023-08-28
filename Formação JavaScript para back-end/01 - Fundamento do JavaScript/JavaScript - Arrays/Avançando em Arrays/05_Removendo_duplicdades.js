// Remova duplicidades
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];

// forma mais reduzida
// const nomesAtualizados = [...new Set(nomes)];

console.log(nomes);
console.log(nomesAtualizados);