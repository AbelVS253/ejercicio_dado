const result = document.getElementById("result");
const dice = document.getElementById("dice");

function lanzarDado() {
  return parseInt((Math.random() * 6) + 1);
}

function mostrarDado() {
  dice.textContent = lanzarDado().toString();
}
result.addEventListener("click", mostrarDado);
