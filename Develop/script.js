// Assignment code here

let listUppercaseLetters = ["A","B","C","D","E","F","G"]
let listLowercaseLetters = ["a","b","c","d","e","f","g"]
let listNumbers = ["7","6","5","4","3","2","1"]
let listSpecial = ["!","@","#","%","&","?"]
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//console.log(generateBtn)
function generatePassword(){
 let lenghtOfPassword = prompt("what is the length of you password?");
 let confirmUppercaseLetters = confirm("Would you like Uppercase letters?")
 let confirmLowercaseLetters = confirm("Would you like lowercase letters?")
 let confirmNumbers = confirm("Would you like numbers?")
 let confirmSpecial = confirm("Would you like special characters?")
 console.log(confirmUppercaseLetters)
 var finalpassword;
 if (confirmUppercaseLetters === true){
    finalpassword = listUppercaseLetters[Math.floor(Math.random() * listUppercaseLetters.length)]
  }

  else {
    console.log("i did not choose uppercase" )
  }
 
 console.log("this is final password ",finalpassword)
 
 
 
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
