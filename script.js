let step = 0;

const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");

envelope.addEventListener("click", () => {
  step++;

  if (step === 1) {
    envelope.classList.add("open");
    hint.innerText = "Tap again 💌";
  }

  if (step === 2) {
    envelope.classList.add("peek");
    hint.innerText = "One more tap 💖";
  }

  if (step === 3) {
    envelope.classList.add("unfold");
    hint.style.display = "none";
  }
});
