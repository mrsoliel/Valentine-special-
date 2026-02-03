const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letter = document.getElementById("letter");
const confetti = document.getElementById("confetti-container");

let step = 0;

// STEP 1: Open envelope
envelope.addEventListener("click", () => {
  if (step !== 0) return;

  envelope.classList.add("open");
  paper.classList.remove("hidden");

  setTimeout(() => {
    paper.classList.add("slide");
    burstConfetti();
  }, 400);

  step = 1;
});

// STEP 2: Open letter
paper.addEventListener("click", () => {
  if (step !== 1) return;

  paper.classList.add("hidden");
  letter.classList.remove("hidden");
  burstConfetti();

  step = 2;
});

// CONFETTI FUNCTION
function burstConfetti() {
  confetti.innerHTML = "";

  for (let i = 0; i < 20; i++) {
    const piece = document.createElement("span");
    piece.innerText = "🎉";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.top = "0px";
    confetti.appendChild(piece);
  }
}
