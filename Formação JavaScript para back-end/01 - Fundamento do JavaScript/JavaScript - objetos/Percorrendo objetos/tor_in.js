// Interando nos objetos

const cliente = {
  nome: "Joao",
  idade: 24,
  email: "joao@firma.com",
  telefone: ["1155555550", "1144444440"],
};

cliente.enderecos = [
  {
    rua: "R. Joseph Climber",
    numero: 1337,
    apartamento: true,
    complemento: "ap 934",
  },
];

for (let chave in cliente){
    let tipo = typeof cliente[chave]
    if (tipo !== "object" && tipo !== "Funcition"){
    console.log(`A Chave ${chave} tem o valor ${cliente[chave]}`)
    }
}

//{
//    if (Object.hasOwnProperty.call(object, chave)) {
//        const chave = cliente[chave];
//        
//    }
//}