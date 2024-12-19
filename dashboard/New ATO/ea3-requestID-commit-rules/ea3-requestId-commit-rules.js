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

// ------------------------select-field---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const selectContainer = document.querySelector(".ea3-select");
  const mainInput = selectContainer.querySelector(".ea3-form-input");

  mainInput.addEventListener("focus", () => {
    selectContainer.classList.add("active");
  });

  document.addEventListener("click", (event) => {
    if (!selectContainer.contains(event.target)) {
      selectContainer.classList.remove("active");
    }
  });

  const items = selectContainer.querySelectorAll(".ea3-select-item");
  items.forEach((item) => {
    item.addEventListener("click", () => {
      mainInput.value = item.textContent;
      selectContainer.classList.remove("active");
    });
  });
});
// ------------------------select-field---------------------------

// -----------------------check-box checked---------------------------

class RuleManager {
  constructor() {
    this.initializeEventListeners();
    this.hideAllRules();
  }

  initializeEventListeners() {
    const ruleCards = document.querySelectorAll(".ea3-rule-card");
    ruleCards.forEach((card) => {
      card.addEventListener("click", () => {
        this.toggleCheckbox(card);
        this.toggleVisibility(card);
        this.toggleOtherCards(card);
      });
    });
  }

  toggleCheckbox(card) {
    const checkbox = card.querySelector(".ea3-form-checkbox");
    checkbox.checked = !checkbox.checked;
    card.classList.toggle("selected", checkbox.checked);
  }

  toggleVisibility(card) {
    const targetId = card.getAttribute("data-target");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.style.display =
        targetElement.style.display === "none" ||
        targetElement.style.display === ""
          ? "block"
          : "none";
    }
  }
  toggleOtherCards(selectedCard) {
    const ruleCards = document.querySelectorAll(".ea3-rule-card");
    ruleCards.forEach((card) => {
      if (card !== selectedCard) {
        card.classList.toggle(
          "disabled",
          selectedCard.classList.contains("selected")
        );
      }
    });
  }

  hideAllRules() {
    document.querySelectorAll(".ea3-rule").forEach((element) => {
      element.style.display = "none";
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  new RuleManager();
});

// -----------------------check-box checked---------------------------

// ---------------------range ------------------------

function updateSliderValue(slider) {
  const sliderValue = document.getElementById("ea3-sliderValue");
  sliderValue.textContent = `${slider.value}%`;
  const percentage =
    ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  slider.style.background = `linear-gradient(to right, #0070d2 ${percentage}%, #ddd ${percentage}%)`;
}

const cards = document.querySelectorAll(".ea3-license-card");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("selected"); 
  });
});
