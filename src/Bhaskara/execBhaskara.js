const readline = require("readline");
const Bhaskara = require("./Bhaskara");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function perguntar(pergunta) {
  return new Promise((resolve) => rl.question(pergunta, resolve));
}

async function exec() {
  console.log("\n--- Fórmula de Bhaskara ---");
  const a = parseFloat(await perguntar("Coeficiente a: "));
  const b = parseFloat(await perguntar("Coeficiente b: "));
  const c = parseFloat(await perguntar("Coeficiente c: "));

  if (a === 0) {
    console.log(
      "Coeficiente 'a' deve ser diferente de zero para equação do 2º grau."
    );
    rl.close();
    return;
  }

  new Bhaskara(a, b, c).exibirResultado();

  rl.close();
}

exec();
