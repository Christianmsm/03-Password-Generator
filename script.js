// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let lowerCaseEl = "abcdefghijklmnopqrstuvxyz";
let upperCaseEl = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let specialCharacterEl = "!@#$%^&*(,.>,<";
let numberEl = "1234567890";
let passwordArray = [];
let finalPassword = [];


function theLength() {
  let passwordLength = prompt("How many characters long would you like your password to be?");
  if (passwordLength >= 8 && passwordLength <= 128); {
    return passwordLength;
  }
}

function lowerCaseOption() {
  let randomLowerCase = lowerCaseEl[Math.floor(Math.random() * lowerCaseEl.length)];
  let lowerCaseChoice = lowerCaseEl(randomLowerCase);
  return lowerCaseChoice;
}

function upperCaseOption() {
  let randomUpperCase = Math.floor(Math.random() * upperCaseEl.length);
  let upperCaseChoice = upperCaseEl(randomUpperCase);
  return upperCaseChoice;
}

function specialCharacterOption() {
  let randomSpecialCharacter = Math.floor(Math.random() * specialCharacterEl.length);
  let specialCharacterCaseChoice = specialCharacterEl(randomSpecialCharacter);
  return specialCharacterCaseChoice;
}

function numberOption() {
  let randomNumber = Math.floor(Math.random() * numberEl.length);
  let numberChoice = numberEl(randomNumber);
  return numberChoice;
}

function generatePassword() {
  passwordArray.length = 0

  let passwordLength = prompt("How many characters long would you like your password to be?");
  if (passwordLength >= 8 && passwordLength <= 128); {
  }

  let passwordLowerCase = confirm("would you like to include a lowercase? Y/N?");
  if (passwordLowerCase); {
    passwordArray.push(...lowerCaseEl);
  }


  let passwordUpperCase = confirm("Would you like to include an uppercase? Y/N?")
  if (passwordUpperCase); {
    passwordArray.push(...upperCaseEl);
  }

  let passwordNumeric = confirm("Would you like to include a numeric? Y/N?");
  if (passwordNumeric); {
    passwordArray.push(...numberEl);
  }

  let passwordSpecChar = confirm("Would you like to include a special character? Y/N?");
  if (passwordSpecChar); {
    passwordArray.push(...specialCharacterEl);
  }


  // let result = "";
  for (let i = 0; i < passwordLength; i++) {
    finalPassword.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
  }
  return finalPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log('password',password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password.join('');

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// 
