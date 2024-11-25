const loginForm = document.getElementById("login");
const signupForm = document.getElementById("signup");
const btn = document.getElementById("btn");

function login() {
    loginForm.style.transform = "translateX(0)";
    signupForm.style.transform = "translateX(100%)";
    btn.style.left = "0";
}

function signup() {
    loginForm.style.transform = "translateX(-100%)";
    signupForm.style.transform = "translateX(0)";
    btn.style.left = "110px";
}
