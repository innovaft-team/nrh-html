document.querySelectorAll(".video-card").forEach((card) => {
  const video = card.querySelector(".card-video");
  const button = card.querySelector(".video-btn");
  const icon = card.querySelector(".video-icon");

  button.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      icon.src = "./assets/images/png/pause.png";
      icon.alt = "pause";
      button.classList.add("opacity-0");
    } else {
      video.pause();
      icon.src = "./assets/images/png/play.png";
      icon.alt = "play";
      button.classList.remove("opacity-0");
    }
  });

  card.addEventListener("mouseenter", () => {
    if (!video.paused) {
      button.classList.remove("opacity-0");
    }
  });

  card.addEventListener("mouseleave", () => {
    if (!video.paused) {
      button.classList.add("opacity-0");
    }
  });
});
