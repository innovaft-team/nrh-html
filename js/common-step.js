const radioButtons = document.querySelectorAll(".js-radio-btn");
const nextBtn = document.querySelector(".next-btn");

radioButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 1️⃣ radio behaviour
    radioButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // 2️⃣ SECTION COMPLETE CHECK
    const isSectionCompleted = document.querySelector(".js-radio-btn.active");

    // 3️⃣ enable Next only if completed
    if (isSectionCompleted) {
      nextBtn.classList.remove(
        "opacity-50",
        "pointer-events-none",
        "cursor-not-allowed"
      );
    }
    nextBtn.classList.remove("is-disabled");
    nextBtn.classList.add("is-active");
  });
});
