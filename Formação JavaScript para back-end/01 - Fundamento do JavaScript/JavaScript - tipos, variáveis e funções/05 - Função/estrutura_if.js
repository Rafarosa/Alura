// As estruturas condicionais permitem que o código se ramifique e tome 
//“caminhos” diferentes de acordo com a condição fornecida.

const num = null;

if (num == null) {
    console.log('Número não fornecido')
}

if (num !== null) {
console.log(`o número é ${num}`);
}


function verificarNumero (numero) {
    if (numero > 10){
        return 'Número maior que 10';
    }else{
        return 'Número menor que 10';
    }
}

console.log(verificarNumero(9));