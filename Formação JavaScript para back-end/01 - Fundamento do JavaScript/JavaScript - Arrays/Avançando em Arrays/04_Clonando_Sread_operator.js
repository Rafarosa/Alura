// Desafio 17: criando cópias

const notas = [7, 7, 8, 9];

// Fazendo clone do array sem alterar original
const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);