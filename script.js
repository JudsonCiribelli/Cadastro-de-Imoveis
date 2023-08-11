const imoveis = [];
let opçao = "";

do {
  opçao = prompt(
    "Bem-vindo ao Cadastro de imóveis" +
      imoveis.length +
      "\nEscolha uma das opções abaixo\n\n1. Novo imóvel\n2. Listar imóvel\n3. Sair"
  );
  switch (opçao) {
    case "1":
      break;
    case "2":
      break;
    case "3":
      alert("Encerrando cadastro");
      break;
    default:
      alert("Opção invalida ! tente novamente");
      break;
  }
} while (opçao !== "3");
