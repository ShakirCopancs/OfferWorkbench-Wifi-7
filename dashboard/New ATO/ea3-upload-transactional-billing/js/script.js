function openTab(tabId, element) {
  document.querySelectorAll('.tab-content.active').forEach((tab) => tab.classList.remove('active'));
  document
    .querySelectorAll('.ea3-tabBtn.active')
    .forEach((button) => button.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  element.classList.add('active');
}
function setDefaultTab(defaultTabId, defaultButtonIndex) {
  const defaultButton = document.querySelectorAll('.ea3-tabBtn')[defaultButtonIndex];
  openTab(defaultTabId, defaultButton);
}
document.addEventListener('DOMContentLoaded', () => {
  setDefaultTab('tab1', 0);
});

window.addEventListener('load', function () {
  const firstCell = document.querySelector('.css_sd:first-child');
  if (firstCell) {
    const width = firstCell.offsetWidth;
    const style = document.createElement('style');
    style.innerHTML = `
        .css_sd:nth-child(2) {
          left: ${width}px;
        }
        .css_thead .css_th:nth-child(2) {
          left: ${width}px;
          z-index: 1;
        }
      `;
    document.head.appendChild(style);
  }
});

// Function to show the popover
function showPopover(event) {
  event.stopPropagation(); // Prevent event from bubbling up to document

  var popover = document.getElementById('popover');
  var content = event.currentTarget.getAttribute('data-popover-content');
  popover.innerHTML = content;
  popover.style.display = 'block';

  var rect = event.currentTarget.getBoundingClientRect();
  popover.style.left = rect.left + window.scrollX + 'px';
  popover.style.top = rect.bottom + window.scrollY + 'px';

  // Force a reflow to ensure the transition runs
  popover.offsetHeight;
  popover.style.opacity = '1';

  // Set the current target as the active element
  document.activeElement = event.currentTarget;
}

// Function to hide the popover
function hidePopover() {
  var popover = document.getElementById('popover');
  popover.style.opacity = '0';

  // Use a timeout to set display:none after the transition ends
  setTimeout(function () {
    if (popover.style.opacity === '0') {
      popover.style.display = 'none';
    }
  }, 300); // The timeout should match the transition duration
}

// Attach event listeners to all target elements
var targets = document.querySelectorAll('.targetElement');
targets.forEach(function (target) {
  target.addEventListener('click', showPopover);
});

// Hide popover when clicking outside
document.addEventListener('click', function (event) {
  var popover = document.getElementById('popover');
  var isClickInsidePopover = popover.contains(event.target);
  var isClickInsideTarget = Array.from(targets).some((target) => target.contains(event.target));

  if (!isClickInsidePopover && !isClickInsideTarget) {
    hidePopover();
  }
});

function toggleHighlight(button) {
  // Toggle the active class on the button itself
  button.classList.toggle('icon-plus');

  // Find the parent css_tr element
  const parentElement = button.closest('.css_tr.parent');

  // Get the next sibling which is the first child element
  let nextSibling = parentElement.nextElementSibling;

  // Loop through all sibling elements until you find a new parent or the end
  while (nextSibling && nextSibling.classList.contains('child')) {
    nextSibling.classList.toggle('disabled');
    nextSibling = nextSibling.nextElementSibling;
  }
}
// Dropdown
document.addEventListener('DOMContentLoaded', function () {
  // Function to toggle the dropdown menu
  function toggleDropdown(event) {
    event.stopPropagation(); // Prevent the click event from bubbling up
    const dropdown = document.getElementById('dropdownmenu');
    const target = event.currentTarget;

    if (dropdown.classList.contains('show-dropdown')) {
      dropdown.classList.remove('show-dropdown');
    } else {
      dropdown.classList.add('show-dropdown');
      const rect = target.getBoundingClientRect();
      const dropdownRect = dropdown.getBoundingClientRect();

      dropdown.style.left = `${rect.left}px`;
      dropdown.style.top = `${rect.bottom}px`;

      // Adjust left position to account for dropdown width
      const dropdownRight = rect.left + dropdownRect.width;
      if (dropdownRight > window.innerWidth) {
        dropdown.style.left = `${window.innerWidth - dropdownRect.width}px`;
      }
    }
  }

  // Function to close the dropdown if clicked outside
  function closeDropdown(event) {
    const dropdown = document.getElementById('dropdownmenu');
    if (!dropdown.contains(event.target) && !event.target.classList.contains('dropdown-toggle')) {
      dropdown.classList.remove('show-dropdown');
    }
  }

  // Add event listener to the target element
  document.querySelectorAll('.dropdown-toggle').forEach((item) => {
    item.addEventListener('click', toggleDropdown);
  });

  // Close dropdown if clicked outside
  document.addEventListener('click', closeDropdown);
});
