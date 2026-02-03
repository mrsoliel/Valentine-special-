const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const confetti = document.getElementById("confetti");

let opened = false;

envelope.addEventListener("click", () => {
  if (opened) return;

  opened = true;
  envelope.classList.add("open");
  burst();

  setTimeout(() => {
    letter.classList.remove("hidden");
  }, 900);
});

function burst() {
  confetti.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const c = document.createElement("span");
    c.textContent = "🎉";
    c.style.left = Math.random() * 100 + "%";
    c.style.top = "0";
    confetti.appendChild(c);
  }
}
