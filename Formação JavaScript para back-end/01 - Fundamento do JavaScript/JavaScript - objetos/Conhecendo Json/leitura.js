// Lendo Json Cliente
const dados = require( "./cliente.json");
console.log(dados);
console.log(typeof dados);


const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
//código omitido

console.log(typeof clienteEmString);

//código omitido

const objetoCliente = JSON.parse(clienteEmString);
//código omitido

console.log(objetoCliente);