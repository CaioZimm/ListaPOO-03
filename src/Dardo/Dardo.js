class Dardo {
  /**
   * @param {number[]} distancias
   */
  constructor(distancias) {
    this.distancias = distancias;
  }

  maiorDistancia() {
    return Math.max(...this.distancias);
  }

  exibirResultado() {
    console.log(`\nMAIOR DISTANCIA = ${this.maiorDistancia().toFixed(2)}`);
  }
}

module.exports = Dardo;
