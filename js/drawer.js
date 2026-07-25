const openBtns = document.querySelectorAll(".drawer-open");
const wrappers = document.querySelectorAll(".drawer-wrapper");

// OPEN DRAWER
openBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    const wrapper = wrappers[index];
    const drawer = wrapper.querySelector(".drawer");
    const overlay = wrapper.querySelector(".drawer-overlay");

    wrapper.classList.remove("hidden");

    setTimeout(() => {
      drawer.classList.remove("translate-y-full");
      drawer.classList.add("translate-y-0");

      overlay.classList.remove("opacity-0");
      overlay.classList.add("opacity-100");
    }, 10);
  });
});

// CLOSE DRAWER
wrappers.forEach((wrapper) => {
  const drawer = wrapper.querySelector(".drawer");
  const overlay = wrapper.querySelector(".drawer-overlay");
  const closeBtns = wrapper.querySelectorAll(".drawer-close"); // ✅ all close buttons

  function closeDrawer() {
    drawer.classList.add("translate-y-full");
    drawer.classList.remove("translate-y-0");

    overlay.classList.add("opacity-0");
    overlay.classList.remove("opacity-100");

    setTimeout(() => {
      wrapper.classList.add("hidden");
    }, 300);
  }

  // overlay click
  overlay.addEventListener("click", closeDrawer);

  // all close buttons click
  closeBtns.forEach((btn) => {
    btn.addEventListener("click", closeDrawer);
  });
});
