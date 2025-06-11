const readline = require("readline");
const Glicose = require("./Glicose");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Medidor de Glicose ---");
  const nivel = parseFloat(await perguntar("Digite a medida da glicose: "));

  new Glicose(nivel).exibirResultado();

  rl.close();
}

exec();
