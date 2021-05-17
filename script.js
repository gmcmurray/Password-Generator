// Assignment Code
var generateBtn = document.querySelector("#generate");

// Globals and helper functions
// Four sets of characters for password
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase=lowercase.toUpperCase();
var numerics="0123456789"
var specialchars="~!(-_][.>;<:@%&*+="
// userinfo collected in passwordinfo Object.
var pwd =function(x,y,z,t,s){passwordinfo = {
    lowerc : x,
    upperc : y,
    spechar : z,
    numb : t, 
    lenght : s};}


// Write password to the #password input

var usersetfun = function(){
  userset="";
  if(passwordinfo.upperc>0){userset=userset+uppercase}
  if(passwordinfo.lowerc>0){userset=userset+lowercase}
  if(passwordinfo.numb>0){userset=userset+numerics}
  if(passwordinfo.spechar>0){userset=userset+specialchars}
  return(userset)
}

pwd(1,1,1,1,10);
console.log(passwordinfo)
var Userset= usersetfun();
console.log(Userset);

var passwordresult = function(userset){
  var passwd="";
  for (var mm=0; mm<passwordinfo.lenght ; mm++){
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
