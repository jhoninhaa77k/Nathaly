
// Generate falling petals
const petalsContainer = document.querySelector('.petals');
for (let i = 0; i < 18; i++) {
    let petal = document.createElement('span');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (6 + Math.random() * 5) + 's';
    petalsContainer.appendChild(petal);
}

// Playlist rotation
const musicList = [
 "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f",
 "https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL",
 "https://open.spotify.com/embed/track/6i0V12jOa3mr6uu4WYhUBr"
];

document.getElementById("player").src = musicList[Math.floor(Math.random() * musicList.length)];
