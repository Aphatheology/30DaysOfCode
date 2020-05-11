let closeButton = document.getElementById("close");

let directMsg = document.getElementById("direct");
let messageForm = document.querySelector(".directmail");

directMsg.addEventListener('click' , () => {
    messageForm.style.display = "block";
})


closeButton.addEventListener('click' , () => {
    messageForm.style.display = "none";
    
})