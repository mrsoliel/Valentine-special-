const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letter = document.getElementById("letter");
const confetti = document.getElementById("confetti");

let step = 0;

envelope.addEventListener("click", () => {

  if (step === 0) {
    // STEP 1 → OPEN ENVELOPE
    envelope.classList.add("open");
    step++;
    return;
  }

  if (step === 1) {
    // STEP 2 → PAPER SLIDES OUT
    envelope.classList.add("paper-out");
    step++;
    return;
  }

  if (step === 2) {
    // STEP 3 → PAPER UNFOLDS + CONFETTI
    paper.classList.add("unfold");
    letter.classList.remove("hidden");
    burstConfetti();
    step++;
  }

});

function burstConfetti() {
  confetti.innerHTML = "";

  for (let i = 0; i < 30; i++) {
    const c = document.createElement("span");
    c.textContent = "🎉";
    c.style.left = Math.random() * 100 + "vw";
    c.style.top = "-20px";
    confetti.appendChild(c);
  }
}
