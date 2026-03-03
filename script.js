let winningIndex;
let isGameOver = false;

function initGame() {
winningIndex = Math.floor(Math.random() * 3);
isGameOver = false;
document.body.style.backgroundColor = "#f0f2f5";
document.getElementById('message').innerText = "";
document.getElementById('reset-btn').style.display = "none";
for (let i = 0; i < 3; i++) {
const box = document.getElementById('box-' + i);
box.innerText = "?";
box.style.backgroundColor = "#6c5ce7";
}
}

function handleGuess(index) {
if (isGameOver) return;
const box = document.getElementById('box-' + index);
const msg = document.getElementById('message');
if (index === winningIndex) {
isGameOver = true;
box.innerText = "💎";
box.style.backgroundColor = "#ffd700";
document.body.style.backgroundColor = "#55efc4";
msg.innerText = "מצאת את היהלום! ✨";
document.getElementById('reset-btn').style.display = "inline-block";
} else {
box.innerText = "❌";
box.style.backgroundColor = "#b2bec3";
msg.innerText = "נסה שוב...";
}
}

window.onload = initGame;
