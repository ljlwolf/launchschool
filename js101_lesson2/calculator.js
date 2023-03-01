// ask the user for the first number
// ask the user for the second number
// ask the user for the operation 
// perform the operation 
// display the result of the operation 
const readline = require('readline-sync');

console.log("Welcome to the Calculator!");

console.log("What is the first number?");
let num1 = readline.question();

console.log("What is the second number?");
let num2 = readline.question();

console.log("What would you like to do?\n1) add 2) subtract 3) multiply 4) divide");
let operation = readline.question();

let output;
if (operation === '1') {
  output = Number(num1) + Number(num2);
} else if (operation === '2') {
  output = Number(num1) - Number(num2);
} else if (operation === '3') {
  output = Number(num1) * Number(num2);
} else if (operation === '4') {
  output = Number(num1) / Number(num2);
}

console.log(`The result is ${output}`);







