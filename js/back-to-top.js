// Get the button element
const backToTopButton = document.getElementById("backToTopBtn");

// Function to toggle button visibility based on scroll position
function toggleBackToTopButton() {
  if (window.scrollY > 300) {
    // Show the button when scrolled down 300px or more
    backToTopButton.classList.remove("opacity-0", "invisible", "translate-y-4");
    backToTopButton.classList.add("opacity-100", "visible", "translate-y-0");
  } else {
    // Hide the button when near the top
    backToTopButton.classList.add("opacity-0", "invisible", "translate-y-4");
    backToTopButton.classList.remove("opacity-100", "visible", "translate-y-0");
  }
}

// Scroll back to top when the button is clicked
backToTopButton.addEventListener("click", () => {
  // Smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Listen for scroll events
window.addEventListener("scroll", toggleBackToTopButton);

// Initialize button state on page load
toggleBackToTopButton();
