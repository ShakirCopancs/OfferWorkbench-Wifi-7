const overlay = document.getElementById("ow-overlay");
const overlayContainer = document.getElementById("ow-overlay-container");
const drawer = document.querySelector(".ea3-preview-drawer");

function openSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(0)";
  overlayContainer.style.display = "block";
}

function closeSidebar() {
  document.getElementById("offcanvas-sidebar").style.transform =
    "translateX(100%)";
  drawer.style.right = "-403px";

  overlayContainer.style.display = "none";
}

// ------------------------select-field---------------------------
document.addEventListener("DOMContentLoaded", () => {
  const selectContainer = document.querySelector(".ea3-select");
  const mainInput = selectContainer.querySelector(".ea3-form-input");
  const mainInputs = selectContainer.querySelector(".ea3-form-select");

  mainInputs.addEventListener("click", () => {
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
      card.addEventListener("click", (event) => {
        if (event.target.classList.contains("ea3-form-checkbox")) {
          return;
        }
        this.toggleCard(card);
        this.toggleVisibility(card);
        this.toggleOtherCards(card);
      });

      const checkbox = card.querySelector(".ea3-form-checkbox");
      if (checkbox) {
        checkbox.addEventListener("click", (event) => {
          event.stopPropagation();
          this.toggleCheckbox(checkbox);
          this.toggleVisibility(card);
          this.toggleOtherCards(card);
        });
      }
    });
  }

  toggleCard(cardElement) {
    const checkbox = cardElement.querySelector(".ea3-form-checkbox");
    checkbox.checked = !checkbox.checked;
    cardElement.classList.toggle("selected", checkbox.checked);
  }

  toggleCheckbox(checkboxElement) {
    const card = checkboxElement.closest(".ea3-rule-card");
    card.classList.toggle("selected", checkboxElement.checked);
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
    const selectedId = selectedCard.getAttribute("data-target");
    const ruleCards = document.querySelectorAll(".ea3-rule-card");

    ruleCards.forEach((card) => {
      const cardId = card.getAttribute("data-target");

      if (
        selectedId === "ea3-ib-commitment" ||
        selectedId === "ea3-tvc-minimum-commitment"
      ) {
        if (cardId === "ea3-quantity-threshold") {
          card.classList.toggle(
            "disabled",
            selectedCard.classList.contains("selected")
          );
          drawer.style.right = "-403px";
        }
      } else if (selectedId === "ea3-quantity-threshold") {
        if (
          cardId === "ea3-ib-commitment" ||
          cardId === "ea3-tvc-minimum-commitment"
        ) {
          card.classList.toggle(
            "disabled",
            selectedCard.classList.contains("selected")
          );
        }
      } else {
        card.classList.remove("disabled");
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

// --------------accordian------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".ea3-accordion");

  accordions.forEach((accordion) => {
    const content = accordion.nextElementSibling.nextElementSibling;
    const divider = accordion.nextElementSibling;

    content.style.display = "block";
    divider.style.display = "block";

    accordion.addEventListener("click", () => {
      const isVisible = content.style.display !== "none";

      content.style.display = isVisible ? "none" : "block";
      divider.style.display = isVisible ? "none" : "block";

      const icon = accordion.querySelector(".ea3-accordian-icon");
      icon.style.transform = isVisible ? "rotate(0deg)" : "rotate(180deg)";
    });
  });
});

// -----------------------node section show or hide----------------

document
  .querySelectorAll("input[name='quality-thershold']")
  .forEach((radio) => {
    radio.addEventListener("change", function () {
      const section = document.querySelector(
        ".ea3-quantity-calculator-section"
      );
      section.style.display = "block";
    });
  });

// ------------------------------nodes--------------------------
const dropdownButtons = document.querySelectorAll(".connect-btn");
function autoScroll() {
  const containerWidth = flowContainer.offsetWidth;
  const contentWidth = flowContainer.scrollWidth;

  if (contentWidth > containerWidth) {
    flowContainer.scrollLeft += 300;
  }

  if (flowContainer.scrollLeft + containerWidth < contentWidth) {
    requestAnimationFrame(autoScroll);
  }
}

dropdownButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const dropdownContent = button.nextElementSibling;

    document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
      dropdown.style.display = "none";
    });

    dropdownContent.style.display =
      dropdownContent.style.display === "block" ? "none" : "block";
    autoScroll();
    event.stopPropagation();
  });
});

document
  .querySelectorAll(".sku-group .dropdown-content a")
  .forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      const skuGroup = event.target.closest(".sku-group");
      const skuGroupDropdown = skuGroup.querySelector(".dropdown");
      const opSelectOption = skuGroup.querySelector(".op-select-option");
      const multiplyConnectorDropdown = document.querySelector(
        ".multiply-connector .dropdown"
      );

      skuGroupDropdown.classList.add("d-none");
      opSelectOption.classList.remove("d-none");

      if (multiplyConnectorDropdown) {
        multiplyConnectorDropdown.classList.remove("d-none");
      }

      event.stopPropagation();
    });
  });

document
  .querySelectorAll(".multiply-connector .dropdown-content a")
  .forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      const multiplyConnector = event.target.closest(".multiply-connector");
      const skuGroup = document.querySelector(".sku-group");
      const opSelectOption = skuGroup.querySelector(".op-select-option");
      const skuGroupList = skuGroup.querySelector(".sku-group-list");
      const multiplyConnectorDropdown =
        multiplyConnector.querySelector(".dropdown");
      const multiplyConnectorList = multiplyConnector.querySelector(
        ".multiply-connector-list"
      );
      const integerGroupDropdown = document.querySelector(
        ".integer-group .dropdown"
      );
      drawer.style.right = "922px";

      opSelectOption.classList.add("d-none");
      skuGroupList.classList.remove("d-none");
      multiplyConnectorDropdown.classList.add("d-none");
      multiplyConnectorList.classList.remove("d-none");
      if (integerGroupDropdown) {
        integerGroupDropdown.classList.remove("d-none");
      }

      event.stopPropagation();
    });
  });

document
  .querySelectorAll(".integer-group .dropdown-content a")
  .forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      const integerGroup = event.target.closest(".integer-group");
      const integerGroupDropdown = integerGroup.querySelector(".dropdown");
      const integerGroupList = integerGroup.querySelector(
        ".integer-group-list"
      );
      const integerGroupButton = integerGroup.querySelector(
        ".integer-group-button"
      );
      const selectValueIntegerGroup =
        integerGroup.querySelector(".selectValue");
      const ea3DynamicToggle = document.querySelector(".ea3-dynamic-toggle");

      // Multiply connector elements
      const multiplyConnector = document.querySelector(".multiply-connector");
      const selectValueMultiplyConnector =
        multiplyConnector.querySelector(".selectValue");
      const selectedValueMultiplyConnector =
        multiplyConnector.querySelector(".selectedValue");

      // Integer group actions
      integerGroupDropdown.classList.add("d-none");
      integerGroupList.classList.add("d-none");
      selectValueIntegerGroup.classList.remove("d-none");
      const flowContainerAuto = document.querySelector(".flow");
      console.log("Integer Group Button:", integerGroupButton); // Debugging line

      // Ensure the integer-group-button is visible by removing d-none

      if (
        integerGroupButton &&
        integerGroupButton.classList.contains("d-none")
      ) {
        integerGroupButton.classList.remove("d-none");
        console.log("d-none removed from integer-group-button");
      }

      if (ea3DynamicToggle) {
        ea3DynamicToggle.classList.remove("d-none");
      }

      // Multiply connector actions
      if (selectValueMultiplyConnector && selectedValueMultiplyConnector) {
        selectValueMultiplyConnector.classList.add("d-none");
        selectedValueMultiplyConnector.classList.remove("d-none");
      }

      event.stopPropagation();
    });
  });

document
  .querySelectorAll(".dynamic-connector-2 .dropdown-content a")
  .forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      const dynamicConnector2 = event.target.closest(".dynamic-connector-2");
      const dynamicConnector1 = document.querySelector(".dynamic-connector-1");
      const dynamicConnector3 = document.querySelector(".dynamic-connector-3");

      const dropdown2 = dynamicConnector2.querySelector(".dropdown");
      const selectValue2 = dynamicConnector2.querySelector(".selectValue");

      const selectValue1 = dynamicConnector1.querySelector(".selectValue");
      const selectedValue1 = dynamicConnector1.querySelector(".selectedValue");

      dropdown2.classList.add("d-none");
      selectValue1.classList.add("d-none");
      selectedValue1.classList.remove("d-none");
      selectValue2.classList.remove("d-none");

      if (dynamicConnector3) {
        dynamicConnector3.classList.remove("d-none");
      }
      autoScroll();

      event.stopPropagation();
    });
  });

document
  .querySelectorAll(".dynamic-connector-3 .dropdown-content a")
  .forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      const dynamicConnector3 = event.target.closest(".dynamic-connector-3");
      const dynamicConnector2 = document.querySelector(".dynamic-connector-2");
      const dynamicConnector4 = document.querySelector(".dynamic-connector-4");

      const dropdown3 = dynamicConnector3.querySelector(".dropdown");
      const selectValue3 = dynamicConnector3.querySelector(".selectValue");

      const selectValue2 = dynamicConnector2.querySelector(".selectValue");
      const selectedValue2 = dynamicConnector2.querySelector(".selectedValue");

      dropdown3.classList.add("d-none");
      selectValue3.classList.remove("d-none");
      selectedValue2.classList.remove("d-none");
      selectValue2.classList.add("d-none");

      if (dynamicConnector4) {
        dynamicConnector4.classList.remove("d-none");
      }
      autoScroll();

      event.stopPropagation();
    });
  });

document
  .querySelectorAll(".dynamic-connector-4 .dropdown-content a")
  .forEach((menuItem) => {
    menuItem.addEventListener("click", (event) => {
      const dynamicConnector4 = event.target.closest(".dynamic-connector-4");
      const dynamicConnector3 = document.querySelector(".dynamic-connector-3");

      const dropdown4 = dynamicConnector4.querySelector(".dropdown");
      const selectValue3 = dynamicConnector3.querySelector(".selectValue");
      const dynamicConnector3List = dynamicConnector3.querySelector(
        ".dynamic-connector-list-3"
      );

      dropdown4.classList.add("d-none");
      selectValue3.classList.add("d-none");
      dynamicConnector3List.classList.remove("d-none");

      autoScroll();

      event.stopPropagation();
    });
  });

window.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-content").forEach((dropdown) => {
    dropdown.style.display = "none";
  });
});

// -----------------------accordian----------------------
const toggleButtons = document.querySelectorAll(".ea3-no-style-btn");

toggleButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const accordianItem = this.parentElement.nextElementSibling;

    if (accordianItem.style.display === "flex") {
      accordianItem.style.display = "none";
      this.querySelector("img").classList.remove("rotated");
    } else {
      accordianItem.style.display = "flex";
      this.querySelector("img").classList.add("rotated");
    }
  });
});

// ------------------------------preview-drawer---------------------

const previewDrawerClose = function () {
  drawer.style.right = "-403px";
};

function toggleDynamicNode() {
  const toggleInput = document.querySelector(".toggle");
  const dynamicNode = document.querySelector(".dynamic-connector-1");
  const dynamicNode2 = document.querySelector(".dynamic-connector-2");

  if (toggleInput.checked) {
    dynamicNode.style.display = "inline-block";
    dynamicNode2.style.display = "inline-block";
  } else {
    dynamicNode.style.display = "none";
    dynamicNode2.style.display = "none";
  }
}

toggleDynamicNode();

const flowContainer = document.querySelector(".flow");
