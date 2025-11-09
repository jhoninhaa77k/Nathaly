// mensagens aleatórias / sequência suave
const frases = [
  "Existem companhias que chegam como um descanso. A sua foi isso pra mim.",
  "Você é força todos os dias, mas ainda assim consegue ser leve.",
  "Ser mãe é ser guerreira — eu vejo isso em você. E eu admiro. Muito.",
  "Você tem um jeito único de fazer o dia pesar menos.",
  "Obrigado por existir do jeito que você é."
];
let idx = 0;
const textoEl = document.getElementById('texto');
document.getElementById('nextMsg').addEventListener('click', () => {
  idx = (idx + 1) % frases.length;
  // transição suave
  textoEl.style.opacity = 0;
  setTimeout(() => {
    textoEl.innerHTML = frases[idx];
    textoEl.style.opacity = 1;
  }, 300);
});

// PLAYER: define src quando o usuário clica (contorna bloqueio de autoplay)
const player = document.getElementById('player');
const playBtn = document.getElementById('playBtn');

// lista de embeds do Spotify (usam o formato /embed/track/ID)
const musicList = [
  "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v", // Perfect (id do exemplo)
  "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f", // Thinking Out Loud
  "https://open.spotify.com/embed/track/6fxVffaTuwjgEk5h9QyRjy"  // Photograph
];

let playing = false;

// Ao clicar, define o src se estiver vazio e mostra o iframe
playBtn.addEventListener('click', () => {
  if (!player.src) {
    // escolhe aleatoriamente
    const pick = musicList[Math.floor(Math.random() * musicList.length)];
    player.src = pick + "?utm_source=generator";
    player.style.display = "block";
    playBtn.textContent = "▶ Reproduzindo";
    playing = true;
    // Observação: autoplay pode depender do navegador; o click permite a reprodução.
  } else {
    // se já tem src, apenas alterna visibilidade/estado
    if (playing) {
      // "pausar" escondendo o iframe (não pausa spotify embeddable), mudar label
      playBtn.textContent = "▶ Tocar novamente";
      player.style.display = "none";
      playing = false;
    } else {
      playBtn.textContent = "▶ Reproduzindo";
      player.style.display = "block";
      playing = true;
    }
  }
});

// MODAL do buquê
const modal = document.getElementById('modal');
const bouquetBtn = document.getElementById('bouquetBtn');
const closeModal = document.getElementById('closeModal');
const takeBtn = document.getElementById('takeBtn');

function openModal(){
  modal.classList.add('show');
  modal.setAttribute('aria-hidden','false');
}
function close(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden','true');
}

bouquetBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', close);
takeBtn.addEventListener('click', () => {
  // efeito curtinho + fechar
  takeBtn.textContent = "🤍 Enviado";
  setTimeout(close, 900);
});

// fechar clicando fora do conteúdo
modal.addEventListener('click', (e) => {
  if (e.target === modal) close();
});

// cria pétalas dinamicamente (estética)
(function makePetals(){
  const container = document.querySelector('.petals');
  for(let i=0;i<20;i++){
    const s = document.createElement('span');
    s.style.left = Math.random()*100 + 'vw';
    s.style.animationDuration = (6 + Math.random()*6) + 's';
    s.style.animationDelay = (Math.random()*5) + 's';
    s.style.transform = `translateY(-20vh) rotate(${Math.random()*360}deg)`;
    container.appendChild(s);
  }
})();
