// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let lowerCaseEl = ["a","b","c","d,","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];
let upperCaseEl = ["A","B","C","D,","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
let specialCharacterEl = ["!","@","#","$","%","^","&","*","(",",",".",">",",","<"];
let numberEl = ["1","2","3","4","5","6","7","8","9","0"];
let passwordArray = [""];
// var isLowerCase = document.querySelector("#lowercase");
// var isUpperCase = document.querySelector("#uppercase");
// var isNumber = document.querySelector("#numbers");
// var isSpecialCharacter = document.querySelector("#specialCharacter");
// var form = document.querySelector("#form");

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

let passwordLowerCase = prompt("would you like to include a lowercase? Y/N?");
if (passwordLowerCase === "Y"); {
passwordArray.push(lowerCaseEl);
}


let passwordUpperCase = prompt("Would you like to include an uppercase? Y/N?")
if (passwordUpperCase === "Y"); {
passwordArray.push(upperCaseEl);
}

let passwordNumeric = prompt("Would you like to include a numeric? Y/N?");
if (passwordNumeric === "Y"); {
  passwordArray.push(numberEl);
}

let passwordSpecChar = prompt("Would you like to include a special character? Y/N?");
if (passwordSpecChar === "Y");{
  passwordArray.push(specialCharacterEl);
}
let result = "";
 for (let i = 0; i < passwordLength; i++) {
passwordOption = Math.floor(Math.random() * passwordArray.length); 
chosenCharacter = passwordArray[passwordOption];
result += chosenCharacter;
console.log(result);
return result;
 }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// 