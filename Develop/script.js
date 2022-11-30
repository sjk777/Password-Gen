var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numericalNums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+"];

var possibleChars = [];
var chosenPassword = "";

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = window.prompt(
    "choose number between 8-128 for the amount of characters"
  );

  if (
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(parseInt(passwordLength))
  ) {
    window.alert("choose a number between 8 and 128 to proceed");
    return;
  }
  var upperCaseChars = window.confirm(" Do you want any upper case letters?");
  var lowerCaseChars = window.confirm(" Do you want any lower case letters?");
  var symbolChars = window.confirm(" Do you want any special characters?");
  var numChars = window.confirm(" Do you want any numbers?");

  var password = [];

  var counter = 0;

  if (upperCaseChars == true) {
    possibleChars = possibleChars.concat(upperCase);
    var random = Math.floor(Math.random() * upperCase.length);
    password.push(upperCase[random]);
    counter++;
  }
  if (lowerCaseChars == true) {
    possibleChars = possibleChars.concat(lowerCase);
    var random = Math.floor(Math.random() * lowerCase.length);
    password.push(lowerCase[random]);
    counter++;
  }
  if (symbolChars == true) {
    possibleChars = possibleChars.concat(specialChars);
    var random = Math.floor(Math.random() * specialChars.length);
    password.push(specialChars[random]);
    counter++;
  }
  if (numChars == true) {
    possibleChars = possibleChars.concat(numericalNums);
    var random = Math.floor(Math.random() * numericalNums.length);
    password.push(numericalNums[random]);
    counter++;
  }

  for (var i = 0; i < passwordLength - counter; i++) {
    var random = Math.floor(Math.random() * possibleChars.length);
    password.push(possibleChars[random]);
  }

  return password.join("");
}
