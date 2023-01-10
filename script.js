// Assignment Code

var generateBtn = document.querySelector("#generate");
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "/"];

//This command is not working.
/*if (generateBtn.addEventListener("click" === true) {
  prompt("Please choose a password lenght between 8 and 128 characters!");
}*/

prompt("Please choose a password length between 8 and 128 character in length!")

function determineLength() {
  
  if (passWordLength < 8) {
    alert("Password length must be at least 8 characters");
    determineLength();
  } else if (passWordLength > 128) {
    alert("Password length must not be longer than 128 characters");
    determineLength();
  } else {
    alert("The next questions will determine new parameters for your password.")
  }
}

function generatePassword() {
  if (lowerCase = true) {

  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
