const readline = require("readline");
const Multiplos = require("./Multiplos");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Múltiplos ---");
  console.log("Digite dois numeros inteiros:");
  const n1 = parseInt(await perguntar(""));
  const n2 = parseInt(await perguntar(""));

  new Multiplos(n1, n2).exibir();

  rl.close();
}

exec();
