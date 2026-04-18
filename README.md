[Preview Link](https://francescogemolo.github.io/JavaScript---Assignment-2/)

# Rock, Paper, Scissors Game

A simple JavaScript-based rock-paper-scissors game where players compete against an Evil AI in 5 rounds. The game features a dramatic, AI-themed narrative to make the experience more engaging.

## Code Overview

The project includes the following files:

### Files
- `index.html`: A basic HTML page that loads the JavaScript.
- `game.js`: Contains the game logic for the browser prompt version.

### Key Functions
The game uses these JavaScript functions:

- `computerPlay()`: Generates a random choice (rock, paper, or scissors) using `Math.random()` and array indexing.
- `playRound(playerSelection, computerSelection)`: Determines the winner of a round based on game rules, returning the result message.
- `getPlayerInput(roundNumber, quitMessage)`: Handles user input with validation, provides random AI-themed error messages for invalid input, and confirms quit intention when the user cancels.
- `confirmExit()`: Prompts the user with a confirmation dialog to ensure they want to quit the game.
- `game()`: Main function that initializes the game, manages 5 rounds of play, handles scoring, and provides AI-themed feedback using `console.log()` and `alert()`.
- `declareFinalWinner(playerScore, computerScore)`: Displays the final score and declares the winner with themed messages.
- `init()`: Initializes the game by showing instructions in the console and calling the main game function.

The game uses browser prompts for input, confirm dialogs for quit confirmation, and console/alert output for feedback. It includes an array of randomized invalid input messages for added engagement.

## Contributors

- [Paula BC Dev](https://github.com/PaulaBCDev)
- [Francesco Gemolo](https://github.com/francescoGemolo)
- [Daniele LG90](https://github.com/DanieleLG90)

This project was developed collaboratively as part of a JavaScript assignment.