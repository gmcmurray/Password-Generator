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
var genbutton = document.getElementById("generate");
  
  // password object with five user inputs and one good password checker
var passwordcom = {
  lwcase: false,
  upcase: false,
  number: false,
  spchar: false,
  length: 8,
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
      writeInstructions();
      genbutton.setAttribute("style", "display: none");
  }
  else if(setform ===0){
    generateBtn.addEventListener("click", passwdcomp);
    infoarea.setAttribute("style","display: none")
    genbutton.setAttribute("style", "display:inline-box");
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
  // revealhideForm(0);
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
  var passx = false;
  var compass = false;
  passx = window.confirm("You have chosen password length of  " +  passwordcom["length"]);
  console.log("passx ",passx)
  console.log("confmsg" ,passwordcom)
  //  Compose message for confirm password composition
  var confmsg = " ";
  for (var x=0; x < chkbx.length; x++){
    if(document.getElementById(chkbx[x]).checked){
      confmsg +=  chkbx[x]+ " - " ;
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
// Main Function : Reveal form, collect inputs, generate password
  for (var x=0; x<chkbx.length;x++){
  passwordcom[chkbx[x]] = document.getElementById(chkbx[x]).checked;
  console.log(x,chkbx[x],passwordcom[chkbx[x]])
  }
  // Collect password length
  passwordcom["length"] = parseInt(document.getElementById("passwdlength").value);
  confirmpwd();
  console.log("after length",passwordcom);
  var Userset = usersetfun();
  console.log("after Userset",Userset);
  password=passwordgen(Userset);
  writePassword(password);
  console.log(password)
  return;
    };

// Run Code - by clicking btn Generate Password with id=generate     
submitBtn.addEventListener("click",function(e1){
  e1.preventDefault();
  e1.stopPropagation();
  passwdcomp();});

// Clears inputs on form
resetBtn.addEventListener("click",clearinputs);

// Reveals form and covers Generate Btn
generateBtn.addEventListener("click",function(e){
  e.preventDefault();
  e.stopPropagation();
  revealhideForm(1);});
