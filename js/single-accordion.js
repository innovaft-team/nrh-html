function toggleAccordion1(button) {
  const content = button.nextElementSibling;

  if (content.style.maxHeight && content.style.maxHeight !== "0px") {
    content.style.maxHeight = "0px";
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}

// ensure first accordion is open on load
window.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".accordion-content");
  content.style.maxHeight = content.scrollHeight + "px";
});
