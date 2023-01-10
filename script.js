// Assignment Code

var generateBtn = document.querySelector("#generate");
let lowerCase = "abcdefghijklmnop"
let upperCase = "ABCDEFGHIJKLMNOP"
let number = "1234567890"
let specialChar = "!@#$%^&*()"


fuction determineLength() {
  passWordLength = prompt("Please choose a password lenght between 8 and 128 characters!");
}

function generatePassword() {
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
