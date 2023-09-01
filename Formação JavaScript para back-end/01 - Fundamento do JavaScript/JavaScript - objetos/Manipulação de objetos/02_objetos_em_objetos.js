// Estruturas aninhadas

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.endereco = {
    rua: "Aramago",
    numero: 223,
    apartamento: true,
    complemento: "Apartamento 202"
  }

  console.log(cliente.endereco.rua);
