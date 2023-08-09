// Arrow Function
// Função padrão
function apresenta (nome) {
    return `meu nome é ${nome}`
}

// Arrow Function
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

// Arrow function com + de uma linha de instrução
const somaNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números menores"
    } else {
        return num1 + num2
    }
}
// Hoisting: arrow function se comporta da mesma expressão
