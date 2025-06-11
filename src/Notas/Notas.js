class Notas {
  /**
   * @param {number} nota1
   * @param {number} nota2
   * @returns {number}
   */
  constructor(nota1, nota2) {
    this.nota1 = nota1;
    this.nota2 = nota2;
  }

  /**
   * @returns {number}
   */
  calcularNota() {
    return this.nota1 + this.nota2;
  }

  exibirResultado() {
    console.log(`\n
      NOTA FINAL = ${this.calcularNota().toFixed(1)}`);

    if (this.calcularNota() <= 60.0) {
      console.log("REPROVADO");
    }
  }
}

module.exports = Notas;
