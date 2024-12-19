function toggleHighlight(button) {
  const formSection = button.closest('.ea3-minimise-content');
  formSection.classList.toggle('ea3-maximize-content');
}
// Get the modal
var modal = document.getElementById('ea3myModal');
var btn = document.querySelector('#ea3CreateModal');
var span = document.getElementsByClassName('close')[0];
btn.onclick = function () {
  modal.style.display = 'block';
  setTimeout(() => {
    modal.querySelector('.ea3-modal-content').style.transform =
      'translate(-50%, -50%) translateY(0)';
  }, 10); // Timeout to allow CSS to catch up
};

// When the user clicks on <span> (x), slide the modal back down
span.onclick = function () {
  modal.querySelector('.ea3-modal-content').style.transform =
    'translate(-50%, -50%) translateY(100vh)'; // Move down
  setTimeout(() => {
    modal.style.display = 'none';
  }, 500); // Delay to match the transition time
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.querySelector('.ea3-modal-content').style.transform =
      'translate(-50%, -50%) translateY(100vh)'; // Move down
    setTimeout(() => {
      modal.style.display = 'none';
    }, 500); // Delay to match the transition time
  }
};

// Function to open sidebar in enrollment page
function openSidebar() {
  document.getElementById('offcanvas-sidebar').style.transform = 'translateX(0)';
  overlayContainer.style.display = 'block';
}

// Function to close sidebar in enrollment page
function closeSidebar() {
  document.getElementById('offcanvas-sidebar').style.transform = 'translateX(100%)';
  overlayContainer.style.display = 'none';
}

// active class js
const elements = document.querySelectorAll('.ea3-action-buttons');

// Function to toggle the active class on click
function toggleActive() {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      elements.forEach((el) => el.classList.remove('active'));
      element.classList.add('active');
    });
  });
}
// Call toggleActive() to add event listeners for toggling the active class
toggleActive();

function openRequestModal() {
  document.getElementById('requestModal').style.display = 'block';
  document.getElementById('ea3myModal').style.display = 'none';
  console.log('i3vb3b3e3', openRequestModal);
}
function closeRequestModal() {
  document.getElementById('requestModal').style.display = 'none';
}
function redirectToEnrollment() {
  window.location.href = '../ea3-enrollment/ea3-enrollment.html';
}
window.onclick = function (event) {
  var modal = document.getElementById('requestModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// function filterTable(status) {
//   var table, rows, i, statusCell;
//   table = document.getElementById('requestTable');
//   rows = table.getElementsByTagName('tr');

//   for (i = 1; i < rows.length; i++) {
//     // start from 1 to skip table header
//     statusCell = rows[i].getElementsByTagName('td')[4]; // assuming Status is in the 5th column
//     if (status === 'all' || statusCell.textContent.trim().toUpperCase() === status.toUpperCase()) {
//       rows[i].style.display = '';
//     } else {
//       rows[i].style.display = 'none';
//     }
//   }

//   // Update the active button style
//   var buttons = document.querySelectorAll('.ea3-btns-group .btn');
//   buttons.forEach(function (btn) {
//     btn.classList.remove('active');
//   });
//   event.target.classList.add('active');
// }

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.tabs .btn');
  const contents = document.querySelectorAll('.tab-content');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and contents
      buttons.forEach((btn) => btn.classList.remove('active'));
      contents.forEach((content) => content.classList.remove('active'));

      // Add active class to the clicked button and corresponding content
      button.classList.add('active');
      const target = document.getElementById(button.getAttribute('data-target'));
      target.classList.add('active');
    });
  });

  // Optionally, you can set the first tab as active by default
  if (buttons.length > 0) {
    buttons[0].classList.add('active');
    contents[0].classList.add('active');
  }
});
