function updateZIndexAndSize(swiper) {
  const slides = swiper.slides;
  const activeIndex = swiper.activeIndex;
  const total = slides.length;

  const slidesVisible = 6; // 👈 slidesPerView

  const zValues = [50, 40, 30, 20, 10, 5];
  const scaleValues = [1, 0.87, 0.8, 0.74, 0.68, 0.6];
  const bgOpacity = [0, 0.2, 0.3, 0.4, 0.5, 0.6];

  const spacingDesktop = [0, 25, 30, 15, -23, -83];
  const spacingMobile = [0, 12, 16, 10, -12, -40];

  const isMobile = window.innerWidth < 640;
  const spacingX = isMobile ? spacingMobile : spacingDesktop;

  slides.forEach((slide, idx) => {
    const bg = slide.querySelector(".slide-bg");
    let position = -1;

    // find relative position
    for (let i = 0; i < slidesVisible; i++) {
      if ((activeIndex + i) % total === idx) {
        position = i;
        break;
      }
    }

    // ❌ FAR / EXTRA SLIDES (7th and beyond)
    if (position === -1) {
      slide.style.zIndex = 0;
      slide.style.transform = "scale(0)";
      if (bg) bg.style.opacity = "0";
      return;
    }

    // ✅ ONLY FIRST 6 SLIDES
    slide.style.zIndex = zValues[position];
    slide.style.transform = `
        scale(${scaleValues[position]})
        translateX(${spacingX[position]}px)
      `;

    if (bg) {
      bg.style.transform = `translateX(${-spacingX[position]}px)`;
      bg.style.opacity = bgOpacity[position];
    }
  });
}

const imgSwiper = new Swiper(".claim-slider", {
  slidesPerView: 6,
  slidesPerGroup: 1,

  // ❌ DO NOT CHANGE
  spaceBetween: -10,

  loop: true,
  speed: 500,
  followFinger: false,
  resistanceRatio: 0,
  on: {
    init() {
      updateZIndexAndSize(this);
    },
    slideChangeTransitionStart() {
      updateZIndexAndSize(this);
    },
    resize() {
      updateZIndexAndSize(this);
    },
  },
});
