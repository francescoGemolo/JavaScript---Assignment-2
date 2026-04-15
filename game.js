// Global const
const options = ["Rock", "Paper", "Scissors"];

function computerPlay() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

// Game Logic
function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerPlay;

  if (p === c) return "Tie";

  // Win Condition
  const playerWins =
    (p === "Rock" && c === "Scissors") ||
    (p === "Paper" && c === "Rock") ||
    (p === "Scissors" && c === "Paper");

  if (playerWins) {
    return `You Win! ${playerSelection} beats ${c}`;
  } else {
    return `You Lose! ${c} beats ${playerSelection}`;
  }
}


function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Quit
  const quitMessage = "Are you giving up? I thought you’d be a worthy opponent...";

  // Intro
  alert("I am the Evil AI, and I challenge you to Rock, Paper, Scissors! Can you beat me in 5 rounds?");

  for (let round = 1; round <= 5; round++) {
    let playerBet = window.prompt(`Round ${round}: Choose Rock, Paper or Scissors`);

    // Quit Logic
    if (playerBet === null) {
      console.log(quitMessage);
      return
    }
  }

  // Input Validation
  while (!options.includes(playerBet.toLowerCase())) {
    playerBet = window.prompt(`"${playerBet}" is not valid. Try again! Rock, Paper or Scissors?`);
    if (playerBet === null) {
      console.log(quitMessage);
      return;
    }
  }

}

// Prompt
console.log(
  "No long no see, human. Type %cgame()%c and press Enter to start...",
  "color: green;",
  "color: inherit;",
);