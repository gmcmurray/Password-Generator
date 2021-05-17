// Assignment Code
var generateBtn = document.querySelector("#generate");

// Globals and helper functions
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase=lowercase.toUpperCase();
console.log(uppercase)
// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword());
