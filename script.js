document.addEventListener('DOMContentLoaded', () => {
    let randomNumber = Math.floor(Math.random() * 200) + 1;
    let attempts = 5;

    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const attemptsLeft = document.getElementById('attemptsLeft');
    const restartBtn = document.getElementById('restartBtn');

    function handleGuess() {
        const userGuess = parseInt(guessInput.value);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 200) {
            message.innerText = 'נא להזין מספר בין 1 ל-200';
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
            message.innerHTML = `הפסדת! המספר היה <b>${randomNumber}</b>`;
            message.style.color = '#c0392b';
            gameOver();
        } else if (userGuess > randomNumber) {
            message.innerText = 'גבוה מדי! נסו שוב';
            message.style.color = '#4b6584';
        } else {
            message.innerText = 'נמוך מדי! נסו שוב';
            message.style.color = '#4b6584';
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
        randomNumber = Math.floor(Math.random() * 200) + 1;
        attempts = 5;
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
