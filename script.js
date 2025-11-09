
const messages = [
  "Existem companhias que chegam como um descanso. A sua foi isso pra mim.",
  "Você é força todos os dias, mas ainda assim consegue ser leve.",
  "Ser mãe é ser guerreira — eu vejo isso em você. E eu admiro. Muito.",
  "Você tem um jeito único de fazer o dia pesar menos."
];

const musicLinks = [
  "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v",
  "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f",
  "https://open.spotify.com/embed/track/6fxVffaTuwjgEk5h9QyRjy"
];

document.getElementById("message").innerText = messages[Math.floor(Math.random() * messages.length)];
document.getElementById("music").src = musicLinks[Math.floor(Math.random() * musicLinks.length)];

// Petals falling
for(let i=0; i<20; i++){
  let petal = document.createElement("div");
  petal.className = "petal";
  petal.style.left = Math.random()*100 + "vw";
  petal.style.animationDelay = Math.random()*5 + "s";
  document.body.appendChild(petal);
}
