const computerDisplay = document.getElementById("computer-choice");
const playerDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice, computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    playerDisplay.innerHTML = userChoice;
    getComputerChoice();
    checkWinner(computerChoice, userChoice);
  })
);

function getComputerChoice() {
  const choices = ["🪨 rock", "📰 paper", "✂️ scissors"];
  const randomIndex = Math.floor(Math.random() * possibleChoices.length);
  computerChoice = choices[randomIndex];

  computerDisplay.innerHTML = computerChoice;
}

const checkWinner = (computer, player) => {
  if (player === computer) {
    resultDisplay.innerHTML = "It's a tie!";
  } else if (player === "🪨 rock" && computer === "📰 paper") {
    resultDisplay.innerHTML = `Computer won!!`;
  } else if (player === "✂️ scissiors" && computer === "📰 paper") {
    resultDisplay.innerHTML = `You won!!`;
  } else if (player === "📰 paper" && computer === "✂️ scissors") {
    resultDisplay.innerHTML = `Computer won!!`;
  } else if (player === "🪨 rock" && computer === "✂️ scissors") {
    resultDisplay.innerHTML = `You won!!`;
  } else if (player === "✂️ scissors" && computer === "🪨 rock") {
    resultDisplay.innerHTML = `Computer won!!`;
  } else if (player === "📰 paper" && computer === "🪨 rock") {
    resultDisplay.innerHTML = `You won!!`;
  }
};
