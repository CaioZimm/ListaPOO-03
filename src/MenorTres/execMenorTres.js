const readline = require("readline");
const Menor = require("./Menor");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Menor de Três ---");
  const valor1 = parseFloat(await perguntar("Primeiro valor: "));
  const valor2 = parseFloat(await perguntar("Segundo valor: "));
  const valor3 = parseFloat(await perguntar("Terceiro valor: "));

  new Menor(valor1, valor2, valor3).exibirMenor();

  rl.close();
}

exec();
