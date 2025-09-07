// checks if user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");
const user = JSON.parse(localStorage.getItem("currentUser"));

if (localStorage.getItem("isLoggedIn") !== "true") {
  alert("Please log in first.");
  window.location.href = "index.html";
} else {
  document.getElementById("usernameDisplay").textContent = user.username;
  document.getElementById("profileUsername").textContent = user.username;
}

function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  //Finally takes user bck to sign in page
  window.location.href = "index.html";
}
