// Off Canvas Sidebar height dynamic
function setContentHeight() {
  var canvasFooterHeight =
    document.getElementById("ow-sidebar-footer").offsetHeight;
  var canvasHeaderHeight = document.getElementById(
    "offcanvas-sidebar-header"
  ).offsetHeight;
  var canvasHeadingHeight =
    document.getElementById("ow-heading-content").offsetHeight;
  var contentDiv = document.getElementById("sidebar-auto-scroll");
  contentDiv.style.height =
    window.innerHeight -
    canvasFooterHeight -
    canvasHeaderHeight -
    canvasHeadingHeight -
    33 +
    "px";
}

// Initial setting
setContentHeight();

// Adjust the height on window resize
window.onresize = setContentHeight;
const overlay = document.getElementById("ow-overlay");
const overlayContainer = document.getElementById("ow-overlay-container");
function openSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(0)";
  overlayContainer.style.display = "block";
}
function closeSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(100%)";
  overlayContainer.style.display = "none";
}

// Toggle active class
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-button");
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

// Get the modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
