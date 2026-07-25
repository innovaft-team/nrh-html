document.addEventListener("change", function (e) {
  if (e.target.type === "radio") {
    const form = e.target.closest("form");
    const button = form.querySelector(".nextBtn");

    if (!button) return;

    button.classList.remove(
      "pointer-events-none",
      "bg-lightgray",
      "text-KonBlue",
    );

    button.classList.add("bg-KonBlue", "text-white");
  }
});
