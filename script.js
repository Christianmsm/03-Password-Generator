// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
let lowercaseEl = "abcdefghijklmnopqrstuvxyz";
let uppercaseEl = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
let specialCharacterEl = "!@#$%^&*(,.>,<";
let numberEl = "1234567890";

function generatePassword() {

  //Prompt to determine the length of password from the user.
  //If they give a value less than 8 or over 128 they will be given an alert asking to restart the generator
let passwordLength = prompt("How many characters long would you like your password to be?");
  if (passwordLength >= 8 && passwordLength <= 128); 
  else {
   alert('Must choose between 8 - 128 characters.')
   return 'Please try again'
  }


  //Confirm prompts for the user to either include the character type, or not
    let includeLowercase = confirm("would you like to include a lowercase? Click 'OK'");
    let includeUppercase = confirm("Would you like to include an uppercase? Click 'OK'");
    let includeNum = confirm("Would you like to include a numeric? Click 'OK'");
    let includeSpecialChar = confirm("Would you like to include a special character? Click 'OK'");

    if (!includeLowercase && !includeUppercase && !includeNum && !includeSpecialChar) {
      alert('Please use at least one of the character sets.')
    }

    //Checks the answers from the prompts and adds the values into the empty string.
    // 'if' they want to include lowercase, then it will be added into their password
    let elements = '';
    if(includeLowercase) {
      elements += lowercaseEl;
    }
    if(includeUppercase) {
      elements += uppercaseEl;
    }
    if(includeNum) {
      elements += numberEl;
    }
    if(includeSpecialChar) {
      elements += specialCharacterEl;
    }

    //Takes the information that was given by the user and fills the empty string with the random password
  let password = '';
  for (let i = 0; i < passwordLength; i++) {
    password += elements.charAt(Math.floor(Math.random() * elements.length));
  }

  //returns the password
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log('password',password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
