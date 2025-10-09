const username = localStorage.getItem("currentUser");
const userData = JSON.parse(localStorage.getItem(username));
updateScore();

document.getElementById("avatar").src = `./avatars/${userData.avatar}`;
document.getElementById("nickname").textContent = userData.nickname;
function rollDice() {
  const playerRoll = Math.floor(Math.random() * 6) + 1;
  const aiRoll = Math.floor(Math.random() * 6) + 1;

  document.getElementById("playerDice").textContent = `🎲 ${playerRoll}`;
  document.getElementById("aiDice").textContent = `🎲 ${aiRoll}`;

  let result = "";
  if (playerRoll > aiRoll) {
    result = "🔥 You Win";
    userData.score.rps.wins += 1;
  } else if (playerRoll < aiRoll) {
    result = "🥲 You lose";
    userData.score.rps.losses += 1;
  } else {
    result = "It's a draw!";
  }

  document.getElementById("resultText").textContent = result;
  updateScore();
  localStorage.setItem(username, JSON.stringify(userData));
}
function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Wins: ${userData.score.rps.wins} | Losses: ${userData.score.rps.losses}`;
}

function goBack() {
  window.location.href = "dashboard.html";
}
