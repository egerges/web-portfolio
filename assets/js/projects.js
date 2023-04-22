document.addEventListener("DOMContentLoaded", () => {
  const accordionTitles = document.querySelectorAll(".accordion-title");

  accordionTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const accordionItem = title.parentElement;
      const accordionContent =
        accordionItem.querySelector(".accordion-content");
      const accordionIcon = title.querySelector(".accordion-icon");

      accordionItem.classList.toggle("open");
      accordionContent.classList.toggle("open");
      accordionIcon.classList.toggle("open");
    });
  });
});
