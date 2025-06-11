const readline = require("readline");
const Troco = require("./Troco");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Troco ou Falta ---");
  const preco = parseFloat(await perguntar("Preço unitário do produto: "));
  const quantidade = parseInt(await perguntar("Quantidade comprada: "));
  const dinheiro = parseFloat(await perguntar("Dinheiro recebido: "));

  new Troco(preco, quantidade, dinheiro).exibirResultado();

  rl.close();
}

exec();
