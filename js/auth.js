// Get forms
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// Signup logic: save user to localStorage
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = signupForm.querySelector(
      'input[placeholder="Username"]'
    ).value;
    const password = signupForm.querySelector(
      'input[placeholder="Password"]'
    ).value;
    const confirmPassword = signupForm.querySelector(
      'input[placeholder="Confirm Password"]'
    ).value;
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    let users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.username === username)) {
      alert("Username already exists.");
      return;
    }
    const newUser = {
      username,
      password,
      nickname: username,
      avatar: "avatar1.png",
      score: { rps: { wins: 0, losses: 0 } },
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem(username, JSON.stringify(newUser));
    alert("Account created! You can now log in.");
    loginTab.click();
  });
}

// Login logic: check credentials and redirect
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = loginForm.querySelector(
      'input[placeholder="Username"]'
    ).value;
    const password = loginForm.querySelector(
      'input[placeholder="Password"]'
    ).value;
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("currentUser", user.username);
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
}

const newUser = {
  username,
  password,
  nickname: username,
  avatar: "avatar1.png",
  score: { rps: { wins: 0, losses: 0 } },
};

users.push(newUser);
localStorage.setItem("users", JSON.stringify(users));
localStorage.setItem(username, JSON.stringify(newUser));
