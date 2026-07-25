document.querySelectorAll(".customSelect").forEach((select) => {
  const btnSelect = select.querySelector(".selectBtn");
  const optionsBox = select.querySelector(".options");
  const selectedValue = select.querySelector(".selectedValue");
  const arrow = select.querySelector(".arrow");
  const options = select.querySelectorAll(".option");

  let open = false;

  // Toggle dropdown
  btnSelect.addEventListener("click", () => {
    open = !open;

    btnSelect.classList.add("active");

    if (open) {
      optionsBox.classList.remove(
        "max-h-0",
        "opacity-0",
        "-translate-y-2",
        "pointer-events-none",
      );
      optionsBox.classList.add("max-h-60", "opacity-100", "translate-y-0");
      arrow.classList.add("rotate-180");
    } else {
      optionsBox.classList.add(
        "max-h-0",
        "opacity-0",
        "-translate-y-2",
        "pointer-events-none",
      );
      optionsBox.classList.remove("max-h-60", "opacity-100", "translate-y-0");
      arrow.classList.remove("rotate-180");
    }
  });

  // Select option
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selectedValue.textContent = option.textContent;

      // 🔥 keep label up permanently
      btnSelect.classList.add("has-value");
      btnSelect.classList.remove("active");

      open = false;

      optionsBox.classList.add(
        "max-h-0",
        "opacity-0",
        "-translate-y-2",
        "pointer-events-none",
      );
      optionsBox.classList.remove("max-h-60", "opacity-100", "translate-y-0");
      arrow.classList.remove("rotate-180");
    });
  });

  // Click outside
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target)) {
      open = false;

      optionsBox.classList.add(
        "max-h-0",
        "opacity-0",
        "-translate-y-2",
        "pointer-events-none",
      );
      optionsBox.classList.remove("max-h-60", "opacity-100", "translate-y-0");
      arrow.classList.remove("rotate-180");

      // ❗ IMPORTANT: label niche nahi jayega agar value hai
      if (!btnSelect.classList.contains("has-value")) {
        btnSelect.classList.remove("active");
      }
    }
  });
});
