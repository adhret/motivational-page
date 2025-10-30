const greeting = document.getElementById("greeting");
const message = document.getElementById("message");
const music = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");
const musicButton = document.getElementById("musicButton");
const changeMsg = document.getElementById("changeMsg");
const resetName = document.getElementById("resetName");

// 🧠 Check or ask for name
let userName = localStorage.getItem("userName");
if (!userName) {
  userName = prompt("Hey! What’s your name?");
  if (userName && userName.trim() !== "") {
    localStorage.setItem("userName", userName.trim());
  } else {
    userName = "Motivator";
  }
}
greeting.textContent = `Welcome back, ${userName}!`;

// 🧹 Reset Name button
resetName.addEventListener("click", () => {
  localStorage.removeItem("userName");
  alert("Name has been reset. Reload the page to set a new one!");
});

// 💬 Motivational messages
const messages = [
  "Push yourself, because no one else is going to do it for you!",
  "Dream it. Believe it. Build it.",
  "Every day is a new chance to grow stronger!",
  "Success doesn’t come to those who wait; it comes to those who work for it!",
  "You’ve got this! Keep moving forward.",
  "Don’t just wish for it — work for it!"
];

let msgIndex = 0;

function typeWriter(text) {
  message.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    message.textContent += text.charAt(i);
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 50);
}

typeWriter(messages[msgIndex]);

// ✨ New message + sound
changeMsg.addEventListener("click", () => {
  clickSound.currentTime = 0;
  clickSound.play();
  msgIndex = (msgIndex + 1) % messages.length;
  message.style.color = `hsl(${Math.random() * 360}, 100%, 75%)`;
  message.style.fontFamily =
    Math.random() > 0.5 ? "Orbitron, sans-serif" : "Poppins, sans-serif";
  typeWriter(messages[msgIndex]);
});

// 🎵 Music control
let isPlaying = false;
musicButton.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    musicButton.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicButton.textContent = "🎵 Play Music";
  }
  isPlaying = !isPlaying;
});

window.addEventListener("load", () => {
  music.volume = 0.4;
});
