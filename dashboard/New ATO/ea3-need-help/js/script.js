function scrollOneCard(direction) {
  const container = document.getElementById("cardContainer");
  const cardWidth = container.querySelector(".ea3-card").offsetWidth + 10; // Include margin

  let start = container.scrollLeft;
  let end = direction === "right" ? start + cardWidth : start - cardWidth;
  let change = end - start;
  let currentTime = 0;
  const increment = 20;
  const duration = 300; // Duration in ms

  const animateScroll = function () {
    currentTime += increment;
    const val = Math.easeInOutQuad(currentTime, start, change, duration);
    container.scrollLeft = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
  };

  animateScroll();
}

Math.easeInOutQuad = function (t, b, c, d) {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("cardContainer");
  const leftIcon = document.querySelector(".scroll-icon.left");
  const rightIcon = document.querySelector(".scroll-icon.right");

  function updateScrollIcons() {
    // Toggle left icon visibility and left shadow
    if (container.scrollLeft > 0) {
      leftIcon.style.display = "block";
      container.classList.add("left-shadow");
    } else {
      leftIcon.style.display = "none";
      container.classList.remove("left-shadow");
    }

    // Toggle right icon visibility and right shadow
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    if (container.scrollLeft < maxScrollLeft) {
      rightIcon.style.display = "block";
      container.classList.add("right-shadow");
    } else {
      rightIcon.style.display = "none";
      container.classList.remove("right-shadow");
    }
  }

  // Initial check
  updateScrollIcons();

  // Add scroll event listener to update icons on scroll
  container.addEventListener("scroll", updateScrollIcons);
});
