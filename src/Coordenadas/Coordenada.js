class Coordenadas {
  /**
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  localizar() {
    if (this.x === 0 && this.y === 0) {
      return "Origem";
    } else if (this.x === 0) {
      return "Eixo Y";
    } else if (this.y === 0) {
      return "Eixo X";
    } else if (this.x > 0 && this.y > 0) {
      return "Q1";
    } else if (this.x < 0 && this.y > 0) {
      return "Q2";
    } else if (this.x < 0 && this.y < 0) {
      return "Q3";
    } else {
      return "Q4";
    }
  }

  exibir() {
    console.log(this.localizar());
  }
}

module.exports = Coordenadas;
