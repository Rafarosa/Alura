//Paramentro de função

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(2, 59));
console.log(soma(120, -59));
console.log(soma(23, 59));
console.log(soma(20, 13));

// Parâmetro X Argumento

// Ordem dos parâmentos

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e tenho ${idade} anos`;
}

console.log(nomeIdade("Rafael", 34))
console.log(nomeIdade(34, "Rafael"))

function multiplica(num1, num2) {
    return num1 * num2
}

console.log(multiplica(soma(4, 5), soma(7, 2)))

console.log(multiplica(soma(4, 5)))