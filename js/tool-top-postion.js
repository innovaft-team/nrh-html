const buttons = document.querySelectorAll(".tooltip-btn");

const isDesktop = () => window.innerWidth >= 768;

/* =========================
   DESKTOP ONLY (HOVER)
========================= */
buttons.forEach((btn) => {
  let tooltipClone = null;

  function setPosition(el) {
    const rect = btn.getBoundingClientRect();
    const height = el.offsetHeight;

    const left = rect.left + rect.width / 2;
    const top = rect.top - height - 20;

    el.style.position = "fixed";
    el.style.left = left + "px";
    el.style.top = top + "px";
    el.style.transform = "translateX(-50%)";
    el.style.zIndex = "9999";
  }

  function removeTooltip() {
    if (tooltipClone) {
      tooltipClone.remove();
      tooltipClone = null;
    }
  }

  btn.addEventListener("mouseenter", () => {
    if (!isDesktop()) return;

    const tooltip = btn.querySelector(".tooltip-content");
    if (!tooltip) return;

    tooltipClone = tooltip.cloneNode(true);
    tooltipClone.style.display = "block";
    tooltipClone.style.pointerEvents = "none";

    document.body.appendChild(tooltipClone);
    setPosition(tooltipClone);

    // 🔥 scroll pe hide
    window.addEventListener("scroll", removeTooltip, { once: true });
  });

  btn.addEventListener("mouseleave", () => {
    if (!isDesktop()) return;
    removeTooltip();
  });

  /* ❌ desktop click disable */
  btn.addEventListener("click", (e) => {
    if (isDesktop()) {
      e.preventDefault();
      e.stopPropagation();
    }
  });
});

/* =========================
   MOBILE ONLY (CLICK)
========================= */
buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (isDesktop()) return; // 🔥 desktop ignore

    e.stopPropagation();

    const targetId = this.getAttribute("data-target");
    const target = document.getElementById(targetId);

    if (!target) return;

    const isOpen = target.classList.contains("active");

    // sab band
    document.querySelectorAll(".tooltip-content").forEach((t) => {
      t.classList.remove("active");
    });

    // toggle
    if (!isOpen) {
      target.classList.add("active");
    }
  });
});

/* =========================
   MOBILE OUTSIDE CLICK CLOSE
========================= */
document.querySelectorAll(".tooltip-close").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();

    const tooltip = this.closest(".tooltip-content");
    if (tooltip) {
      tooltip.classList.remove("active");
    }
  });
});
