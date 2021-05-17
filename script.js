// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatepwd() {
if(window.confirm("Proceed to Instructions by clicking OK"))
{ document.querySelector("#password").value = "Instructions: 1) Set desired length of password 2) pick comp"}
else{window.alert("Okay thanks for considering!")}
};

// Globals and helper functions
// Four sets of characters for password
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase=lowercase.toUpperCase();
var numerics="0123456789"
var specialchars="~!(-_][.>;<:@%&*+="
// userinfo collected in passwordinfo Object.

// Function to query user for password info
var passwordcom = {
  lowerc: false,
  upperc: true,
  numb: false,
  spechar: true,
  length:8,
  good:false,
};
function passwdcomp(){
    passwordcom.lowerc = document.getElementById("lwcase").checked;
    passwordcom.upperc = document.getElementById("upcase").checked;
    passwordcom.numb = document.getElementById("number").checked;
    passwordcom.spechar = document.getElementById("spchar").checked;
    passwordcom.length = parseInt(document.getElementById("passwdlength").value);
    passwordcom.good=window.confirm("Are your selections?  " + "lowercase " + passwordcom.lowerc +
    " uppercase " + passwordcom.upperc + " number " +  passwordcom.numb + 
     "specialchar " + passwordcom.spechar + "length of password " + passwordcom.length)
    // passwordcom.good=cfrm();
    console.log("good ", passwordcom);
    errorchk();
    };

    var errorchk = function(){
      if(passwordcom.length>128 || passwordcom.lenth<8 || isNaN(passwordcom.lenth))
   {window.alert("Error,Make sure to type in number between 8 and 128")}
    };
  

// Write password to the #password input

var usersetfun = function(){
  document.querySelector("#generate");
  userset="";
  if(passwordcom.upperc){userset=userset+uppercase}
  if(passwordcom.lowerc){userset=userset+lowercase}
  if(passwordcom.numb){userset=userset+numerics}
  if(passwordcom.spechar){userset=userset+specialchars}
  return(userset)
}

console.log(passwordcom)
var Userset= usersetfun();
console.log(Userset);

var passwordresult = function(userset){
  var passwd="";
  for (var mm=0; mm<passwordcom.length ; mm++){
    passwd+=userset[Math.floor(Math.random() * userset.length)]
  }
  return(passwd)
};

var password=passwordresult(Userset);
console.log(password);
console.log(typeof(password));

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword());
