document.addEventListener('DOMContentLoaded', () => {
    // אתחול משתנים
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 5;

    // חיבור לאלמנטים מה-HTML
    const guessInput = document.getElementById('guessInput');
    const guessBtn = document.getElementById('guessBtn');
    const message = document.getElementById('message');
    const attemptsLeft = document.getElementById('attemptsLeft');
    const restartBtn = document.getElementById('restartBtn');

    // פונקציית הניחוש
    function handleGuess() {
        const userGuess = parseInt(guessInput.value);

        // בדיקה אם הקלט תקין
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            message.innerText = "נא להקיש מספר תקין (1-100) 🧐";
            return;
        }

        attempts--;
        attemptsLeft.innerText = attempts;

        if (userGuess === randomNumber) {
            message.innerHTML = "<b>אלופה! ניחשת נכון! 🎉🏆</b>";
            message.style.color = "#27ae60";
            gameOver();
        } else if (attempts === 0) {
            message.innerHTML = `נגמרו הניסיונות... המספר היה <b>${randomNumber}</b> 💔`;
            message.style.color = "#eb4d4b";
            gameOver();
        } else if (userGuess > randomNumber) {
            message.innerText = "גבוה מדי! נסי מספר נמוך יותר 👇";
        } else {
            message.innerText = "נמוך מדי! נסי מספר גבוה יותר 👆";
        }

        guessInput.value = '';
        guessInput.focus();
    }

    // פונקציית סיום משחק
    function gameOver() {
        guessInput.disabled = true;
        guessBtn.style.display = 'none';
        restartBtn.style.display = 'inline-block';
    }

    // פונקציית איפוס משחק
    function resetGame() {
        randomNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 5;
        attemptsLeft.innerText = attempts;
        message.innerText = "בהצלחה! ✨";
        message.style.color = "#4b6584";
        guessInput.disabled = false;
        guessInput.value = '';
        guessBtn.style.display = 'inline-block';
        restartBtn.style.display = 'none';
        guessInput.focus();
    }

    // הוספת האזנה ללחיצות (Click)
    guessBtn.addEventListener('click', handleGuess);
    restartBtn.addEventListener('click', resetGame);

    // אפשרות ללחוץ על Enter במקום על הכפתור
    guessInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleGuess();
        }
    });
});
