class Telefonia {
  /**
   * @param {number} min
   */
  constructor(min) {
    this.min = min;
    this.valorBase = 50;
    this.franquia = 100;
    this.valorAdicional = 2;
  }

  calcularValor() {
    if (this.min <= this.franquia) {
      return this.valorBase;
    } else {

      const excedente = this.min - this.franquia;
      
      return this.valorBase + excedente * this.valorAdicional;
    }
  }

  exibirResultado() {
    console.log(`Valor a pagar: R$ ${this.calcularValor().toFixed(2)}`);
  }
}

module.exports = Telefonia;
