const username = localStorage.getItem("currentUser");
const userData = JSON.parse(localStorage.getItem(username));
updateScore();
let score = 0;
let timeLeft = 5;
let countdown;
let isActive = false; // to flag the click button
document.getElementById("avatar").src = `./avatars/${userData.avatar}`;
document.getElementById("nickname").textContent = userData.nickname;
function startRace() {
  start = 0;
  score = 0;
  timeLeft = 5;
  isActive = true
  document.getElementById("scoreText").textContent = "Score: 0";
  document.getElementById("timerText").textContent = "Time: 0";
  document.getElementById("clickBtn").disabled = false;

  countdown = setInterval(() => {
    timeLeft--;
    document.getElementById("timerText").textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      isActive = false;
      document.getElementById("clickBtn").disabled = true;
      document.getElementById("timerText").textContent = "⏱️ Time's up";
    }
  }, 1000);

  document.getElementById("resultText").textContent = result;
  updateScore(); //Defined below
  localStorage.setItem(username, JSON.stringify(userData));
}
//Add event listener on click me button
function clickMe() {
    if (!isActive) return;
  score++;
  document.getElementById("scoreText").textContent = "Score: " + score;
}
document.getElementById("clickBtn").addEventListener("pointerdown", clickMe);

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Wins: ${userData.score.rps.wins} | Losses: ${userData.score.rps.losses}`;
}

function goBack() {
  window.location.href = "dashboard.html";
}
