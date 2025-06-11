const readline = require("readline");
const Jogo = require("./Jogo");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Duração do Jogo ---");
  const horaInicial = parseInt(await perguntar("Hora inicial: "));
  const horaFinal = parseInt(await perguntar("Hora final: "));

  new Jogo(horaInicial, horaFinal).exibirResultado();

  rl.close();
}

exec();
