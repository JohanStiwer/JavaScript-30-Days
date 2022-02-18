window.addEventListener("keydown", function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //Parar la funcion cuando corre junta
  audio.currentTime = 0; //reiniciar el tiempo
  audio.play();
  key.classList.add("playing");
  key.classList.remove("playing");
  key.classList.toggle("playing");
});

function removeTransition(e) {
  if (e.propertyName !== "transform") return; //Skip it if its not a transform
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitioenend", removeTransition));
