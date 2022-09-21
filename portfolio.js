let sendBtn = document.querySelector("a.send");
const myEmail = "tomjames156@gmail.com";
const projects = document.querySelectorAll(".hidden-project");
const stats = document.querySelectorAll(".stat-hidden");
const validationSpace = document.getElementById("validation-result");

// Send the Email
function addEmail(subject, body){
    sendBtn.setAttribute("href", `mailto:${myEmail}?subject=${separateCharacters(subject)}&body=${separateCharacters(body)}`);
}

// Make text into email format
function separateCharacters(sentence){
    let words = sentence.split(" ");
    let new_sentence = words[0];

    for(let i = 1; i < words.length; i++){
        new_sentence += `%20${words[i]}`;
    }

    return new_sentence;
}

// Validate the email parameters before sending
sendBtn.addEventListener('click', () =>{
    let emailParams = [];
    let sendersName = document.getElementById("name").value;
    let emailSubject = document.getElementById("subject").value;
    let emailBody = document.getElementById("message").value;

    let setupEmail = new Promise(function(completeParams, incompleteParam){
        if(sendersName && emailSubject && emailBody){
            validationSpace.innerHTML = '';
            emailParams = [emailSubject, emailBody];
            completeParams(emailParams);
        }else if(!(sendersName && emailSubject && emailBody)){
            sendBtn.removeAttribute("href");
            if(!sendersName){
                incompleteParam("Please enter your name");
            }else if(!emailSubject){
                incompleteParam("Please enter the email's subject");
            }else if(!emailBody){
                incompleteParam("Please enter the email's body");
            }
        }
    });

    setupEmail.then(
        function(value) {addEmail(value[0], value[1]);},
        function(error) {validationSpace.innerHTML = error;}
    );
});

const projectsObserver = new IntersectionObserver((entries)=> {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-project")
        }else{
            entry.target.classList.remove("show-project")
        }
    })
})

projects.forEach((project) => {projectsObserver.observe(project)});

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("show-stat");
        }else{
            entry.target.classList.remove("show-stat");
        }
    })
});

stats.forEach(stat => statsObserver.observe(stat))