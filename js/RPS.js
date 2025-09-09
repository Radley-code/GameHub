const username = localStorage.getItem("currentUser");
const userData = JSON.parse(localStorage.getItem(username));

document.getElementById("avatar").src = `./avatars/${userData.avatar}`;
document.getElementById("nickname").textContent = userData.nickname;
updateScore();

function play(playerChoice) {
  const choices = ["rock", "paper", "scissors"];
  const cpuChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === cpuChoice) {
    result = "It's a draw";
  } else if (
    (playerChoice === "rock" && cpuChoice === "scissors") ||
    (playerChoice === "paper" && cpuChoice === "rock") ||
    (playerChoice === "scissors" && cpuChoice === "paper")
  ) {
    result = "You Win!";
    userData.score.rps.wins += 1;
  } else {
    result = "You lose!";
    userData.score.rps.losses += 1;
  }

  localStorage.setItem(username, JSON.stringify(userData));
  document.getElementById(
    "resultText"
  ).textContent = `You chose ${playerChoice}. CPU chose ${cpuChoice}. ${result}`;
  updateScore();
}

function updateScore() {
  document.getElementById(
    "score"
  ).textContent = `Wins: ${userData.score.rps.wins} | Losses: ${userData.score.rps.losses}`;
}

function resetGame() {
  document.getElementById("resultText").textContent = "Make your move!";
}

function goBack() {
  window.location.href = "dashboard.html";
}
