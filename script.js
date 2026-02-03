const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

let clicks = 0;

envelope.addEventListener("click", () => {
  clicks++;

  if (clicks === 1) {
    envelope.style.transform = "translateY(-70px)";
  }

  if (clicks === 2) {
    envelope.style.display = "none";
    letter.classList.remove("hidden");
  }
});
