// Mostrar quem está reprovado

const alunos = ["Ana", "Marcos", "Maria", "Mauro"];
const medias = [7, 4.5, 8, 7.5];

const reprovado = alunos.filter((aluno, indice) =>{
    return medias[indice] < 7;
})

console.log(reprovado)