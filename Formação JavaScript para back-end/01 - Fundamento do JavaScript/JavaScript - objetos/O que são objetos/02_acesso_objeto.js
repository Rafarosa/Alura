// Acessando informação de um objeto

const cliente = {
    nome: 'Andre',
    idade: 32,
    cpf: '62.461.866/0001-57',
    email: 'andre@localhost.com',
}

console.log(`O nome do cliente é ${cliente.nome} e tem ${cliente.idade} anos`);

console.log(`Os 3 primeiros digitos do CPF são ${cliente.cpf.substring(0,4)}`)