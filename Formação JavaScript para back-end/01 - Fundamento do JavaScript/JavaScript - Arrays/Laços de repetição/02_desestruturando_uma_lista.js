// Procurando aluno

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedisa = [alunos, medias];
console.log(listaDeAlunosMedisa);

function procurarNomeENota(aluno) {
    //valida se aluno indicado está na lista de alunos 
    if (listaDeAlunosMedisa[0].includes(aluno)){
        
        //const alunos = listaDeAlunosMedisa[0];
        //const medias = listaDeAlunosMedisa[1];
        const [alunos, medias] = listaDeAlunosMedisa;
        console.log(`${aluno} está cadastrado`);
        //encontra o indice do aluno 
        const indice = alunos.indexOf(aluno);
        console.log(indice);
        //encontra a nota do aluno em função do indice do aluno da lista Alunos
        const mediaDoAluno = medias[indice];
        console.log(`A media de ${aluno} é igual a ${mediaDoAluno}`);

    } else {
        console.log("Aluno não cadastrado");
    }
}

procurarNomeENota("Juliana")