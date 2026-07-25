document.addEventListener("DOMContentLoaded", function () {
  // Open Modal Buttons
  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const modalName = button.getAttribute("data-modal-open");
      const modal = document.querySelector(`[data-modal="${modalName}"]`);
      window.openModal(modal);
    });
  });

  // Close Modal Buttons
  document.querySelectorAll("[data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest("[data-modal]");
      window.closeModal(modal);
    });
  });
});

/* =========================
   GLOBAL MODAL FUNCTIONS
========================= */

window.openModal = function (modal) {
  if (!modal) return;

  if (typeof sidebarOpen !== "undefined" && sidebarOpen) {
    toggleSidebar();
  }

  const overlay = modal.querySelector(".modal-overlay");
  const content = modal.querySelector(".modal-content");

  modal.classList.remove("hidden");
  document.body.classList.add("overflow-hidden");

  setTimeout(() => {
    overlay.classList.add("opacity-100");
    content.classList.remove("opacity-0", "scale-95");
    content.classList.add("opacity-100", "scale-100");
  }, 10);
};

window.closeModal = function (modal) {
  if (!modal) return;

  const overlay = modal.querySelector(".modal-overlay");
  const content = modal.querySelector(".modal-content");

  overlay.classList.remove("opacity-100");
  content.classList.add("opacity-0", "scale-95");
  content.classList.remove("opacity-100", "scale-100");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }, 300);
};
