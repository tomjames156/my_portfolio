let sendersName = document.querySelector("input#name");
let sendersEmailAddress = document.querySelector("input#e-mail");
let emailSubject = document.querySelector("input#subject");
let emailBody = document.querySelector("input#message");
let sendBtn = document.querySelector("a.send");
let formElements = document.querySelectorAll("form > input");

console.log('fish');

function tryFunc() {
    for(let elmnt of formElements){
        if(elmnt.value == ""){
            sendBtn.style.display = "none";
        }
        else{
            console.log("fish");
        }
    }
}