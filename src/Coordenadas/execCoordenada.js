const readline = require("readline");
const Coordenada = require("./Coordenada");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Coordenadas Cartesianas ---");
  const x = parseFloat(await perguntar("Valor de X: "));
  const y = parseFloat(await perguntar("Valor de Y: "));

  new Coordenada(x, y).exibir();

  rl.close();
}

exec();
