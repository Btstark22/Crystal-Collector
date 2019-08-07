let targetScore;
let currentScore;
let wins = 0;
let losses = 0;

const startGame = function() {
    targetScore = Math.floor(Math.random() * 102) +19;
    currentScore = 0;
    for (let i = 0; i < 4; i++) {
        const rand = Math.floor(Math.random() * 12) +1;
        document.getElementById("crystal" + i).setAttribute("data-num", rand);
        document.getElementById("crystal" + i).addEventListener("click", adder);
    }
}

const adder = function(event) {
    currentScore += parseInt(this.getAttribute("data-num"))
    if (currentScore === targetScore) {
        wins++;
        document.getElementById("you-won").innerHTML = "You Won. Bet you can't win again.";
        startGame()
        }
    if (currentScore > targetScore) {
        document.getElementById("you-won").innerHTML = "You Lost. Try again loser!";
        losses++;
        startGame()
        }
    document.getElementById("target-score").textContent = targetScore;
    document.getElementById("current-score").textContent = currentScore;
    document.getElementById("wins").textContent = wins;
    document.getElementById("loss").textContent = losses;
}

startGame()



