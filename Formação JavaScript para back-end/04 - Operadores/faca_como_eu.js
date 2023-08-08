const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

const pedido = `${nome} diz: "por favor, quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}"`
console.log(pedido)

const ordem = `${nome} diz: "por gentileza, me veja um ${idade >= 18 ? bebidaMaior : bebidaMenor}"`