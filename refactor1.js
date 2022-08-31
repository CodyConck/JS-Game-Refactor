// SHOTGUN BEAR KARATE (REFACTOR)
let playGame = confirm("Shall we play Shotgun Bear Karate?");
if (playGame) {
  //play
  while (playGame) {
    const playerChoose = prompt("Please enter shotgun bear or karate.");
    if (playerChoose || playerChoose === "") {
      const playerOneChoice = playerChoose.trim().toLowerCase();
      if (
        playerOneChoice === "shotgun" ||
        playerOneChoice === "bear" ||
        playerOneChoice === "karate"
      ) {
        const computerChoice = Math.floor(Math.random() * 3);
        const sbkArray = ["shotgun", "bear", "karate"];
        const computer = sbkArray[computerChoice];

        const result =
          playerOneChoice === computer
            ? `playerOneChoice: ${playerOneChoice}\nComputer: ${computer}\nTie game!`
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

        playGame = confirm("Play again?");
        if (!playGame) alert("Ok, thanks for playing!");
        continue;
      } else {
        alert("You didn't enter shotgun bear or karate.");
        continue;
      }
    } else {
      alert("I guess you changed your mind, maybe next time.");
      break;
    }
  }
} else {
  alert("Ok, maybe next time.");
}
