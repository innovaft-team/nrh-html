document.querySelectorAll(".select-input-radio").forEach((input) => {
  input.addEventListener("change", function () {
    const option = this.closest(".select-option-radio");
    const card = option.querySelector(".select-card-radio");
    const indicator = option.querySelector(".select-indicator-radio");
    const dot = option.querySelector(".select-dot-radio");
    const dotImg = option.querySelector(".select-dot-radio-img");

    if (this.checked) {
      card.classList.remove("bg-white");
      card.classList.add("bg-blueBay", "text-white");

      indicator.classList.remove("border-KonBlue");
      indicator.classList.add("border-white");

      dot.classList.remove("opacity-0", "scale-0");
      dot.classList.add("opacity-100", "scale-100");

      dotImg.classList.remove("bg-iceFishing");
      dotImg.classList.add("bg-white");
    } else {
      card.classList.remove("bg-blueBay", "text-white");
      card.classList.add("bg-white");

      indicator.classList.remove("border-white");
      indicator.classList.add("border-KonBlue");

      dot.classList.remove("opacity-100", "scale-100");
      dot.classList.add("opacity-0", "scale-0");

      dotImg.classList.remove("bg-white");
      dotImg.classList.add("bg-iceFishing");
    }
  });
});
