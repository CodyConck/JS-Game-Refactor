// SHOTGUN BEAR KARATE REFACTOR WITH FUNCTIONS
const initGame = () => {
  const startGame = confirm("Shall we play shotgun, bear, karate?");
  startGame ? playGame() : alert("Ok, maybe next time.");
};

// game flow function
const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
};

const getPlayerChoice = () => {
  return prompt("please enter shotgun, bear, or karate.");
};

const formatPlayerChoice = (playerChoice) => {
  if (playerChoice || playerChoice === "") {
    return playerChoice.trim().toLowerCase();
  } else {
    return false;
  }
};

const decidedNotToPlay = () => {
  alert("I guess you changed your mind. Maybe next time.");
};

const evaluatePlayerChoice = (playerChoice) => {
  if (
    playerChoice === "shotgun" ||
    playerChoice === "bear" ||
    playerChoice === "karate"
  ) {
    return playerChoice;
  } else {
    return false;
  }
};

const invalidChoice = () => {
  alert("You didn't enter shotgun, bear, or karate.");
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  const sbkArray = ["shotgun", "bear", "karate"];
  return sbkArray[randomNumber];
};

const determineWinner = (player, computer) => {
  const winner =
    player === computer
      ? `playerOne: ${player}\nComputer: ${computer}\nTie game!`
      : player === "shotgun" && computer === "bear"
      ? `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`
      : player === "bear" && computer === "karate"
      ? `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`
      : player === "karate" && computer === "shotgun"
      ? `playerOne: ${player}\nComputer: ${computer}\nplayerOne wins!`
      : `playerOne: ${player}\nComputer: ${computer}\ncomputer wins!`;

  return winner;
};

const displayResult = (result) => {
  alert(result);
};

const askToPlayAgain = () => {
  return confirm("Play again?");
};

const thanksForPlaying = () => {
  alert("Ok, thanks for playing.");
};

initGame();
