function Palindromo() {

    var texto = document.getElementById('texto').value.toLowerCase();

    var reverso = texto.split('').reverse().join('');

    var palindromo = texto === reverso ? 'É um palíndromo!' : 'Não é um palíndromo.';
  
    alert(palindromo);
}