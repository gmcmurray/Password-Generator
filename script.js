// Globals and helper functions
// Four sets of characters for password
var lowercase = "qwertyuiopasdfghjklzxcvbnm";
var uppercase=lowercase.toUpperCase();
var numerics="0123456789";
var specialchars="~!(-_][.>;<:@%&*+=";
var password="";
var buttons=["lwcase","upcase","number","spchar"]

// password object with five user inputs and one good password checker
var passwordcom = {
  lowerc: false,
  upperc: false,
  numb: false,
  spechar: false,
  length:8,
  good:false,
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Error check function for password length and missing inputs 

var errorchk = function(){
  if(passwordcom.length>128 || passwordcom.length<8 || isNaN(passwordcom.length)||(
  !passwordcom.lowerc && !passwordcom.upperc && !passwordcom.numb && !passwordcom.spechar))
  { 
    window.alert("Error,Make sure to type in number between 8 and 128, and have at least one char group selection, Press Generate Password again");
    clearinputs();}
  return;
};

var clearinputs = function(){
  for (var x in passwordcom) {
    passwordcom[x]="false";
  };
  // var inputs = document.getElementsByClassName("ckboxes");
  // console.log("inputs" , inputs);
  // for (var i = 0; i < inputs.length; i++) {
          // inputs[i].checked = false;};
  // document.getElementsByClassName("ckboxes").checked=false;
  document.getElementById("lwcase").checked=false;
  for (var x=0; x < buttons.length;x++){
    document.getElementById(buttons[x]).checked=false;
  }
  console.log("lwcase",document.getElementById("lwcase").checked)
  document.getElementById("passwdlength").value="";
  return;
};
// Character set generator (userset) based on user inputs - passwordcom
function usersetfun(){
  document.querySelector("#generate");
  var userset="";
  if(passwordcom.upperc){userset=userset+uppercase};
  if(passwordcom.lowerc){userset=userset+lowercase};
  if(passwordcom.numb){userset=userset+numerics};
  if(passwordcom.spechar){userset=userset+specialchars};
  return(userset);
};

// Random selector of characters from userset 

var passwordresult = function(userset){
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
writePassword();
// Add event listener to generate button
generateBtn.addEventListener("click",writePassword());

function passwdcomp(){
    passwordcom.lowerc = document.getElementById("lwcase").checked;
    passwordcom.upperc = document.getElementById("upcase").checked;
    passwordcom.numb = document.getElementById("number").checked;
    passwordcom.spechar = document.getElementById("spchar").checked;
    passwordcom.length = parseInt(document.getElementById("passwdlength").value);
    passwordcom.good = confirm("Are your selections?  " + "lowercase " + passwordcom.lowerc + "; uppercase " + passwordcom.upperc + "; number " +  passwordcom.numb + "; specialchar " + passwordcom.spechar + "; length of password " + passwordcom.length);
    // passwordcom.good=cfrm();
    console.log("good ", passwordcom);
    passwordcom.good=errorchk();
    console.log(passwordcom);
    if(3){
      var Userset = usersetfun();
      password=passwordresult(Userset);
      writePassword();
      return(password);
    }
    else{window.alert("There has been an error-press Generate Password again")}
    console.log(passwordcom)
    };

// Main function enabled by Generate Password button
    function generatepwd() {
      if(window.confirm("Proceed to Instructions by clicking OK"))
      { document.querySelector("#password").value = "Instructions: 1) Set desired length of password 2) pick comp";
        //document.querySelectorAll("#area").style.display="flex"  ;
      // document.getElementById("#infoarea").style.display="display";
      }
      else{window.alert("Okay thanks for considering!")}
      };