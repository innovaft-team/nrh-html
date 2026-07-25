document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const trigger = dropdown.querySelector(".trigger");
  const content = dropdown.querySelector(".content");
  const selected = dropdown.querySelector(".selected");
  const radioDot = dropdown.querySelector(".radio-dot");
  const searchInput = dropdown.querySelector(".dropdown-input");
  const options = dropdown.querySelectorAll(".option");

  // open / close
  trigger.addEventListener("click", (e) => {
    e.stopPropagation();

    const isOpen = !content.classList.contains("max-h-0");

    document.querySelectorAll(".content").forEach((c) => {
      c.classList.add("max-h-0");
      c.classList.remove("max-h-72");
    });

    if (!isOpen) {
      content.classList.remove("max-h-0");
      content.classList.add("max-h-72");
      searchInput.focus();
    }
  });

  // 🔥 STOP close when clicking inside dropdown
  content.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // 🔥 STOP close when clicking input
  searchInput.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // option select
  options.forEach((opt) => {
    opt.addEventListener("click", (e) => {
      e.stopPropagation();

      selected.textContent = opt.textContent;
      radioDot.classList.remove("hidden");
      trigger.classList.add("is-selected");

      content.classList.add("max-h-0");
      content.classList.remove("max-h-72");
    });
  });

  // filter
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();

    options.forEach((opt) => {
      opt.style.display = opt.textContent.toLowerCase().includes(value)
        ? "block"
        : "none";
    });
  });
});

// click outside → close
document.addEventListener("click", () => {
  document.querySelectorAll(".content").forEach((content) => {
    content.classList.add("max-h-0");
    content.classList.remove("max-h-72");
  });
});
