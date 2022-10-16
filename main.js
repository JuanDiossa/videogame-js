const canvas = document.querySelector("#game");
const game = canvas.getContext("2d");

window.addEventListener("load", startGame);

function startGame() {
  // ejes x,y inicial - x,y final
  game.fillStyle = "purple";
  game.font = "25px";
  game.fillText("HOLA", 50, 50);
}
