// checks if user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");
const username = localStorage.getItem("currentUser");
const userData = username ? JSON.parse(localStorage.getItem(username)) : null;

if (localStorage.getItem("isLoggedIn") !== "true" || !userData) {
  alert("Please log in first.");
  window.location.href = "index.html";
} else {
  document.getElementById("usernameDisplay").textContent = userData.username;
}

// Update avatar image
const avatarImg = document.getElementById("avatar");
if (avatarImg && userData && userData.avatar) {
  avatarImg.src = `avatars/${userData.avatar}`;
}

// Update nickname display
const avatarName = document.getElementById("avatarname");
if (avatarName && userData && userData.nickname) {
  avatarName.textContent = userData.nickname;
}

// Logout function
function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");
  window.location.href = "index.html";
}

function updateNickname() {
  window.location.href = "updateprofile.html";
}

//Point system display
