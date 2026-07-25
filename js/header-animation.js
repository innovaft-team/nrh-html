  const header = document.getElementById("site-header");

  let lastScrollY = window.scrollY;
  let hasScrolledDown = false; // 🔑 important flag

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    // Detect first downward scroll
    if (currentScrollY > lastScrollY) {
      hasScrolledDown = true;
    }

    // Jab tak user niche nahi gaya → kuch mat karo
    if (!hasScrolledDown) {
      lastScrollY = currentScrollY;
      return;
    }

    // Sticky activate once user has scrolled down
    header.classList.add("sticky", "top-0");

    // ⬆️ scroll UP → show header
    if (currentScrollY < lastScrollY) {
      header.classList.remove("-translate-y-full");
    }
    // ⬇️ scroll DOWN → hide header
    else {
      header.classList.add("-translate-y-full");
    }

    lastScrollY = currentScrollY;
  });
