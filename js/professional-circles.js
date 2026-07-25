// ========================================
// MAIN TAB SWITCHING (Q&A / Polls)
// ========================================
const tabs = document.querySelectorAll(".tab-item");
const underline = document.getElementById("tabUnderline");
const qaContent = document.getElementById("qaContent");
const pollsContent = document.getElementById("pollsContent");
const filterBtns = document.querySelectorAll(".filter-btn");

function moveUnderline(tab) {
  const tabRect = tab.getBoundingClientRect();
  const containerRect = tab.parentElement.getBoundingClientRect();

  underline.style.left = `${tabRect.left - containerRect.left}px`;
  underline.style.width = `${tabRect.width}px`;
}

// Initialize underline position
const activeTab = document.querySelector(".tab-item.active");
if (activeTab) moveUnderline(activeTab);

// Tab click events
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    // Remove active from all tabs
    tabs.forEach((t) => t.classList.remove("active"));

    // Add active to clicked tab
    this.classList.add("active");

    // Move underline
    moveUnderline(this);

    // Switch content based on tab
    const tabName = this.dataset.tab;
    if (tabName === "qa") {
      qaContent.classList.remove("hidden");
      pollsContent.classList.add("hidden");
    } else if (tabName === "polls") {
      qaContent.classList.add("hidden");
      pollsContent.classList.remove("hidden");
    }
  });
});

// ========================================
// FILTER SWITCHING (Popular / Recent)
// ========================================
const popularQuestions = document.getElementById("popularQuestions");
const recentQuestions = document.getElementById("recentQuestions");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // Update active state
    filterBtns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    // Switch content
    const filter = this.dataset.filter;
    if (filter === "popular") {
      popularQuestions.classList.remove("hidden");
      recentQuestions.classList.add("hidden");
    } else if (filter === "recent") {
      popularQuestions.classList.add("hidden");
      recentQuestions.classList.remove("hidden");
    }
  });
});

// ========================================
// LIKE BUTTON FUNCTIONALITY
// ========================================
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".like-btn");
  if (!btn) return;

  const likeCount = btn.querySelector("span");
  const svg = btn.querySelector("svg");
  const currentLikes = parseInt(likeCount.textContent) || 0;
  const isLiked = btn.classList.contains("liked");

  if (isLiked) {
    // Unlike
    btn.classList.remove("liked", "text-blue-500");
    btn.classList.add("text-KonBlue");
    svg.setAttribute("fill", "none");
    likeCount.textContent = currentLikes - 1;
  } else {
    // Like
    btn.classList.add("liked", "text-blue-500");
    btn.classList.remove("text-KonBlue");
    svg.setAttribute("fill", "currentColor");
    likeCount.textContent = currentLikes + 1;
  }
});

// ========================================
// POLL OPTION CLICK
// ========================================
const pollOptions = document.querySelectorAll(".poll-option");
pollOptions.forEach((option) => {
  option.addEventListener("click", function () {
    // Remove active from all options in this poll
    const siblings = this.parentElement.querySelectorAll(".poll-option");
    siblings.forEach((s) => {
      s.classList.remove("border-blue-500", "bg-blue-50");
      s.classList.add("border-gray-200");
    });

    // Add active to clicked option
    this.classList.remove("border-gray-200");
    this.classList.add("border-blue-500", "bg-blue-50");
  });
});

// ========================================
// RESPONSIVE SLIDER UPDATE
// ========================================
window.addEventListener("resize", () => {
  const active = document.querySelector(".tab-item.active");
  if (active) moveUnderline(active);
});
