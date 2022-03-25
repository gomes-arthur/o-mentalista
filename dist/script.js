var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResualtado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResualtado.innerHTML =
      "Parabéns, você acertou. Agora aperte em CORRE (ou RUN)";
  }
  if (chute < numeroSecreto) {
    elementoResualtado.innerHTML =
      "Que pena, você errou. número secreto é maior que seu chute";
  }
  if (chute > numeroSecreto) {
    elementoResualtado.innerHTML =
      "Que pena, você errou. O número secreto é menor que seu chute";
  }
  if (chute > 10 || chute < 0) {
    elementoResualtado.innerHTML = "você deve digitar um número entre 0 a 10";
  }
}