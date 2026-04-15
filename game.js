// Global const
const options = ["rock", "paper", "scissors"];

function computerPlay() {
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

// Game Logic
function playRound(playerSelection, computerSelection) {
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();

  if (p === c) return "Tie";

  // Win Condition
  const playerWins =
    (p === "rock" && c === "scissors") ||
    (p === "paper" && c === "rock") ||
    (p === "scissors" && c === "paper");

  if (playerWins) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Main Code Logic
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
      console.log("%c" + quitMessage, "color: orange;");
      return;
    }

    // Input Validation
    while (!options.includes(playerBet.toLowerCase())) {
      playerBet = window.prompt(`"${playerBet}" is not valid. Try again! Rock, Paper or Scissors?`);
      if (playerBet === null) {
        console.log(quitMessage);
        return;
      }
    }

    const computerBet = computerPlay();
    const resultMessage = playRound(playerBet, computerBet);

    // Score Logic
    if (resultMessage.includes("Win")) {
      playerScore++;
    } else if (resultMessage.includes("Lose")) {
      computerScore++;
    }

    // Output
    console.log(`Round ${round}`);
    console.log(`You chose: ${playerBet} | AI chose: ${computerBet}`);
    console.log(resultMessage);
    console.log(`Score: Player: ${playerScore} - AI: ${computerScore}`);
  }

  // Score Messages (With Colors)
  let finalResult;
  let finalColor;

  if (playerScore > computerScore) {
    finalResult = "Congratulations! You are the Winner and you saved the world!";
    finalColor = "color: lime;";
  } else if (playerScore < computerScore) {
    finalResult = "Oh no! The Evil AI has dominated the world. You lost!";
    finalColor = "color: red;";
  } else {
    finalResult = "It's a draw! The world is safe...for now.";
    finalColor = "color: yellow;";
  }

  console.log("%c" + finalResult, finalColor);
  alert(finalResult);
}

// Prompt
console.log(
  "The Evil AI is waiting. Type %cgame()%c and press Enter to start the battle!",
  "color: green;",
  "color: inherit;"
);