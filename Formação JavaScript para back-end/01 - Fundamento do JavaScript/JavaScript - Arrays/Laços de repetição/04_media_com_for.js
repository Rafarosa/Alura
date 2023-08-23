//calcule a média entre os seguintes número
// 10, 6.5, 8 e 7.5

const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;

for (let indice = 0; indice < notas.length; indice++) {
    somaDasNotas += notas[indice];
}

const media = somaDasNotas / notas.length;

console.log(media)