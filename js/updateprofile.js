function selectAvatar(filename) {
  const username = localStorage.getItem("currentUser");
  const userData = JSON.parse(localStorage.getItem(username));
  if (!userData) return;
  userData.avatar = filename;
  localStorage.setItem(username, JSON.stringify(userData));
  const preview = document.getElementById("avatarPreview");
  if (preview) {
    preview.src = `avatars/${filename}`;
  }
}

function saveProfile() {
  const username = localStorage.getItem("currentUser");
  const userData = JSON.parse(localStorage.getItem(username));
  if (!userData) return;
  const nicknameInput = document.getElementById("nicknameInput");
  if (nicknameInput && nicknameInput.value.trim() !== "") {
    userData.nickname = nicknameInput.value.trim();
  }
  localStorage.setItem(username, JSON.stringify(userData));
  alert("Profile updated!");
  window.location.href = "dashboard.html";
}
