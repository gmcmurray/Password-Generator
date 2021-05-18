// Globals and helper functions
// Four sets of characters for password
var Lowcase = "qwertyuiopasdfghjklzxcvbnm";
var Uppcase=Lowcase.toUpperCase();
var Numerics="0123456789";
var Specialchars="~!(-_][.>;<:@%&*+=";
var password="";
var chkbx=["lwcase","upcase","number","spchar"]

// password object with five user inputs and one good password checker
var passwordcom = {
  lwcase: false,
  upcase: false,
  number: false,
  spchar: false,
  length:8,
  good:false,
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Error check function for password length and missing inputs 

var errorchk = function(){
  if(passwordcom.length>128 || passwordcom.length<8 || isNaN(passwordcom.length)||(
  !passwordcom.lwcase && !passwordcom.upcase && !passwordcom.number && !passwordcom.spchar))
  { 
    window.alert("ERROR : Make sure to type in number between 8 and 128, and have at least one char group selection, Press Generate Password again");
    clearinputs();
  return(false)}
  else{
    return(true);
  }
};
// Clears inputs from form and checkboxes are unchecked
var clearinputs = function(){
  for (var x in passwordcom) {
    passwordcom[x]="false";
  };
  for (var x=0; x < chkbx.length;x++){
    document.getElementById(chkbx[x]).checked=false;
  }
  document.getElementById("passwdlength").value="";
  return;
};
// Character set generator (userset) based on user inputs - passwordcom
function usersetfun(){
  // document.querySelector("#generate");
  var userset="";
  if(passwordcom.upcase){userset=userset+Uppcase};
  if(passwordcom.lwcase){userset=userset+Lowcase};
  if(passwordcom.number){userset=userset+Numerics};
  if(passwordcom.spchar){userset=userset+Specialchars};
  return(userset);
};

// Random selector of characters from userset 

var passwordgen = function(userset){
  var passwd="";
  for (var mm=0; mm<passwordcom.length ; mm++){
    passwd+=userset[Math.floor(Math.random() * userset.length)]
  }
  return(passwd)
};

function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
}
// writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword());

function passwdcomp(){
// Collect User selections on password composition
console.log("Made it to passwdcomp");
  for (var x=0; x<chkbx.length;x++){
    passwordcom[chkbx[x]] = document.getElementById(chkbx[x]).checked;
  }
    passwordcom.length = parseInt(document.getElementById("passwdlength").value);
    console.log(passwordcom);
    passwordcom.good = confirm("Are your selections?  " + "lowercase " + passwordcom.lwcase + 
    "; uppercase " + passwordcom.upcase + "; number " +  passwordcom.number + "; specialchar "
     + passwordcom.spchar + "; length of password " + passwordcom.length);
    // passwordcom.good=cfrm();
    console.log("good ", passwordcom);
    passwordcom.good=errorchk();
    console.log(passwordcom);
    if(passwordcom.good){
      var Userset = usersetfun();
      password=passwordgen(Userset);
      writePassword();
      return(password);
    }
    else{window.alert("There has been an error-press Generate Password again")}
    console.log(passwordcom)
    };

// Main function enabled by Generate Password button
    function generatepwd() {
       var chngme = document.getElementById("infoarea");
       chngme.setAttribute("style","display: flex")
       document.querySelector("#password").textContent = "Instructions: 1) Set desired length of password 2) pick comp";
       var chngme2 = document.getElementById("generate");
       chngme2.setAttribute("style", "display:none");
       return;
       };