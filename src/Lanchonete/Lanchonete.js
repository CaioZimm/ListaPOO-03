class Lanchonete {
  /**
   * @param {number} codigo
   * @param {number} quantidade
   */
  constructor(codigo, quantidade) {
    this.codigo = codigo;
    this.quantidade = quantidade;
    this.tabela = {
      1: 5.0,
      2: 3.5,
      3: 4.8,
      4: 8.9,
      5: 7.32,
    };
  }

  calcularValor() {
    const preco = this.tabela[this.codigo];
    if (!preco) console.log("Código inválido");

    return preco * this.quantidade;
  }

  exibirResultado() {
    console.log(`\nValor a pagar: R$ ${this.calcularValor().toFixed(2)}`);
  }
}

module.exports = Lanchonete;
