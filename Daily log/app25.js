

const p1 = {
    score: 0;
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    scor: = 0;
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}



const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');


let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;

        }
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});


p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});


resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;

    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }

}