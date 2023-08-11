const imoveis = [];
let opçao = "";

do {
  opçao = prompt(
    "Bem-vindo ao Cadastro de imóveis: " +
      imoveis.length +
      "\nEscolha uma das opções abaixo\n\n1. Novo imóvel\n2. Listar imóvel\n3. Sair"
  );
  switch (opçao) {
    case "1":
      const imovel = {};
      imovel.proprietario = prompt("Digite o nome do proprietario do imovel: ");
      imovel.quartos = prompt(
        "Digite a quantidade de quartos que o imóvel possui: "
      );
      imovel.banheiros = prompt(
        "Digite a quantiadade de banheiros que o imóvel possui: "
      );
      imovel.garagem = prompt("O imóvel possui garagem ? (SIM/NÃO)");
      const confirma = confirm(
        "Salvar este imóvel ?\n" +
          "\nProprietario: " +
          imovel.proprietario +
          "\nQuartos: " +
          imovel.quartos +
          "\nBanheiros: " +
          imovel.banheiros +
          "\nGaragem: " +
          imovel.garagem
      );
      if (confirma) {
        imoveis.push(imovel);
        alert("Imóvel salvo com sucesso");
      } else {
        alert("Voltando ao menu");
      }
      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imovel: " +
            (i + 1) +
            "\nProprietario: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quartos +
            "\nBanheiros: " +
            imoveis[i].banheiros +
            "\nGaragem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando cadastro");
      break;
    default:
      alert("Opção invalida ! tente novamente");
      break;
  }
} while (opçao !== "3");
