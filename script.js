let music = document.getElementById("music");
let playBtn = document.getElementById("playMusic");
let flowersBtn = document.getElementById("flowersBtn");
let popup = document.getElementById("popup");
let closePopup = document.getElementById("closePopup");

playBtn.onclick = () => {
  music.play();
};

flowersBtn.onclick = () => {
  popup.style.display = "flex";
};

closePopup.onclick = () => {
  popup.style.display = "none";
};
