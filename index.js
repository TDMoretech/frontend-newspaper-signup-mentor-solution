const popupButton = document.querySelector("#popup button");
//const input = document.getElementById("mail");
const formButton = document.getElementById("emailForm");
const phase = document.getElementById("phase");

//function emailChecker() {
  //var eMail = input.value
  //const emailText = document.querySelector("errorAlert")
 // const emailDiv = document.getElementById("mail");
 // if (eMail != "" && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(eMail)) {

  //}
//}

popup.addEventListener("click", closePopup);
formButton.addEventListener("click", openPopup);

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.getElementById("errorAlert").innerHTML +=("Valid email requried");
open-popup.focus();
return true;
}
else
{
  alert("You have entered an invalid email address!");
  open-popup.focus();
  return false;
  }
}

function openPopup(e) {
  e.preventDefault();
  phase.classList.add("open-popup");
  popup.classList.remove("open-popup");
  console.log("open");
}

function closePopup() {
  popup.classList.add("open-popup");
  phase.classList.remove("open-popup");
  console.log("close");
}
