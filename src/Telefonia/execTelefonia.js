const readline = require("readline");
const Telefonia = require("./Telefonia");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Plano de Telefonia ---");
  const min = parseInt(await perguntar("Digite a quantidade de minutos: "));

  new Telefonia(min).exibirResultado();

  rl.close();
}

exec();
