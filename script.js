const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const confetti = document.getElementById("confetti");

let clicks = 0;

envelope.addEventListener("click", () => {
  clicks++;

  if (clicks === 1) {
    envelope.style.transform = "scale(0.95)";
  }

  if (clicks === 2) {
    envelope.style.display = "none";
    letter.classList.remove("hidden");
    burstConfetti();
  }
});

function burstConfetti() {
  confetti.classList.remove("hidden");
  confetti.innerHTML = "";

  for (let i = 0; i < 18; i++) {
    const span = document.createElement("span");
    span.innerText = "🎉";
    span.style.left = Math.random() * 100 + "%";
    span.style.top = Math.random() * 40 + "%";
    confetti.appendChild(span);
  }

  setTimeout(() => {
    confetti.innerHTML = "";
  }, 1200);
}
