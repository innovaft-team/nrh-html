const buttons = document.querySelectorAll(".tool-tiptab-btn");
const contents = document.querySelectorAll(".tool-tiptab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = button.getAttribute("data-tab");

    // sab hide
    contents.forEach((content) => content.classList.add("hidden"));

    // sirf clicked wala show
    document.getElementById(target).classList.remove("hidden");
  });
});
