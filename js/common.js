let sidebarOpen = false;

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeSidebar = document.getElementById("close-sidebar");
const overlay = document.getElementById("sidebar-overlay");

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;

  // Sidebar animation
  sidebar.classList.toggle("translate-x-0");
  sidebar.classList.toggle("translate-x-full");

  // Overlay
  overlay.classList.toggle("opacity-100");
  overlay.classList.toggle("pointer-events-auto");
  overlay.classList.toggle("opacity-0");
  overlay.classList.toggle("pointer-events-none");

  // Body scroll lock
  document.body.classList.toggle("no-scroll");
  document.documentElement.classList.toggle("no-scroll");
}

// Event listeners
hamburger.addEventListener("click", toggleSidebar);
closeSidebar.addEventListener("click", toggleSidebar);
overlay.addEventListener("click", toggleSidebar);

// index section visible js
const btn = document.getElementById("showProgramsBtn");
const section = document.getElementById("programSection");

btn.addEventListener("click", () => {
  section.classList.remove("hidden");
  section.scrollIntoView({
    behavior: "smooth",
  });
});
