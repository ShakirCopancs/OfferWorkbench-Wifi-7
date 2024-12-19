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
