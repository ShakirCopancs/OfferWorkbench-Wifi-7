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
            const checkbox = this.querySelector("input[type='checkbox']");
            if (checkbox) {
                checkbox.checked = !checkbox.checked;
            }
        });
    });
});


  document.addEventListener('DOMContentLoaded', function() {
    const editButtons = document.querySelectorAll('.edit-btn');

    editButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tr = button.closest('tr');
            tr.classList.toggle('editTable');

            const img = button.querySelector('img');
            if (tr.classList.contains('editTable')) {
                img.src = './img/cross-icon.svg'; 
                img.alt = 'Cross';
                img.className = "action-icon"
            } else {
                img.src = './img/edit-icon.svg'; 
                img.alt = 'Edit';
            }
        });
    });
});


function openRequestModal() {
    document.getElementById('blockingRulesModal').style.display = 'block';
    document.getElementById('ea3myModal').style.display='none';
    console.log("i3vb3b3e3",openRequestModal)
   }
   function closeRequestModal() {
    document.getElementById('blockingRulesModal').style.display = 'none';
   }
   window.onclick = function(event) {
    var modal = document.getElementById('blockingRulesModal');
    if (event.target == modal) {
    modal.style.display = "none";
    }
   }