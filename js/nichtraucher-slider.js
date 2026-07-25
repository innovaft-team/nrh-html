// ===============================
// Image ZIndex / Scale Logic (Instant - no animation)
// ===============================
function updateZIndexAndSize(swiper) {
  const slides = swiper.slides;
  const activeIndex = swiper.activeIndex;
  const total = slides.length;

  const slidesVisible = 6;

  const zValues = [50, 40, 30, 20, 10, 5];
  const scaleValues = [1, 0.87, 0.8, 0.74, 0.68, 0.6];
  const bgOpacity = [0, 0.2, 0.3, 0.4, 0.5, 0.6];

  // 👇 DIFFERENT SPACING PER INDEX
  const spacingDesktop = [0, 25, 30, 15, -50, -122];
  const spacingMobile = [0, 14, 20, 14, -8, -30];

  const isMobile = window.innerWidth < 640;
  const spacingX = isMobile ? spacingMobile : spacingDesktop;

  slides.forEach((slide, idx) => {
    const bg = slide.querySelector(".slide-bg");
    let position = -1;

    for (let i = 0; i < slidesVisible; i++) {
      if ((activeIndex + i) % total === idx) {
        position = i;
        break;
      }
    }

    // ❌ slides beyond 6 (ignore)
    if (position === -1) {
      slide.style.zIndex = 0;
      slide.style.transform = "scale(0)";
      if (bg) bg.style.opacity = "0";
      return;
    }

    // ✅ visible slides
    slide.style.zIndex = zValues[position];
    slide.style.transform = `
      scale(${scaleValues[position]})
      translateX(${spacingX[position]}px)
    `;

    // 👇 background opposite direction (parallax feel)
    if (bg) {
      bg.style.transform = `translateX(${-spacingX[position]}px)`;
      bg.style.opacity = bgOpacity[position];
    }
  });
}

// ===============================
// TEXT SWIPER
// ===============================
const testimonialSwiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  speed: 500,
  loop: true,
  allowTouchMove: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

// ===============================
// IMAGE SWIPER
// ===============================
const imgSwiper = new Swiper(".testimonial-swiperImg", {
  speed: 500,
  slidesPerView: 6,
  slidesPerGroup: 1,
  // ❌ DO NOT CHANGE
  spaceBetween: -10,
  loop: true,
  allowTouchMove: false,
  breakpoints: {
    320: { slidesPerView: 3, spaceBetween: -20 },
    640: { slidesPerView: 4, spaceBetween: -30 },
    768: { slidesPerView: 4, spaceBetween: -60 },
    1024: { slidesPerView: 5, spaceBetween: -60 },
  },
  on: {
    init() {
      updateZIndexAndSize(this);
    },
    slideChangeTransitionStart() {
      // Apply BEFORE animation starts - instant scale change
      updateZIndexAndSize(this);
    },
  },
});

// ===============================
// NAVIGATION
// ===============================
const nextBtn = document.querySelector(".swiper-button-next-custom");
const prevBtn = document.querySelector(".swiper-button-prev-custom");

let isAnimating = false;

nextBtn.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  testimonialSwiper.slideNext();
  imgSwiper.slideNext();

  setTimeout(() => {
    isAnimating = false;
  }, 550);
});

prevBtn.addEventListener("click", () => {
  if (isAnimating) return;
  isAnimating = true;

  testimonialSwiper.slidePrev();
  imgSwiper.slidePrev();

  setTimeout(() => {
    isAnimating = false;
  }, 550);
});

// ===============================
// PAGINATION SYNC
// ===============================
testimonialSwiper.on("slideChange", function () {
  if (!isAnimating) {
    imgSwiper.slideToLoop(testimonialSwiper.realIndex, 500, false);
    setTimeout(() => {
      updateZIndexAndSize(imgSwiper);
    }, 10);
  }
});
