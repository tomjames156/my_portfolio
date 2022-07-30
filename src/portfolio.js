let sendBtn = document.querySelector("a.send");
let formElements = document.querySelectorAll("form > input");
const myEmail = "tomjames156@gmail.com";

function tryFunc(){
    let current_status = true;

    let emailSubject = document.querySelector("input#subject").value;
    let emailBody = document.querySelector("input#message").value;

    for(let element of formElements){
        if(element.value == ""){
            current_status = false;
            sendBtn.removeAttribute("href");
            break;
        }
    }

    if(current_status){
        console.log(emailSubject);
        sendEmail(emailSubject, emailBody);
    }
}

function sendEmail(subject, body){
    sendBtn.setAttribute("href", `mailto:${myEmail}?subject=${separateCharacters(subject)}&body=${separateCharacters(body)}`);
}

function separateCharacters(sentence){
    let words = sentence.split(" ");
    let new_sentence = words[0];

    for(let i = 1; i < words.length; i++){
        new_sentence += `%20${words[i]}`;
    }

    return new_sentence;
}

// console.log(separateCharacters(sendersName));

