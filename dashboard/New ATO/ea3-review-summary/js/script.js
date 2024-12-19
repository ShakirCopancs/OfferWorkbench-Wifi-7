document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-btn");
  accordionButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.toggle("active");
      const content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }

      const plusIcon = this.querySelector(".ea3-plus-icon");
      const minusIcon = this.querySelector(".ea3-minus-icon");
      plusIcon.style.display =
        plusIcon.style.display === "none" ? "block" : "none";
      minusIcon.style.display =
        minusIcon.style.display === "block" ? "none" : "block";
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const donutBar = document.querySelector('div[role="donutbar"]');
  const value = getComputedStyle(donutBar).getPropertyValue("--value").trim();
  donutBar.querySelector(".ea3-donutbar-value").textContent = value + "%";
});
