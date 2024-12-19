// Get the modal
var modal = document.getElementById("ea3myModal");
var btn = document.querySelector("#ea3CreateModal");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
  setTimeout(() => {
    modal.querySelector(".ea3-modal-content").style.transform =
      "translate(-50%, -50%) translateY(0)";
  }, 10); // Timeout to allow CSS to catch up
};

// When the user clicks on <span> (x), slide the modal back down
span.onclick = function () {
  modal.querySelector(".ea3-modal-content").style.transform =
    "translate(-50%, -50%) translateY(100vh)"; // Move down
  setTimeout(() => {
    modal.style.display = "none";
  }, 500); // Delay to match the transition time
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.querySelector(".ea3-modal-content").style.transform =
      "translate(-50%, -50%) translateY(100vh)"; // Move down
    setTimeout(() => {
      modal.style.display = "none";
    }, 500); // Delay to match the transition time
  }
};

// Function to open sidebar in enrollment page
function openSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(0)";
  overlayContainer.style.display = "block";
}

// Function to close sidebar in enrollment page
function closeSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(100%)";
  overlayContainer.style.display = "none";
}

// active class js
const elements = document.querySelectorAll(".ea3-action-buttons");

// Function to toggle the active class on click
function toggleActive() {
  elements.forEach((element) => {
    element.addEventListener("click", () => {
      elements.forEach((el) => el.classList.remove("active"));
      element.classList.add("active");
    });
  });
}

// Call toggleActive() to add event listeners for toggling the active class
toggleActive();

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

function updateButtonClass() {
  const inputElement = document.querySelector(
    '.accordion-button input[type="checkbox"]'
  );
  const nextButton = document.getElementById("nextButton");
  if (inputElement.checked) {
    nextButton.classList.remove("ow-disableBtn");
    nextButton.classList.add("ow-primaryBtn");
  } else {
    nextButton.classList.add("ow-disableBtn");
    nextButton.classList.remove("ow-primaryBtn");
  }
}
document
  .querySelector('.accordion-button input[type="checkbox"]')
  .addEventListener("change", updateButtonClass);

document.addEventListener("DOMContentLoaded", function () {
  // Get the "Next" button and the div elements
  const nextButton = document.getElementById("nextButton");
  const chooseReportDiv = document.querySelector(".chooseReport");
  const chooseEnrollmentDiv = document.querySelector(".chooseEnrollment");
  const offcanvas = document.getElementById("offcanvas-ea-reports");
  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    nextButton.textContent = "Download EA Report";
    chooseEnrollmentDiv.style.display = "none";
    chooseReportDiv.style.display = "block";
    nextButton.classList.remove("ow-disableBtn");
    nextButton.classList.add("ow-primaryBtn");
    nextButton.offcanvas.style.display = "none";
    // nextButton.removeEventListener('click', arguments.callee);
    // nextButton.addEventListener('click', function() {
    //   window.location.href = './ea3-licensing&finance/ea3-licensing&finance.html';
    // });
  });
});

function openRequestModal() {
  document.getElementById("requestModal").style.display = "block";
  document.getElementById("ea3myModal").style.display = "none";
  console.log("i3vb3b3e3", openRequestModal);
}
function closeRequestModal() {
  document.getElementById("requestModal").style.display = "none";
}
function redirectToEnrollment() {
  window.location.href = "../ea3-enrollment/ea3-enrollment.html";
}
window.onclick = function (event) {
  var modal = document.getElementById("requestModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const recentRequests = document.getElementById("recent-requests");
  const pendingApprovals = document.getElementById("pending-approvals");
  const targetDiv = document.getElementById("target-div");
  const dropDownDiv = document.getElementById("dropDownContent");
  const content = document.querySelector(".content");

  if (recentRequests) {
    recentRequests.addEventListener("click", function () {
      targetDiv.style.display = "block";
      content.classList.toggle("active"); // Show the div
    });
  }

  if (pendingApprovals) {
    pendingApprovals.addEventListener("click", function () {
      targetDiv.style.display = "none";
      content.classList.toggle("active");
    });
  }
});

const collapsible = document.querySelector(".collapsible");
const content = document.querySelector(".content");

collapsible.addEventListener("click", function () {
  content.classList.toggle("active");
});

// Toggle content visibility when clicking on the arrow icon
const arrowIcon = document.querySelector(".collapsible span");
arrowIcon.addEventListener("click", function (event) {
  event.stopPropagation(); // Prevent the click event from bubbling up to the parent h3 element
  content.classList.toggle("active");
});
