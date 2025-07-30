let usrScore = 0;
let compScore = 0;
let totalRounds = 0;
let currentRound = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usrScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const end = document.querySelector("#end");

const startBtn = document.getElementById("startBtn");
const quantityInput = document.getElementById("roundsInput");

const gameTitle = document.getElementById("gameTitle");
const gameChoices = document.getElementById("gameChoices");
const scoreBoard = document.getElementById("scoreBoard");
const msgContainer = document.getElementById("msgContainer");
const credit = document.getElementById("credit");
const mainPg = document.querySelector(".main-pg");

function showGame() {
  mainPg.classList.add("hide");
  gameTitle.classList.remove("hide");
  gameChoices.classList.remove("hide");
  scoreBoard.classList.remove("hide");
  msgContainer.classList.remove("hide");
  end.classList.remove("hide");
  credit.classList.remove("hide");
}

startBtn.addEventListener("click", () => {
  const rounds = parseInt(quantityInput.value, 10);
  if (isNaN(rounds) || rounds <= 0) {
    alert("Please enter a valid number of rounds.");
    return;
  }

  totalRounds = rounds;
  currentRound = 0;
  usrScore = 0;
  compScore = 0;
  usrScorePara.innerText = 0;
  compScorePara.innerText = 0;
  msg.innerText = "Play Your Move";
  msg.style.backgroundColor = "rgb(50, 50, 123)";
  end.innerText = "Computer choice";

  showGame();
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    if (currentRound >= totalRounds) {
      msg.innerText = "Game Over! Refresh to play again.";
      return;
    }

    const usrChoice = choice.getAttribute("id");
    playGame(usrChoice);
  });
});

function genCompChoice() {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
}

function playGame(usrChoice) {
  currentRound++;
  const compChoice = genCompChoice();
  end.innerText = `Computer picked: ${compChoice}`;

  if (compChoice === usrChoice) {
    msg.innerText = "It's a tie!";
    msg.style.backgroundColor = "black";
  } else if (
    (usrChoice === "rock" && compChoice === "scissor") ||
    (usrChoice === "paper" && compChoice === "rock") ||
    (usrChoice === "scissor" && compChoice === "paper")
  ) {
    usrScore++;
    usrScorePara.innerText = usrScore;
    msg.innerText = "You win!";
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "Computer wins!";
    msg.style.backgroundColor = "red";
  }

  if (currentRound === totalRounds) {
    const result = usrScore > compScore
      ? "🎉 You won the game!"
      : usrScore < compScore
      ? "💻 Computer won the game!"
      : "🤝 It's a tie!";
    msg.innerText = `${result} | Refresh to play again.`;
  }
}
