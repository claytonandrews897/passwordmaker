// Assignment code here

let listUppercaseLetters = ["A","B","C"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//console.log(generateBtn)
function generatePassword(){
 let lenghtOfPassword = prompt("what is the length of you password?");
 console.log(lenghtOfPassword)
}
// Write password to the #password input
function writePassword() {


  var password = generatePassword();
  

   var passwordText = document.querySelector("#password");
   

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
