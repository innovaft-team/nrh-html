const cards = document.querySelectorAll(".plan-card");

function setActive(card) {
  cards.forEach((c) => {
    const header = c.querySelector(".plan-header");
    const dot = c.querySelector(".radio-dot");
    const checkbox = c.querySelector(".radio-circle");
    const title = c.querySelector(".check-title");
    const icons = c.querySelectorAll(".feature-item img");

    if (!header || !dot || !checkbox || !title) return;

    // RESET (inactive)
    header.classList.remove("bg-blueBay");
    header.classList.add("bg-windsweptBeach");

    dot.classList.add("hidden");

    // radio circle inactive
    checkbox.classList.remove("bg-white");
    checkbox.classList.remove("border-white");
    checkbox.classList.add("border-KonBlue");

    title.classList.remove("text-white");
    title.classList.add("text-KonBlue");

    icons.forEach((img) => {
      img.src = img.src
        .replace("all-green-icon.webp", "gray-check-icon.webp")
        .replace("green-pig-icon.webp", "gray-pig-icon.webp")
        .replace("green-c-icon.webp", "gray-c-icon.webp");
    });
  });

  // ACTIVATE selected
  const header = card.querySelector(".plan-header");
  const dot = card.querySelector(".radio-dot");
  const checkbox = card.querySelector(".radio-circle");
  const title = card.querySelector(".check-title");
  const icons = card.querySelectorAll(".feature-item img");

  if (!header || !dot || !checkbox || !title) return;

  header.classList.remove("bg-windsweptBeach");
  header.classList.add("bg-blueBay");

  dot.classList.remove("hidden");

  // radio circle active
  checkbox.classList.add("bg-white");
  checkbox.classList.add("border-white");
  checkbox.classList.remove("border-KonBlue");

  title.classList.add("text-white");
  title.classList.remove("text-KonBlue");

  icons.forEach((img) => {
    img.src = img.src
      .replace("gray-check-icon.webp", "all-green-icon.webp")
      .replace("gray-pig-icon.webp", "green-pig-icon.webp")
      .replace("gray-c-icon.webp", "green-c-icon.webp");
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => setActive(card));
});

// Default select first
if (cards.length > 0) {
  setActive(cards[0]);
}

// check box

const checkGroup = document.getElementById("checkGroup");
const items = checkGroup.querySelectorAll(".check-item");

const mode = checkGroup.getAttribute("data-mode");
// "single" ya "multiple"

items.forEach((item) => {
  item.addEventListener("click", () => {
    const circle = item.querySelector(".radio-circle");
    const dot = item.querySelector(".radio-dot");

    if (mode === "single") {
      // Sab reset karo
      items.forEach((i) => {
        const c = i.querySelector(".radio-circle");
        const d = i.querySelector(".radio-dot");

        c.classList.remove("border-blueBay");
        c.classList.add("border-KonBlue");
        d.classList.add("hidden");
      });

      // Clicked activate karo
      circle.classList.remove("border-KonBlue");
      circle.classList.add("border-blueBay");
      dot.classList.remove("hidden");
    } else {
      // MULTIPLE → toggle karo
      const isActive = !dot.classList.contains("hidden");

      if (isActive) {
        circle.classList.remove("border-blueBay");
        circle.classList.add("border-KonBlue");
        dot.classList.add("hidden");
      } else {
        circle.classList.remove("border-KonBlue");
        circle.classList.add("border-blueBay");
        dot.classList.remove("hidden");
      }
    }
  });
});

// password visibility toggles
document.addEventListener("click", function (e) {
  const toggle = e.target.closest(".toggle-password");
  if (!toggle) return;

  const wrapper = toggle.closest(".password-field");
  const input = wrapper.querySelector("input");

  if (input.type === "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
});
