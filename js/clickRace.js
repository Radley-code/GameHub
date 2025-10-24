const username = localStorage.getItem("currentUser");
const userData = JSON.parse(localStorage.getItem(username));
updateScore();
let score = 0;
let timeLeft = 5;
let countdown;
let isActive = false; // to flag the click button
let lastClickTime = 0;
let points = 0;
let clickStreak = 0;
let result;
document.getElementById("avatar").src = `./avatars/${userData.avatar}`;
document.getElementById("nickname").textContent = userData.nickname;
function startRace() {
  start = 0;
  score = 0;
  timeLeft = 5;
  isActive = true;
  clickStreak = 0;
  lastClickTime = Date.now();
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
      // showFinalScore();
    }
  }, 1000);
}
//Add event listener on click me button
function clickMe() {
  if (!isActive) return;
  score++;
  document.getElementById("scoreText").textContent = "Score: " + score;
 userData.score.rps.wins += 1;
  // if (score = 5) {
  //   result = "Superb";
  // } else if(score = 10) {
  //   result = "Fantastic"; 
  
  // } else {
  //    userData.score.rps.wins += 15;
  //   result = "Perfect";
  // } 

  

  document.getElementById("resultText").textContent = result;
  updateScore(); //Defined below
  localStorage.setItem(username, JSON.stringify(userData));
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
