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

function playRPS() {
  window.location.href = "RPS-game.html";
}

function playDice() {
  window.location.href = "DiceDuel.html";
}

//Point system display
const pointSpan = document.getElementById("points");

if (pointSpan) {
  const wins = userData.score?.rps?.wins || 0;
  const losses = userData.score?.rps?.losses || 0;

  pointSpan.textContent = `Wins: ${wins} | Losses: ${losses}`;
}

//Modal Pop-up
function openModal() {
  const modal = document.getElementById("devModal");
  modal.classList.add("show");
}
function closeModal() {
  const modal = document.getElementById("devModal");
  modal.classList.remove("show");
}

// Open/close game rules modals
function openGameModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("show");
}

function closeGameModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove("show");
}
