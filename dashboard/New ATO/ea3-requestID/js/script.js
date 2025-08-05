function toggleRows(row) {
  row.classList.toggle("ea3-toggle");

  if (row.classList.contains("ea3-toggle")) {
    row.classList.add("active-toggle");
    row.querySelector(".ea3-bold-font").style.fontWeight = "700";
    row.querySelector(".ea3-minus-icon").style.display = "block";
    row.querySelector(".ea3-plus-icon").style.display = "none";
  } else {
    row.classList.remove("active-toggle");
    row.querySelector(".ea3-bold-font").style.fontWeight = "400";
    row.querySelector(".ea3-minus-icon").style.display = "none";
    row.querySelector(".ea3-plus-icon").style.display = "block";
  }

  let nextRow = row.nextElementSibling;
  while (nextRow && !nextRow.onclick) {
    nextRow.classList.toggle("ea3-hide-table");
    nextRow = nextRow.nextElementSibling;
  }
}

// ------------------------donut js---------------------
document.addEventListener("DOMContentLoaded", () => {
  const donutBar = document.querySelector('div[role="donutbar"]');
  const value = getComputedStyle(donutBar).getPropertyValue("--value").trim();
  donutBar.querySelector(".donutbar-value").textContent = value + "%";
});

document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".ea3-stepper-toggle");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      const stepList = toggle.previousElementSibling;

      if (toggle.classList.contains("toggleDown")) {
        // Show the step list
        stepList.style.display = "block";
        toggle.classList.remove("toggleDown");
      } else {
        // Hide the step list
        stepList.style.display = "none";
        toggle.classList.add("toggleDown");
      }
    });
  });
});
