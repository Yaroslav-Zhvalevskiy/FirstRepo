// Эмулировать игру в кубики, 2 человека по очереди бросают кубик,
// каждый в итоге по 3 раза. У кого сумма трех бросков будет наибольшей - тот выиграл.
// Если суммы равны то ничья.

function rollTheDice() {
    let dice = (Math.random() * 6) + 1;
    return Math.floor(dice);
};

function rollTheDiceNtimes(n) {
    let player1sum = 0;
    let player2sum = 0;
    for (let i = 0; i < n; i++) {
        player1sum += rollTheDice();
        player2sum += rollTheDice();
    }
    return { player1sum, player2sum };
};

function playTheGame() {
    const { player1sum, player2sum } = rollTheDiceNtimes(3);
    if (player1sum > player2sum) {
        console.log("First player won!");
    } else if (player1sum < player2sum) {
        console.log("Second player won!");
    } else {
        console.log("Draw game!");
    }
};

playTheGame();