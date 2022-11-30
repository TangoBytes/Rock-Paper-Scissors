let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const choices = {
  Rock: "rock",
  Paper: "paper",
  Scissors: "scissors",
};

const players = {
  Player: "player",
  Computer: "computer",
};

function getComputerChoice(choices) {
  choices = Object.values(choices);
  return choices[Math.floor(Math.random() * choices.length)];
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return null;
  }
  if (
    playerSelection == choices.Rock &&
    computerSelection == choices.Scissors
  ) {
    return players.Player;
  } else if (
    playerSelection == choices.Paper &&
    computerSelection == choices.Rock
  ) {
    return players.Player;
  } else if (
    playerSelection == choices.Scissors &&
    computerSelection == choices.Paper
  ) {
    return players.Player;
  } else return players.Computer;
}

function updateScore() {
  winner == players.Player ? playerScore++ : computerScore++;
}

function playRound() {
  computerSelection = getComputerChoice(choices);
  while (!playerSelection) {
    let rawInput = prompt(
      "Please choose one of the following options\nRock\nPaper\nScissors"
    ).toLowerCase();

    switch (rawInput) {
      case "rock":
        playerSelection = choices.Rock;
        break;
      case "paper":
        playerSelection = choices.Paper;
        break;
      case "scissors":
        playerSelection = choices.Scissors;
        break;
      default: {
        alert("Please choose on of the options.");
        break;
      }
    }
  }

  winner = getWinner(playerSelection, computerSelection);
  console.log(`Player chose ${playerSelection}`);
  console.log(`Computer chose ${computerSelection}`);
  if (winner) {
    console.log(`The winner is... ${winner}`);
    updateScore(winner);
  } else {
    console.log("It was a TIE!");
  }
  console.table({
    PLAYER: "SCORE",
    Player: playerScore,
    Computer: computerScore,
  });
  winner = null;
  playerSelection = null;
  computerSelection = null;
}

function game() {
  while (playerScore < 5 ?? computerScore < 5) {
    playRound();
  }
  console.log(`${playerScore > computerScore ? "PLAYER" : "COMPUTER"} wins!`);
}

game();

// PAPER > ROCK
// ROCK > SCISSORS
// SCISSORS > PAPER
