const readline = require("readline");
const Lanchonete = require("./Lanchonete");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Lanchonete ---");
  const codigo = parseInt(await perguntar("Codigo do produto comprado: "));
  const quantidade = parseInt(await perguntar("Quantidade comprada: "));

  new Lanchonete(codigo, quantidade).exibirResultado();

  rl.close();
}

exec();
