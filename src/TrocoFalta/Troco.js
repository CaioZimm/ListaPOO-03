class Troco {
  /**
   * @param {number} precoUni
   * @param {number} quant
   * @param {number} dinheiroRecebido
   */
  constructor(precoUni, quant, dinheiroRecebido) {
    this.precoUni = precoUni;
    this.quant = quant;
    this.dinheiroRecebido = dinheiroRecebido;
  }

  calcularTroco() {
    const total = this.precoUni * this.quant;
    return this.dinheiroRecebido - total;
  }

  exibirResultado() {
    if (this.calcularTroco() < 0) {
      console.log(
        `\nDINHEIRO INSUFICIENTE. FALTAM R$ ${Math.abs(this.calcularTroco()).toFixed(2)} REAIS`
      );
    } else {
      console.log(`\nTROCO = ${this.calcularTroco().toFixed(2)}`);
    }
  }
}

module.exports = Troco;
