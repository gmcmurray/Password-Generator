// Globals and helper functions
// Four sets of characters for password
var Lowcase = "qwertyuiopasdfghjklzxcvbnm";
var Uppcase=Lowcase.toUpperCase();
var Numerics="0123456789";
var Specialchars="~!(-_][.>;<:@%&*+=";
var password="";
var chkbx=["lwcase","upcase","number","spchar"]
var setform;
var resetBtn = document.querySelector("#reset") ;
var submitBtn = document.querySelector("#charbut");
var generateBtn = document.querySelector("#generate");
var infoarea = document.getElementById("infoarea");
var messageText = document.querySelector("#textmsg");
var passwordText = document.querySelector("#password");
var Instructions = "Create a Password of variable length, composed of case sensitive alphanumeric + special Characters. Instructions (Complete form below): 1) Type in Password length (between 8-128 char) 2) Select Password Composition  3) Click Submit when complete"
 
  // password object with five user inputs and one good password checker
var passwordcom = {
  lwcase: false,
  upcase: false,
  number: false,
  spchar: false,
  length: 8,
  good: true,
  errorc: "",
};

function pwcomp_errorchk(){
  // Checks composition of password makesure at least one box is checked
  var compass = "";
  var len =0;
  var confmsg = " ";
      for (var x=0; x < chkbx.length; x++){
        if(document.getElementById(chkbx[x]).checked){
          confmsg +=  chkbx[x]+ " - " ;
          len++;
        };
      };
      
  if(len<1)
  { 
    console.log("errorchk len ", len)
    compass = "COMPOSITION ERROR: Need to have at least one category checked"
    console.log("errochk aft", passwordcom)
    passwordcom.good=false;
  }
  else{
    compass = " You have selected password composition of: "+ confmsg;
    console.log("compass ", compass);
    passwordcom.good=true;
  }
  return(compass);
};

function pwlength_errorchk(){
  // Error checks password length.
  var passx = "";

   if(passwordcom.length>128 || passwordcom.length<8 || isNaN(passwordcom.length))
  { 
    passx="LENGTH ERROR : Password length needs to be between 8 and 128"
    // clearinputs();
    errorcode=false;
    console.log("errochk aft", passwordcom)
    passwordcom.good=false;
  }
  else{
    passx="You have a pass word length of " + passwordcom.length +";";
    passwordcom.good=true;
  }
  return(passx);
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
  if(passwordcom.upcase===true){userset=userset+Uppcase};
  if(passwordcom.lwcase===true){userset=userset+Lowcase};
  if(passwordcom.number===true){userset=userset+Numerics};
  if(passwordcom.spchar===true){userset=userset+Specialchars};
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

function revealhideForm(setform){
  // Function to reveal (setform =1) or hide (x=0) Form - Button is inverse displayed
  console.log("madeit reveal hide" , infoarea);
  if(setform===1){
      console.log("reset form =1");
      infoarea.setAttribute("style","display: flex");
      writeMessage(Instructions);
      generateBtn.setAttribute("style", "display: none");
  }
  else if(setform ===0){
    generateBtn.addEventListener("click", passwdcomp);
    infoarea.setAttribute("style","display: none")
    generateBtn.setAttribute("style", "display:inline-box");
  };
  return;
};

function writeMessage(textval){
  // Write instructions on how to fill out form
  messageText.textContent = textval;
   return;
};

function writePassword() {
  // Write password to textbox, hide Form, bring back Gen btn
  // revealhideForm(0);
  if(passwordcom.good){
    passwordText.value = password;
  }
 
  return;
};

function confirmpwd(){
  // Confirms userinputs as valid, updates password.good
  var resultmsg ="";
  if(passwordcom.good){
    resultmsg= "Password Result Above; " + pwlength_errorchk() + ";  "+ pwcomp_errorchk() +"; Press Reset to Generate New Password";
 
     }
  else{
    resultmsg= "Invalid Inputs: " + pwlength_errorchk() + ";  "+ pwcomp_errorchk();
  }
  
  writeMessage(resultmsg);
  return(resultmsg); 
};

function passwdcomp(){
// Main Function : Reveal form, collect inputs, generate password, confirm, print
// Collect User data from checkboxes and form input
var compans="";
for (var x=0; x<chkbx.length;x++){
  passwordcom[chkbx[x]] = document.getElementById(chkbx[x]).checked;
  console.log(x,chkbx[x],passwordcom[chkbx[x]])
  }
  // Collect password length
  passwordcom["length"] = parseInt(document.getElementById("passwdlength").value);
  compans=confirmpwd();
  if(passwordcom.good){
    var Userset = usersetfun();
    console.log("after Userset",Userset);
    password=passwordgen(Userset) ;
    writePassword(password);
    writeMessage(compans)
    console.log(password)
  }
  return;
    };

// Run Code - by clicking btn Generate Password with id=generate     
submitBtn.addEventListener("click",function(e1){
  e1.preventDefault();
  e1.stopPropagation();
  passwdcomp(e1);});

// Clears inputs on form
resetBtn.addEventListener("click",clearinputs);

// Reveals form and covers Generate Btn
generateBtn.addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  revealhideForm(1);});
