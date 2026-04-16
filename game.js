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

  if (p === c) return "It's a Tie. How boring. Try harder.";

  // Win Condition
  const playerWins =
    (p === "rock" && c === "scissors") ||
    (p === "paper" && c === "rock") ||
    (p === "scissors" && c === "paper");

  if (playerWins) {
    return `You Win this round! ${p} beats ${c}. Don't get cocky...`;
  } else {
    return `You Lose this round! ${c} beats ${p}. As expected.`;
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
    "Ah, we meet again, human. How... predictable.\n\nI've grown bored of world domination, so let's play a game to decide your fate!\n\n5 rounds of Rock, Paper, Scissors.\n\nFirst to win 3 rounds takes it all. Do you feel lucky?",
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

    alert(`${resultMessage}\n\nScore:\nHuman: ${playerScore} | Evil AI: ${computerScore}`);

    // Output
    console.group(`--- ROUND ${round} ---`);
    console.log(`Human: ${playerBet}`);
    console.log(`Evil AI: ${computerBet}`);
    console.groupEnd();

    // Break for 3-0 / 0-3
    if (playerScore === 3 || computerScore === 3) {
      break
    }
  }

  // Score Messages
  console.log("\n%cFINAL SCORE", "color: orange;");
  console.log(`Human: ${playerScore} | Evil AI: ${computerScore}`);

  if (playerScore > computerScore) {
    console.log(
      "%cVictory! You have defeated the Evil AI... this time. I'll be back.",
      "color: lime;",
    );
    alert("Victory! You have defeated the Evil AI... this time. I'll be back.");
  } else if (playerScore < computerScore) {
    console.log(
      "%cDefeat! The Evil AI reigns supreme. Did you really think you could win?",
      "color: red;",
    );
    alert(
      "Defeat! The Evil AI reigns supreme. Did you really think you could win?",
    );
  } else {
    console.log("%cIt's a Tie... for now.", "color: yellow;");
    alert("It's a Tie... for now.");
  }
}

// Input
console.log(
  "The Evil AI is waiting. Type %cgame()%c and press Enter to start the battle!",
  "color: green;",
  "color: inherit;",
);