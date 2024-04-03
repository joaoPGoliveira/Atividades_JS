class Carro {
  constructor(marca, modelo, ano, cor, kilometragem, valor_fipe) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.cor = cor;
    this.kilometragem = kilometragem;
    this.valor_fipe = valor_fipe;
  }

  anosUtilizacao() {
    const anoAtual = new Date().getFullYear();
    return anoAtual - this.ano;
  }

  valorMercado() {
    let valorMercado = 0;
    if (this.kilometragem <= 30000) {
      valorMercado = this.valor_fipe * 1.1;
    } else if (this.kilometragem > 30000 && this.kilometragem <= 50000) {
      valorMercado = this.valor_fipe;
    } else {
      valorMercado = this.valor_fipe * 0.9;
    }
    return valorMercado.toFixed(2);
  }
}

function submitForm() {
  const marca = document.getElementById("marca").value;
  const modelo = document.getElementById("modelo").value;
  const ano = parseInt(document.getElementById("ano").value);
  const cor = document.getElementById("cor").value;
  const kilometragem = parseInt(document.getElementById("kilometragem").value);
  const valor_fipe = parseFloat(document.getElementById("valor_fipe").value);

  const carro = new Carro(marca, modelo, ano, cor, kilometragem, valor_fipe);

  const resultDiv = document.getElementById("resultado");
  resultDiv.innerHTML = `
    <h2>Informações do Carro:</h2>
    <p>Valor FIPE: R$ ${carro.valor_fipe.toFixed(2)}</p>
    <p>Anos de Utilização: ${carro.anosUtilizacao()} anos</p>
    <p>Valor de Mercado: R$ ${carro.valorMercado()}</p>
  `;
}
