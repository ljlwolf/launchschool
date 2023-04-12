/* eslint-disable max-statements */
/* eslint-disable consistent-return */
/* eslint-disable max-lines-per-function */
const readline = require('readline-sync');

console.log('Welcome to Rock, Paper, Scissors');

function start() {
  console.log('Please choose, Rock, Paper, or Scissors');
  const getUserChoice = userInput => {
    userInput = readline.question();
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' ||
      userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error, please select rock, paper or scissors');
    }
  };
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return ('rock');
      case 1:
        return ('paper');
      case 2:
        return ('scissors');
    }
  };

  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return 'This game is a tie';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Sorry, the computer has won!';
      } else {
        return 'Congratulations, you won!';
      }
    }

    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Sorry, the computer has won!';
      } else {
        return 'Congratulations, you won!';
      }
    }

    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Sorry, the computer has won!';
      } else {
        return 'Congratulations, you won!';
      }
    }

    if (userChoice === 'bomb') {
      return 'Congratulations, you won!';
    }
  };

  const playGame = () => {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };

  playGame();
}
start();

console.log('Would you like to play again? y/n');
let response = readline.question();

if (response === 'y') {
  start();
}

