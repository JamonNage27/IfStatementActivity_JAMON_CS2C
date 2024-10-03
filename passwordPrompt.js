let Password = "correctPassword";
let User;

do {
  User = prompt("Enter your password:");
  if (User !== Password) {
    console.log("Incorrect, try again.");
  }
} while (User !== Password);

console.log("Access granted.");
