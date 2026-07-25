const options = document.querySelectorAll(".payment-option");

function updateUI() {
  options.forEach((option) => {
    const input = option.querySelector('input[type="radio"]');
    const dot = option.querySelector(".radio-dot");
    const circle = option.querySelector(".radio-circle");

    if (input.checked) {
      dot.classList.remove("opacity-0");
      dot.classList.add("opacity-100");

      circle.classList.add("border-[#5A9DD5]");
      circle.classList.remove("border-KonBlue");
    } else {
      dot.classList.add("opacity-0");
      dot.classList.remove("opacity-100");

      circle.classList.remove("border-[#5A9DD5]");
      circle.classList.add("border-KonBlue");
    }
  });
}

options.forEach((option) => {
  option.addEventListener("click", () => {
    const input = option.querySelector('input[type="radio"]');
    input.checked = true;
    updateUI();
  });
});

// Init on load (for default checked)
updateUI();
