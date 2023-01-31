function calcular() {
  var nome = document.getElementById("nome");
  var valor = document.getElementById("valor");

  var luz = 9.46;
  var anos = valor.value * luz;

  anos = anos.toFixed(2);

  swal(
    "Olá viajante" +
      nome.value +
      ",  você percorreu exatos " +
      anos +
      "  trilhões de quilômetros no total!"
  );
}
