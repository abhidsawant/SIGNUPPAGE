let title=document.querySelector('.title');
let signinBtn=document.querySelector('.signin-btn');
let signupBtn=document.querySelector('.signup-btn');
let nameField=document.querySelector(".name-field");
let underline=document.querySelector('.underline');
let text=document.querySelector(".text-p");

// for "Sign In" button:add event for button on click:
signinBtn.addEventListener("click",()=>{
    nameField.style.maxHeight='0';
    title.innerText="Sign In";
    text.innerText="Forgot Password";
    signupBtn.classList.add('disable');
    signinBtn.classList.remove('disable');
    underline.style.transform="translateX(35px)";
});

// for "Sign Up" button:add event for button on click:
signupBtn.addEventListener("click",()=>{
    nameField.style.maxHeight="60px";
    title.innerText="Sign Up";
    text.innerText="Password Suggestion";
    signupBtn.classList.remove('disable');
    signinBtn.classList.add('disable');
    underline.style.transform="translateX(0px)";
});