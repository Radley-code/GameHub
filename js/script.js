document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");

  loginTab.addEventListener("click", function () {
    container.classList.add("login-active");
    container.classList.remove("signup-active");
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
  });

  signupTab.addEventListener("click", function () {
    container.classList.add("signup-active");
    container.classList.remove("login-active");
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
  });

});

// Use Orbitron font for left panel and tabs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".left-panel").style.fontFamily =
    "Orbitron, sans-serif";
  document.querySelectorAll(".tabs button").forEach((btn) => {
    btn.style.fontFamily = "Orbitron, sans-serif";
  });
 
  
  // show the different on the left side as you switch
  const sideText = document.getElementById("sideText");
  const loginTab = document.getElementById("loginTab");
  const signupTab = document.getElementById("signupTab");
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  loginTab.addEventListener("click", function () {
    sideText.innerHTML = "Welcome<br />Back!";
    loginTab.classList.add("active");
    signupTab.classList.remove("active");
    loginForm.style.display = "flex";
    signupForm.style.display = "none";
  });
  signupTab.addEventListener("click", function () {
    sideText.innerHTML = "Hello<br />there!";
    signupTab.classList.add("active");
    loginTab.classList.remove("active");
    loginForm.style.display = "none";
    signupForm.style.display = "flex";
  });
});
