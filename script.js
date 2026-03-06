document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 300) + 1;
    let attempts = 10;

    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const attemptsLeft = document.getElementById('attemptsLeft');
    const restartBtn = document.getElementById('restartBtn');

    function handleGuess() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 300) {
            message.innerText = 'נא להזין מספר בין 1-300';
            message.style.color = '#e74c3c';
            return;
        }

        attempts--;
        attemptsLeft.innerText = attempts;

        if (userGuess === randomNumber) {
            message.innerHTML = '<b>כל הכבוד! ניחשת נכון!</b>';
            message.style.color = '#27ae60';
            gameOver();
        } else if (attempts === 0) {
            message.innerHTML = `נגמרו הניסיונות! המספר היה <b>${randomNumber}</b>`;
            message.style.color = '#c0392b';
            gameOver();
        } else if (userGuess > randomNumber) {
            message.innerText = 'גבוה מידי! נסה שוב.';
            message.style.color = '#f39c12';
        } else {
            message.innerText = 'נמוך מידי! נסה שוב.';
            message.style.color = '#f39c12';
        }

        guessInput.value = '';
        guessInput.focus();
    }

    function gameOver() {
        guessInput.disabled = true;
        guessBtn.style.display = 'none';
        restartBtn.style.display = 'inline-block';
    }

    guessBtn.addEventListener('click', handleGuess);

    restartBtn.addEventListener('click', () => {
        randomNumber = Math.floor(Math.random() * 300) + 1;
        attempts = 10;
        attemptsLeft.innerText = attempts;
        message.innerText = '';
        guessInput.disabled = false;
        guessInput.value = '';
        guessBtn.style.display = 'inline-block';
        restartBtn.style.display = 'none';
        guessInput.focus();
    });

    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleGuess();
        }
    });
});
