const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus")

function jump() {
  if (dino.classList == "jump") {
    return
  }
  dino.classList.add("jump");
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

function restart() {
  let dinoTop, cactusLeft = 0;

  dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    alert("Game Over!");
  }
}

setInterval(restart, 10);

document.addEventListener("keydown", jump);
