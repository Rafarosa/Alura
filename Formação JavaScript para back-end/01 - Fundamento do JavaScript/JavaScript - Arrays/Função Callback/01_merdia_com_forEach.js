// Medias com forEach
// calcular a média entre as notas 

const notas = [10, 6.5, 8, 7.5];

somaDasNotas = 0;

notas.forEach(function(nota) {
 somaDasNotas += nota 
});

media = somaDasNotas / notas.length
console.log(`A média das notas é ${media}`)