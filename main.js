// SHOTGUN BEAR KARATE
let playGame = confirm("Shall we play Shotgun Bear Karate?");
if (playGame) {
  // play
  let playerChoose = prompt("Please enter shotgun bear or karate.");
  if (playerChoose) {
    let playerOneChoice = playerChoose.trim().toLowerCase();
    if (
      playerOneChoice === "shotgun" ||
      playerOneChoice === "bear" ||
      playerOneChoice === "karate"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "shotgun"
          : computerChoice === 2
          ? "bear"
          : "karate";

      let result =
        playerOneChoice === computer
          ? `playerOneChoice: ${playerOneChoice}\nComputer: ${computer}
          \nTie game!`
          : playerOneChoice === "shotgun" && computer === "bear"
          ? `playerOneChoice: ${playerOneChoice}\nComputer: ${computer}
      \nplayerOneChoice wins!`
          : playerOneChoice === "bear" && computer === "karate"
          ? `playerOneChoice: ${playerOneChoice}\nComputer: ${computer}
      \nplayerOneChoice wins!`
          : playerOneChoice === "karate" && computer === "shotgun"
          ? `playerOneChoice: ${playerOneChoice}\nComputer: ${computer}
      \nComputer wins!`
          : `playerOneChoice: ${playerOneChoice}\nComputer: ${computer}
      \nComputer wins!`;
      alert(result);

      let playAgain = confirm("Play again?");
      playAgain ? location.reload() : alert("Ok, thanks for playing!");
    } else {
      alert("You didn't enter shotgun bear or karate.");
    }
  } else {
    alert("I guess you changed your mind, maybe next time.");
  }
} else {
  alert("Ok, maybe next time.");
}
