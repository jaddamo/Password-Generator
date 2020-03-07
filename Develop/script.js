// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOutput = document.querySelector("password");
var passwordArray = []; 


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
console.log(passwordArray);


// RANDOM PASSWORD GENERATOR
// PSEUDOCODE

`
  ###As an employee with access to sensitive data 
  ###I Want to randomly generate a password that means certain criteria

`