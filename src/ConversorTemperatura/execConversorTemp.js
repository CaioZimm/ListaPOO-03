const readline = require("readline");
const Temperatura = require("./Temperatura");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Conversor de Temperatura ---");
  const escala = (
    await perguntar("Voce vai digitar a temperatura em qual escala (C/F)? ")
  ).toUpperCase();

  if (escala !== "C" && escala !== "F") {
    console.log("Escala inválida, use C ou F");
    rl.close();
    return;
  }

  const valor = parseFloat(await perguntar(`Digite a temperatura em ${escala === "C" ? "Celsius" : "Fahrenheit"}: `));

  new Temperatura(escala, valor).exibirResultado();

  rl.close();
}

exec();
