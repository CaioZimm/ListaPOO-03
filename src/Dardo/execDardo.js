const readline = require("readline");
const Dardo = require("./Dardo");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Lançamento de Dardo ---");
  console.log("Digite as tres distancias:");

  const d1 = parseFloat(await perguntar(""));
  const d2 = parseFloat(await perguntar(""));
  const d3 = parseFloat(await perguntar(""));

  new Dardo([d1, d2, d3]).exibirResultado();

  rl.close();
}

exec();
