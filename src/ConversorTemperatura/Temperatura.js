class Temperatura {
  /**
   * @param {string} escala
   * @param {number} valor
   */
  constructor(escala, valor) {
    this.escala = escala.toUpperCase();
    this.valor = valor;
  }

  /**
   * @returns {number}
   */
  converter() {
    if (this.escala === "C") {
      return (this.valor * 9) / 5 + 32;
    } else if (this.escala === "F") {
      return ((this.valor - 32) * 5) / 9;
    }
  }

  exibirResultado() {
    console.log(
      `\nTemperatura equivalente em ${
        this.escala === "C" ? "Fahrenheit" : "Celsius"
      }: ${this.converter().toFixed(2)}`
    );
  }
}

module.exports = Temperatura;
