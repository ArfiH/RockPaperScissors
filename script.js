const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");
const container = document.querySelector('.container');
const player = document.getElementById("player-score");
const computer = document.getElementById("computer-score");
const round = document.querySelector(".round h2");
const roundWinner = document.querySelector(".winner h3");
const compImage = document.querySelector(".comp-image");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", (e) => {
    console.log("Rock selected");
    playRound("rock")
});

paper.addEventListener("click", (e) => {
    console.log("Paper selected");
    playRound("paper");
});

scissors.addEventListener("click", (e) => {
    console.log("Scissors selected");
    playRound("scissors");
});

function playRound(playerSelection) {
    const choices = ["rock", "paper", "scissors"];
    const computerSelection = choices[Math.floor(Math.random() * 3)];
    compImage.src = `${computerSelection}.svg`;
    compImage.parentNode.style.display = "block";    
    console.log(`Computer selected ${computerSelection}`);

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("Draw");
            roundWinner.textContent = "Round Draw";
        }
        else if (computerSelection === "paper") {
            console.log("Computer won");
            roundWinner.textContent = "Computer won this round.";  
            computerScore++;
        }
        else if (computerSelection === "scissors") {
            console.log("Player won");
            roundWinner.textContent = "Player won this round.";
            playerScore++;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("Player won");
            roundWinner.textContent = "Player won this round.";
            playerScore++;
        }
        else if (computerSelection === "paper") {
            console.log("Draw");
            roundWinner.textContent = "Round Draw";
        }
        else if (computerSelection === "scissors") {
            console.log("Computer won");
            roundWinner.textContent = "Computer won this round.";  
            computerScore++;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("Computer won");
            roundWinner.textContent = "Computer won this round.";  
            computerScore++;
        }
        else if (computerSelection === "paper") {
            console.log("player won");
            playerScore++;
            roundWinner.textContent = "Player won this round.";
        }
        else if (computerSelection === "scissors") {
            console.log("Draw");
            roundWinner.textContent = "Round Draw";
        }
    }
    round.textContent = `Round ${playerScore + computerScore}`;
    if (playerScore >= 3) {
        round.textContent = "Player won!";
        playerScore = 0;
        computerScore = 0;
        compImage.parentNode.style.display = "none";
    }
    else if (computerScore >= 3) {
        round.textContent = "Computer won!";
        playerScore = 0;
        computerScore = 0;
        compImage.parentNode.style.display = "none";    
    }
    // Update scores
    player.textContent = `${playerScore}`;
    computer.textContent = `${computerScore}`;
}