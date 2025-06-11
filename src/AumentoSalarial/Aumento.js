class Aumento {
  /**
   * @param {number} salario
   */
  constructor(salario) {
    this.salario = salario;
  }

  /**
   * @returns {number}
   */
  calcular() {
    let percentual = 0;

    if (this.salario <= 1000) {
      percentual = 20;
    } else if (this.salario <= 3000) {
      percentual = 15;
    } else if (this.salario <= 8000) {
      percentual = 10;
    } else {
      percentual = 5;
    }

    const aumento = (this.salario * percentual) / 100;
    const novoSalario = this.salario + aumento;

    return { novoSalario, aumento, percentual };
  }

  exibirResultado() {
    console.log(`\nNovo salario R$ ${this.calcular().novoSalario.toFixed(2)}`);
    console.log(`Aumento R$ ${this.calcular().aumento.toFixed(2)}`);
    console.log(`Porcentagem = ${this.calcular().percentual}%`);
  }
}

module.exports = Aumento;
