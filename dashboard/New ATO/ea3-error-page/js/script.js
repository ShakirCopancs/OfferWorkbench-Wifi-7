document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach(function (accordion) {
    var header = accordion.querySelector(".accordion-header");
    var content = accordion.querySelector(".accordion-content");

    header.addEventListener("click", function () {
      accordions.forEach(function (item) {
        var itemContent = item.querySelector(".accordion-content");
        if (item !== accordion && item.classList.contains("open")) {
          var itemContent = item.querySelector(".accordion-content");
        }
      });

      // Toggle class for animation
      accordion.classList.toggle("open");
      if (accordion.classList.contains("open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = "0";
      }
    });
  });
});

function openSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(0)";
  document.getElementById("offcanvas-sidebar").classList.add("active");
}

function closeSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(100%)";
  document.getElementById("offcanvas-sidebar").classList.remove("active");
  document.querySelector(".content").style.marginRight = "0";
}

// Off Canvas Sidebar height dynamic
function setContentHeight() {
  var canvasFooterHeight =
    document.getElementById("off-canvas-footer").offsetHeight;
  var canvasHeaderHeight = document.getElementById(
    "offcanvas-sidebar-header"
  ).offsetHeight;
  var contentDiv = document.getElementById("errors-detect-wrapper");
  contentDiv.style.height =
    window.innerHeight - canvasFooterHeight - canvasHeaderHeight - 80 + "px";
}

// Initial setting
setContentHeight();

// Adjust the height on window resize
window.onresize = setContentHeight;

// Initial setting

// Adjust the height on window resize
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
