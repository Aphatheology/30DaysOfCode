const signinButton = document.getElementById('signin');
const signupButton = document.getElementById('signup');
const registerDiv = document.getElementById('register');
const loginDiv = document.getElementById('login');

function registerFunction() {
    
    if(registerDiv.style.display == "none") {
        registerDiv.style.display = "block";
        loginDiv.style.display = "none";
        signinButton.innerHTML = "Click Me to Login";
    } else {
        registerDiv.style.display = "block";
        loginDiv.style.display = "none";
        signupButton.innerHTML = "You are on the Register page";
        signinButton.innerHTML = "Click Me to Login";
    }
    
}

function loginFunction() {
    
    if(login.style.display == "none") {
        registerDiv.style.display = "none";
        loginDiv.style.display = "block";
        signupButton.innerHTML = "Click Me to Register";
    } else {
    
        signinButton.innerHTML = "You are on the Login page";
        signupButton.innerHTML = "Click Me to Register";
    }
    
}
