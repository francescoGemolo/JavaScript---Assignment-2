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
    return `You Win! ${p} beats ${c}`;
  } else {
    return `You Lose! ${c} beats ${p}`;
  }
}

// Main Code Logic
function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Quit
  const quitMessage =
    "Are you giving up? I thought you’d be a worthy opponent...";

  // Intro
  alert(
    "Ah, we meet again, human. How... predictable. \n\nI've grown bored of world domination, so let's play a game to decide your fate: \n5 rounds of Rock, Paper, Scissors.\n\nDo you feel lucky?",
  );

  for (let round = 1; round <= 5; round++) {
    let playerBet = window.prompt(
      `Round ${round}: Choose Rock, Paper or Scissors!`,
    );

    // Quit Logic
    if (playerBet === null) {
      console.log("%c" + quitMessage, "color: orange;");
      return;
    }

    // Input Validation
    while (!options.includes(playerBet.toLowerCase())) {
      playerBet = window.prompt(
        `"${playerBet}" is not valid. Try again! Rock, Paper or Scissors?`,
      );
      if (playerBet === null) {
        console.log("%c" + quitMessage, "color: orange;");
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
    let result = `${resultMessage}`;

    if (playerScore >= 1 || computerScore >= 1) {
      alert(result);
      break;
    } else {
      alert(result);
    }

    // Output
    console.group(`--- ROUND ${round} ---`);
    console.log(`Human: ${playerBet}`);
    console.log(`Evil AI: ${computerBet}`);
    console.groupEnd();
  }

  // Score Messages
  console.log("\n%cFINAL SCORE", "color: orange;");
  console.log(`Human: ${playerScore} | Evil AI: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log("%cVictory! You have saved the world!", "color: lime;");
    alert("Victory! You have saved the world!");
  } else if (playerScore < computerScore) {
    console.log("%cDefeat! The Evil AI dominates the Earth.", "color: red;");
    alert("Defeat! The Evil AI dominates the Earth.");
  } else {
    console.log("%cIt's a Tie... for now.", "color: blue;");
    alert("It's a Tie... for now.");
  }
}

// Input
console.log(
  "The Evil AI is waiting. Type %cgame()%c and press Enter to start the battle!",
  "color: green;",
  "color: inherit;",
);
