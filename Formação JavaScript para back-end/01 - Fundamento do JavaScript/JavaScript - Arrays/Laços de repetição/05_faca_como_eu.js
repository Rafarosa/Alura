// percorendo martizes
const notas1 = [10, 6.5, 8, 7.5];
const notas2 = [9, 6, 6];
const notas3 = [8.5, 9.5];

const notasGerais = [notas1, notas2, notas3];

let media = 0;

//Com a matriz criada, vamos iterar sobre os elementos.
//Mas não poderemos usar o mesmo for utilizado da última vez,
//já que agora notasGerais[i] contém um array e não mais um valor numérico.
//Por isso usaremos outro for para acessar esse array.

for (let i = 0; i < notasGerais.length; i++) {
  for (let j = 0; j < notasGerais[i].length; j++) {
    media += notasGerais[i][j] / notasGerais[i].length;
  }
}
console.log(media);
