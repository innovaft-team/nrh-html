const swiper = new Swiper(".mySwiper", {
  freeMode: true, // 🔥 main feature
  slidesPerView: "auto", // 🔥 auto width
  spaceBetween: 8,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: { spaceBetween: 6 },
    768: { spaceBetween: 8 },
    1024: { spaceBetween: 6 },
  },
});

// 👉 custom center function
function centerActiveSlide(index) {
  const swiperEl = document.querySelector(".mySwiper");
  const wrapper = swiperEl.querySelector(".swiper-wrapper");
  const slides = swiperEl.querySelectorAll(".swiper-slide");

  const slide = slides[index];
  if (!slide) return;

  const wrapperRect = wrapper.getBoundingClientRect();
  const slideRect = slide.getBoundingClientRect();

  const slideCenter = slideRect.left + slideRect.width / 2;
  const wrapperCenter = wrapperRect.left + wrapperRect.width / 2;

  const move = slideCenter - wrapperCenter;

  swiper.translateTo(swiper.translate - move, 400);
}

// 👉 click pe active + center
document.querySelectorAll(".swiper-slide").forEach((slide, index) => {
  slide.addEventListener("click", () => {
    // active class
    document
      .querySelectorAll(".swiper-slide")
      .forEach((s) => s.classList.remove("active"));
    slide.classList.add("active");

    centerActiveSlide(index);
  });
});

// 👉 initial load pe bhi center kar
window.addEventListener("load", () => {
  centerActiveSlide(4);
});
