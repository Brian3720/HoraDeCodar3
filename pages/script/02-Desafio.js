var contagem = 30;
var intervalo = setInterval(function () {
  if (contagem >= 0) {
    document.write(contagem + "<br>");
    contagem--;
  } else {
    clearInterval(intervalo);
    document.write("EXPLOSÃO");
  }
}, 500);
