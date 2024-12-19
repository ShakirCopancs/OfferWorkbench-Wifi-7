function toggleVisibility(button) {
  var mainRow = button.closest('.ea3-main-row');
  var nextRow = mainRow.nextElementSibling;
  while (nextRow && nextRow.classList.contains('ea3-hide-table')) {
    nextRow.classList.toggle('hidden');
    nextRow = nextRow.nextElementSibling;
  }
  var plusIcon = mainRow.querySelector('.ea3-plus-icon');
  var minusIcon = mainRow.querySelector('.ea3-minus-icon');
  if (plusIcon && minusIcon) {
    plusIcon.classList.toggle('hidden');
    minusIcon.classList.toggle('hidden');
  }
  var showText = mainRow.querySelector('.ea3-show-text');
  var hideDiv = mainRow.querySelector('.ea3-hide-div');
  if (showText && hideDiv) {
    showText.classList.toggle('hidden');
    hideDiv.classList.toggle('hidden');
  }
}



// ------------------offcanvas-----------------------
function setContentHeight() {
    var canvasFooterHeight = document.getElementById('ow-sidebar-footer').offsetHeight;
    var canvasHeaderHeight = document.getElementById('offcanvas-sidebar-header').offsetHeight;
    var canvasHeadingHeight = document.getElementById('ow-heading-content').offsetHeight;
    var contentDiv = document.getElementById('sidebar-auto-scroll');
    contentDiv.style.height = (window.innerHeight - canvasFooterHeight - canvasHeaderHeight - canvasHeadingHeight - 33 ) + 'px';
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
// --------------------offcanvas--------------------


// -----------------------------------accordian------------------------
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
    plusIcon.style.display = plusIcon.style.display === "none" ? "block" : "none";
    minusIcon.style.display = minusIcon.style.display === "block" ? "none" : "block";
      });
    });
  });
