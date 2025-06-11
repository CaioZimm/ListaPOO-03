const readline = require("readline");
const { spawn } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function exibirMenu() {
  console.clear();
  console.log("\n=== Lista de Exercícios POO - 03 em Node.js ===\n");
  console.log("1. Calcular Notas ");
  console.log("2. Fórmula de Bhaskara ");
  console.log("3. Menor de Três ");
  console.log("4. Plano de Telefonia ");
  console.log("5. Troco ou Falta ");
  console.log("6. Medidor de Glicose ");
  console.log("7. Lançamento de Dardo ");
  console.log("8. Conversor de Temperatura ");
  console.log("9. Lanchonete ");
  console.log("10. Múltiplos ");

  console.log("0. Sair");
  console.log("==============================================\n");
}

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

function caminhoExercicio(num) {
  switch (num) {
    case 1:
      return "src/Notas/execNotas.js";
    case 2:
      return "src/Bhaskara/execBhaskara.js";
    case 3:
      return "src/MenorTres/execMenorTres.js";
    case 4:
      return "src/Telefonia/execTelefonia.js";
    case 5:
      return "src/TrocoFalta/execTrocoFalta.js";
    case 6:
      return "src/Glicose/execGlicose.js";
    case 7:
      return "src/Dardo/execDardo.js";
    default:
      return null;
  }
}

async function execExercicio(num) {
  rl.pause();
  const filePath = caminhoExercicio(num);

  return new Promise((resolve, reject) => {
    const child = spawn("node", [filePath], { stdio: "inherit" });

    child.on("close", (code) => {
      rl.resume();
      if (code !== 0) {
        console.error("Error");
        reject();
      } else {
        resolve();
      }
    });

    child.on("error", (err) => {
      console.error("Error", err.message);
      rl.resume();
      reject(err);
    });
  });
}

async function main() {
  var funcionando = true;

  while (funcionando) {
    exibirMenu();
    const op = await perguntar(
      "Digite o número do exercício que deseja testar: "
    );

    if (op === "0") {
      console.log("\nEncerrando o programa...");
      funcionando = false;
    } else if (!isNaN(op) && parseInt(op) >= 1 && parseInt(op) <= 13) {
      await execExercicio(parseInt(op));
    } else {
      console.log("Opção inválida.\nPor favor, digite um número entre 0 e 13.");
    }

    if (funcionando) {
      await perguntar("\nPressione Enter para voltar ao menu...");
    }
  }

  rl.close();
}

main();
