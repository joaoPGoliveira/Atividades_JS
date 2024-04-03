function Carro() {
  var marca;
  var modelo;
  var ano;
  var cor;
  var kilometragem;
  var valor_fipe;

  // Get e Set da marca
  this.setMarca = function (Marca) {
    this.marca = Marca;
  };

  this.getMarca = function () {
    return this.marca;
  };

  // Get e Set do modelo
  this.setModelo = function (Modelo) {
    this.modelo = Modelo;
  };

  this.getModelo = function () {
    return this.modelo;
  };

  // Get e Set do ano
  this.setAno = function (Ano) {
    this.ano = Ano;
  };

  this.getAno = function () {
    return this.ano;
  };

  // Get e Set da cor
  this.setCor = function (Cor) {
    this.cor = Cor;
  };

  this.getCor = function () {
    return this.cor;
  };

  // Get e Set da kilometragem
  this.setKilometragem = function (Kilometragem) {
    this.kilometragem = Kilometragem;
  };

  this.getKilometragem = function () {
    return this.kilometragem;
  };

  // Get e Set do valor_fipe

  this.setValorFipe = function (Valor_fipe) {
    this.valor_fipe = Valor_fipe;
  };

  this.getValorFipe = function () {
    return this.valor_fipe;
  };

  // Método para calcular ano de utilização do veiculo 

  function anosUtilizacao() {
    var ano_atual = console.log("Qual é o ano atual?");
    return ano_atual - this.ano;
  }

  // Método para calcular valor do carro
  function valorMercado() {
    if (this.kilometragem < 30000) {
      return this.valor_fipe * 1.1;
    } else if (this.kilometragem >= 30000 && this.kilometragem <= 50000) {
      return this.valor_fipe;
    } else if (this.kilometragem > 50000) {
      return this.valor_fipe * 0.9;
    }
  }
}


