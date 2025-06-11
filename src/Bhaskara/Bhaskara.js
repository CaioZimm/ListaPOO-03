class Bhaskara {
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   */
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  calcularRaizes() {
    const delta = this.b ** 2 - 4 * this.a * this.c;

    if (delta < 0) {
      return null;
    }

    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-this.b + sqrtDelta) / (2 * this.a);
    const x2 = (-this.b - sqrtDelta) / (2 * this.a);

    return { x1, x2 };
  }

  exibirResultado() {
    const raizes = this.calcularRaizes();

    if (!raizes) {
      console.log("Esta equacao nao possui raizes reais");
    } else {
      console.log(`X1 = ${raizes.x1.toFixed(4)}`);
      console.log(`X2 = ${raizes.x2.toFixed(4)}`);
    }
  }
}

module.exports = Bhaskara;
