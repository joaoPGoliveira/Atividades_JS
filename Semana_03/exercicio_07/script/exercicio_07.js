// O padStart foi utilizado para que o relogio tenha sempre um zero atras quando as horas forem somente uma unidade

function atualizarRelogio() {
  var dataAtual = new Date();
  var horas = dataAtual.getHours().toString().padStart(2, "0");
  var minutos = dataAtual.getMinutes().toString().padStart(2, "0");
  var segundos = dataAtual.getSeconds().toString().padStart(2, "0");

  var horarioFormatado = horas + ":" + minutos + ":" + segundos;

  document.getElementById("relogio").innerHTML = horarioFormatado;
}

function iniciarRelogio() {
  atualizarRelogio();
  setTimeout(iniciarRelogio, 1000);
}

window.onload = function () {
  iniciarRelogio();
};
