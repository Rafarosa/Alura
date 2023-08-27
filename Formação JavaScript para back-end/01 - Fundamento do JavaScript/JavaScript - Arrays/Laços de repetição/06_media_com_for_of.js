

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let elementos of notas) {
    somaDasNotas += elementos
}

console.log(somaDasNotas);

media = somaDasNotas / notas.length
console.log(`A média das notas é ${media}`)