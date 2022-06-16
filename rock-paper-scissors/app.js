let playerScore = 0;
let computerScore = 0;

const gameButtons = document.querySelectorAll(".game-button");
const results = document.querySelector('#game-results');

const modal = document.querySelector('#game-end');
const finalScore = document.querySelector('#game-end-modal');
const playerScoreboard = document.querySelector('#player-score');
const computerScoreboard = document.querySelector('#computer-score');

gameButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    results.innerText = playRound(e.target.innerText.toLowerCase(), computerPlay());
  });
});

const computerPlay = () => {
  let randomNumber = Math.floor((Math.random() * 3) + 1);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const scoreUpdateAnimate = (player) => {
  player.classList.add('score-active');
  setTimeout(() => {
    player.classList.remove('score-active')
  }, 500);
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection.toLowerCase() == computerSelection) {
    gameResult(playerScore, computerScore);
    return "It's a tie!";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
    computerScore++;
    computerScoreboard.innerText = `Computer: ${computerScore}`;
    gameResult(playerScore, computerScore);
    scoreUpdateAnimate(computerScoreboard);
    return "You lose! Paper beats Rock";
  } else if (playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") {
    playerScore++;
    playerScoreboard.innerText = `You: ${playerScore}`;
    gameResult(playerScore, computerScore);
    scoreUpdateAnimate(playerScoreboard);
    return "You win! Rock beats Scissors";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
    computerScore++;
    computerScoreboard.innerText = `Computer: ${computerScore}`;
    gameResult(playerScore, computerScore);
    scoreUpdateAnimate(computerScoreboard);
    return "You lose! Scissors beats Paper";
  } else if (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") {
    playerScore++;
    playerScoreboard.innerText = `You: ${playerScore}`;
    gameResult(playerScore, computerScore);
    scoreUpdateAnimate(playerScoreboard);
    return "You win! Paper beats Rock";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
    computerScore++;
    computerScoreboard.innerText = `Computer: ${computerScore}`;
    gameResult(playerScore, computerScore);
    scoreUpdateAnimate(computerScoreboard);
    return "You lose! Rock beats Scissors";
  } else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
    playerScore++;
    playerScoreboard.innerText = `You: ${playerScore}`;
    gameResult(playerScore, computerScore);
    scoreUpdateAnimate(playerScoreboard);
    return "You win! Scissors beats Paper";
  }
}


const playAgain = document.createElement('button');
playAgain.setAttribute('id', 'play-again');
playAgain.innerText = "Play again";

const gameResult = (playerScore, computerScore) => {
  if (playerScore == 5 || computerScore == 5) {
    modal.classList.add('game-end-on');
    if (playerScore > computerScore) {
      finalScore.textContent = "You win the game!\n";
    } else if (computerScore > playerScore) {
      finalScore.textContent = "You lose the game!\n";
    } else {
      finalScore.textContent = "You tied the game!\n";
    }
    finalScore.appendChild(playAgain);
  }
}

playAgain.addEventListener('click', () => {
  resetGame();
});

const resetGame = () => {
  finalScore.removeChild(playAgain);
  modal.classList.remove('game-end-on');
  playerScore = computerScore = 0;
  playerScoreboard.innerText = `You: ${playerScore}`;
  computerScoreboard.innerText = `Computer: ${computerScore}`;
};