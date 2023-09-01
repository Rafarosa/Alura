

const cliente = {
    nome: "Joao",
    idade: 24,
    email: "joao@firma.com",
    telefone: ["1155555550", "1144444440"],
  };
  
  cliente.enderecos = [{
    rua: "Aramago",
    numero: 223,
    apartamento: true,
    complemento: "Apartamento 202"
  }];

  cliente.enderecos.push({
    rua: "Terere",
    numero: 193,
    apartamento: false,
    complemento: "casa"
  });

  const listaApenasApartamento = cliente.enderecos.filter((enderecos) => enderecos.apartamento === true )


console.log(listaApenasApartamento);