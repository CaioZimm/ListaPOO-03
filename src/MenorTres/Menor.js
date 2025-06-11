class Menor {
  /**
   * @param {number} valor1
   * @param {number} valor2
   * @param {number} valor3
   * @returns {number}
   */
  constructor(valor1, valor2, valor3) {
    this.valor1 = valor1;
    this.valor2 = valor2;
    this.valor3 = valor3;
  }

  /**
   * @returns {number}
   */
  verificarMenor() {
    var menor = this.valor1;

    if (this.valor2 < this.valor1) {
      menor = this.valor2;
    } else if (this.valor2 < this.valor3) {
      menor = this.valor3;
    }

    return menor;
  }

  exibirMenor() {
    console.log(`MENOR = ${this.verificarMenor()}`);
  }
}

module.exports = Menor;
