let number = Math.floor(Math.random() * 10) + 1;
let guess = parseInt(prompt("Guess a number between 1 and 10:"));

while (guess !== number) {
  if (guess > number) {
    console.log("Too high!");
  } else {
    console.log("Too low!");
  }
  guess = parseInt(prompt("Guess a number between 1 and 10:"));
}

console.log("Correct!");
