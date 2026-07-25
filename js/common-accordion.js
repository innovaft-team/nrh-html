const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const accordionInner = accordion.querySelector(".accordion-inner");
  const header = accordion.previousElementSibling;

  if (!header) return;

  header.addEventListener("click", () => {
    const arrowDesktop = header.querySelector("#accordionArrow");
    const arrowMobile = header.querySelector("#accordionArrowMobile");

    const isOpen = accordion.style.height && accordion.style.height !== "0px";

    // Close all accordions
    accordions.forEach((acc) => {
      acc.style.height = "0px";

      const prevHeader = acc.previousElementSibling;
      if (!prevHeader) return;

      const dArrow = prevHeader.querySelector("#accordionArrow");
      const mArrow = prevHeader.querySelector("#accordionArrowMobile");

      if (dArrow) dArrow.style.transform = "rotate(0deg)";
      if (mArrow) mArrow.style.transform = "rotate(0deg)";
    });

    // Open current accordion
    if (!isOpen) {
      accordion.style.height = accordionInner.scrollHeight + "px";

      if (arrowDesktop) arrowDesktop.style.transform = "rotate(180deg)";
      if (arrowMobile) arrowMobile.style.transform = "rotate(180deg)";
    }
  });
});
