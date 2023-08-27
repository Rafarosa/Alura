//interando em lista do final ao inicio

const numeros = [100, 200, 300, 400, 500, 600];

for (let i = numeros.length - 1; i >= 0; i--) {
  console.log(numeros[i]);
}

// alterar a quantidade incrementada ou decrementada
console.log("----------------");
for (let i = numeros.length - 1; i >= 0; i -= 2) {
  console.log(numeros[i]);
}

console.log("----------------");

// validação de numero que são maiores que um determonado valor

for (let i = numeros.length - 1; numeros[i] >= 300; i -= 2) {
  console.log(numeros[i]);
}
console.log("----------------");

// acrecentando dados em um array

const numerosPares = [];

for (let i = 0; i <= 100; i += 2) {
  numerosPares.push(i);
}

console.log(numerosPares);
