class Glicose {
  /**
   * @param {number} nivel
   */
  constructor(nivel) {
    this.nivel = nivel;
  }

  classificar() {
    if (this.nivel <= 100) 
        return "normal";

    if (this.nivel <= 140) 
        return "elevado";
    
    return "diabetes";
  }

  exibirResultado() {
    console.log(`\nClassificacao: ${this.classificar()}`);
  }
}

module.exports = Glicose;
