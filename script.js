// Assignment Code
var generateBtn = document.querySelector("#generate");

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
};
function passwdcomp(){
    passwordcom.lowerc = document.getElementById("lwcase").checked;
    passwordcom.upperc = document.getElementById("upcase").checked;
    passwordcom.numb = document.getElementById("number").checked;
    passwordcom.spechar = document.getElementById("spchar").checked;
    passwordcom.length = document.getElementById("passwdlength").value;
    console.log(passwordcom) };

/* var pwd =function(x,y,z,t,s){
  passwordinfo = {
    lowerc : x,
    upperc : y,
    spechar : z,
    numb : t, 
    lenght : s};
  }  */


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

// pwd(1,1,1,1,10);
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
