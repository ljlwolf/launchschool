// ask the user for the first number
// ask the user for the second number
// ask the user for the operation 
// perform the operation 
// display the result of the operation 

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

while (true) {
  prompt("Welcome to the Calculator!");

  prompt("What is the first number?");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("Hmmm.... that doesn't look like a valid number.");
    number1 = readline.question();
  }

  prompt("What is the second number?");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("Hmmm.... that doesn't look like a valid number.");
    number2 = readline.question();
  }

  prompt("What would you like to do?\n1) add 2) subtract 3) multiply 4) divide");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt('Must choose 1, 2, 3, 4')
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;

  }
  prompt(`The result is ${output}`);

  prompt('Would you like to start a new calculation? (y/n)');
  let response = readline.question();

  if (response[0].toLowerCase() !== 'y') break;

}







