const readline = require("readline");
const Notas = require("./Notas");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Notas ---");
  const nota1 = parseFloat(await perguntar("Digite a primeira nota: "));
  const nota2 = parseFloat(await perguntar("Digite a segunda nota: "));

  new Notas(nota1, nota2).exibirResultado();
  
  rl.close();
}

exec();
