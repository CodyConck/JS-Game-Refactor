const computerChoiceDsiplay = document.getElementById("computer-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let playerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (event) => {
    playerChoice = event.target.id;
    playerChoiceDisplay.innerHTML = playerChoice;
    generateComputerChoice();
    getResult();
  })
);

let computerChoice;

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // or you can use possibleChoices.length because that will == 3.
  // console.log(randomNumber);
  if (randomNumber === 1) {
    computerChoice = "shotgun";
  }
  if (randomNumber === 2) {
    computerChoice = "bear";
  }
  if (randomNumber === 3) {
    computerChoice = "karate";
  }
  computerChoiceDsiplay.innerHTML = computerChoice;
}

let result;

function getResult() {
  if (computerChoice === playerChoice) {
    result = "Its a draw!";
  }
  if (computerChoice === "shotgun" && playerChoice === "bear") {
    result = "You lost!";
  }
  if (computerChoice === "shotgun" && playerChoice === "karate") {
    result = "You won!";
  }
  if (computerChoice === "karate" && playerChoice === "bear") {
    result = "You won!";
  }
  if (computerChoice === "karate" && playerChoice === "shotgun") {
    result = "You lost!";
  }
  if (computerChoice === "bear" && playerChoice === "shotgun") {
    result = "You won!";
  }
  if (computerChoice === "bear" && playerChoice === "karate") {
    result = "You lost!";
  }
  resultDisplay.innerHTML = result;
}
