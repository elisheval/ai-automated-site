let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsLeft = document.getElementById('attemptsLeft');
const restartBtn = document.getElementById('restartBtn');

guessBtn.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.innerText = "נא להקיש מספר תקין (1-100) 🧐";
        return;
    }

    attempts--;
    attemptsLeft.innerText = attempts;

    if (userGuess === randomNumber) {
        message.innerText = "אלופה! ניחשת נכון! 🎉🏆";
        gameOver();
    } else if (attempts === 0) {
        message.innerText = `נגמרו הניסיונות... המספר היה ${randomNumber} 💔`;
        gameOver();
    } else if (userGuess > randomNumber) {
        message.innerText = "גבוה מדי! נסי מספר נמוך יותר 👇";
    } else {
        message.innerText = "נמוך מדי! נסי מספר גבוה יותר 👆";
    }

    guessInput.value = '';
    guessInput.focus();
});

function gameOver() {
    guessInput.disabled = true;
    guessBtn.classList.add('hidden');
    restartBtn.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 5;
    attemptsLeft.innerText = attempts;
    message.innerText = "בהצלחה! ✨";
    guessInput.disabled = false;
    guessBtn.classList.remove('hidden');
    restartBtn.classList.add('hidden');
    guessInput.value = '';
});
