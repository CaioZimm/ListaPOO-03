class Jogo {
  /**
   * @param {number} horaInicial
   * @param {number} horaFinal
   */
  constructor(horaInicial, horaFinal) {
    this.horaInicial = horaInicial;
    this.horaFinal = horaFinal;
  }

  /**
   * @returns {number}
   */
  calcularDuracao() {
    if (this.horaInicial === this.horaFinal) {
      return 24;
    } else if (this.horaInicial < this.horaFinal) {
      return this.horaFinal - this.horaInicial;
    } else {
      return 24 - this.horaInicial + this.horaFinal;
    }
  }

  exibirResultado() {
    console.log(`\nO JOGO DUROU ${this.calcularDuracao()} HORA(S)`);
  }
}

module.exports = Jogo;
