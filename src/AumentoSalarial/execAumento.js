const readline = require("readline");
const Aumento = require("./Aumento");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Aumento Salarial ---");
  const salario = parseFloat(await perguntar("Digite o salario da pessoa: "));

  new Aumento(salario).exibirResultado();

  rl.close();
}

exec();
