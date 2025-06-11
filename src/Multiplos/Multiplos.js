class Multiplos {
  /**
   * @param {number} n1
   * @param {number} n2
   */
  constructor(n1, n2) {
    this.n1 = n1;
    this.n2 = n2;
  }

  verificarMultiplos() {
    return this.n1 % this.n2 === 0 || this.n2 % this.n1 === 0;
  }

  exibir() {
    if (this.verificarMultiplos()) {
      console.log("Sao multiplos");
    } else {
      console.log("Nao sao multiplos");
    }
  }
}

module.exports = Multiplos;
