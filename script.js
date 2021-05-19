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
  good: false,
  errorc: "",
};

function errorchk(){
  // Error checks password length.
  var errorcode;
  if(passwordcom.length>128 || passwordcom.length<8 || isNaN(passwordcom.length))
  { 
    errorcode=window.confirm("ERROR : Make sure to type in number between 8 and 128");
    console.log("errorchk ",passwordcom)
    clearinputs();
    console.log("errochk aft", passwordcom)
  return(errorcode)}
  else{
    return(true);
  }
};

function clearinputs (){
// Clears inputs from form and checkboxes are unchecked
  for (var x in passwordcom) {
    passwordcom[x]="false";
  };
  for (var x=0; x < chkbx.length;x++){
  document.getElementById(chkbx[x]).checked=false;
  }
  document.getElementById("passwdlength").value="";
  return;
};

function usersetfun(){
  // Character set generator (userset) based on user inputs - passwordcom
  var userset="";
  if(passwordcom.upcase){userset=userset+Uppcase};
  if(passwordcom.lwcase){userset=userset+Lowcase};
  if(passwordcom.number){userset=userset+Numerics};
  if(passwordcom.spchar){userset=userset+Specialchars};
  return(userset);
};

function passwordgen(userset){
  // Random selector of characters from userset 
  var passwd="";
  for (var mm=0; mm<passwordcom.length ; mm++){
    passwd+=userset[Math.floor(Math.random() * userset.length)]
  }
  return(passwd)
};

var setform;
function revealhideForm(setform){
  // Function to reveal (setform =1) or hide (x=0) Form - Button is inverse displayed
  var chngme = document.getElementById("infoarea");
  var chngme2 = document.getElementById("generate");
  if(setform===1){
    chngme.setAttribute("style","display: flex")
    writeInstructions();
    chngme2.setAttribute("style", "display:none");
  }
  else {
    chngme.setAttribute("style","display: none")
    chngme2.setAttribute("style", "display:inline-box");
  };
  return;
};

function writeInstructions(){
  // Write instructions on how to fill out form
  var InstructionText = document.querySelector("#password");
  InstructionText.value = "Instructions (Complete form below) 1) Type in Password length (between 8-128 char) 2) Select Password Composition  3) Click Submit when complete"
  return;
};

function writePassword() {
  // Write password to textbox, hide Form, bring back Gen btn
  revealhideForm(0);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  return;
};

function legalpwd(passwdcomp){
  if(!errorchk()){
    passwordcom.good=false;
    window.alert("Enter a number or password length out of bounds"); 
    return(false);
  };
  if(!passwordcom.lwcase && !passwordcom.upcase && !passwordcom.spchar){
    passwordcom.good = false;
    window.alert(" Need to select at least one category for password compostion")
    return(false);
  };
  return(true);
};

function confirmpwd(){
  // Confirms userinputs as valid, updates password.good
  if(!legalpwd()){
    console.log("one"); 
    window.alert("Non legal password");
    return(false);  };
  var passl = false;
  var compass = false;
  var errorcode;
  passx = window.confirm("You have chosen password length of  " +  passwordcom["length"]);
  console.log("passx ",passx)
  //  Compose message for confirm password composition
  var confmsg = " ";
  for (var i=0; i < chkbx.length; i++){
    if(passwordcom[chkbx[i]]){
      confmsg +=  chkbx[i]+ " - " ;
    };
  };
  compass = window.confirm("You have selected password composition of: "+ confmsg);
  console.log("compass ", compass);
  if(!compass || !passx){
    passwordcom.good = false;
    passwordcom.errorc="userpwcomp";
    console.log("two");
    return(false);
  }
  else{
    console.log("confirmed!")
    return(true); }; 
};

function passwdcomp(){
// Collect User selections on password composition
// Collect checkboxes
  for (var x=0; x<chkbx.length;x++){
    passwordcom[chkbx[x]] = document.getElementById(chkbx[x]).checked;
  }
  // Collect password length
    passwordcom.length = parseInt(document.getElementById("passwdlength").value);
    var Userset = usersetfun();
    password=passwordgen(Userset);
    writePassword(password);
    return;
    };


  function generatepwd() {
  // Main function enabled by Generate Password button => Reveal form, hide Generate btn
    revealhideForm(1);
    clearinputs();
    return;
      };
    
// Run Code - by clicking btn with id=generate     
var resetBtn = document.getElementById("reset") ;
var submitBtn = document.getElementById("charbut") ;
var generateBtn = document.getElementById("generate");
generateBtn.addEventListener("click",generatepwd);
resetBtn.addEventListener("click",clearinputs);
submitBtn.addEventListener("click",passwdcomp);
