const frase = "Mergulhando em tecnologia com Alura";


const numero = 256
const convertendoEmString = new String(numero)
console.log(convertendoEmString)


const num = 500
console.log(typeof(num.toString())) //'500'

// Concatenar strings
let nome1 = "André"
let sobreNome ="Silva"
let nomeCompleto = "Meu nome completo é : " + nome1 + sobreNome
console.log(nomeCompleto)

let nome2 = "André"
let saudacoes = "Seja bem-vindo "
console.log(saudacoes += nome2)

//template strings
let nome3 = "André"
let saudacoes1 =`Seja bem-vindo ${nome3}`

// Métodos para strings
// .length
const palavra = 'Rafael';
console.log(palavra.length)

// charAt()
console.log("contrarrevolucionário".charAt(8));

// ou 
const palavraMaior = "multidisciplinaridade";
console.log(palavraMaior[10])

// indexof
console.log(palavraMaior.indexOf("n"))

// toUpperCase() e toLowerCase()
console.log(palavraMaior.toLowerCase())
console.log(palavraMaior.toUpperCase())

// substr() - slice()
let frase1= "Mergulhando em tecnologia."

console.log(frase1.substr(0,11)) // Mergulhando
console.log(frase1.slice(0,11)) // Mergulhando

// relace()

let nome5 = "André";
let comunicacao5 = " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao5.replace("nomeusurario",nome5));

// split() - vai retornar um array
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens)

// trim()
let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com