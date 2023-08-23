const numerosPares = [2, 4, 6]
const numeroImpares = [1, 3, 5]

const numeros = [numerosPares, numeroImpares]
console.log(numeros)
// Para abrir o objedo (arrays) e retronar o conteudo deles
const numeroObjetos = [...numerosPares, ...numeroImpares]
console.log(numeroObjetos)

// Descontruindo atribuição de variaveis 

const [num1, num2, ...numResto] = [7, 8, 9, 10, 11]
console.log(num1, num2, numResto)

const pessoa = {
    nome: "Rafael",
    idade: 34
}

const pessoaComtelefone = {
    ...pessoa, telefon: 47996018539
}

console.log(pessoaComtelefone);

const {nome} = pessoa
console.log(nome)

function imprimeDados ({nome, idade}) {
    console.log(nome,idade)
}
imprimeDados(pessoa)