function setupGame() {
  uiElements = assignDomElements();
  score = startScoreboard();
  updateScreen(score);
}

function updateScreen(score) {
  uiElements.playerScore.textContent = score.player;
  uiElements.computerScore.textContent = score.computer;
  uiElements.message.textContent = score.messageText;
}

function startScoreboard() {
  let score = {
    player: 0,
    computer: 0,
    winner: "",
    messageText: "Choose Rock, Paper, or Scissors...",
    champion: null,
  };
  return score;
}

function assignDomElements() {
  let uiElements = {
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissors: document.getElementById("scissors"),
    box: document.getElementById("box"),
    playerScore: document.getElementById("player-score"),
    computerScore: document.getElementById("computer-score"),
    message: document.getElementById("message"),
  };

  uiElements.box.addEventListener("click", function (e) {
    if (e.target.id == uiElements.box.id) {
      return;
    }
    playRound(e.target.id);
  });

  return uiElements;
}

function getWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "tie";
  }
  if (playerSelection == "rock" && computerSelection == "scissors") {
    score.player++;
    return "player";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    score.player++;
    return "player";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    score.player++;
    return "player";
  } else {
    score.computer++;
    return "computer";
  }
}

function updateMessage(winner) {
  switch (winner) {
    case "player":
      return "Player Wins!";
    case "computer":
      return "Computer Wins!";
    case "tie":
      return "Tie! Try Again...";
  }
}

function checkChampion(score) {
  if (score.player == 5) {
    return "Player";
  } else if (score.computer == 5) {
    return "Computer";
  }
}

function playRound(playerSelection) {
  computerSelection = ["rock", "paper", "scissors"][
    Math.floor(Math.random() * 3)
  ];
  score.winner = getWinner(playerSelection, computerSelection);
  score.messageText = updateMessage(score.winner);
  updateScreen(score);
  champion = checkChampion(score);
  if (champion != null) {
    score.messageText = "The Final Champion is... " + champion + "!";
    updateScreen(score);
    uiElements.rock.disabled = true;
    uiElements.paper.disabled = true;
    uiElements.scissors.disabled = true;
  }
}

setupGame();
