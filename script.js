const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const confetti = document.getElementById("confetti");

let step = 0;

envelope.addEventListener("click", () => {
  step++;

  if (step === 1) {
    envelope.classList.add("open");
  }

  if (step === 2) {
    envelope.style.display = "none";
    letter.classList.remove("hidden");
    burstConfetti();
  }
});

function burstConfetti() {
  confetti.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const span = document.createElement("span");
    span.innerText = "🎉";
    span.style.left = Math.random() * 100 + "%";
    span.style.top = "0px";
    confetti.appendChild(span);
  }

  setTimeout(() => {
    confetti.innerHTML = "";
  }, 1300);
}
