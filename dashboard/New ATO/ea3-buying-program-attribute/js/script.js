
function openRequestModal() {
    document.getElementById('buyingEditModal').style.display = 'block';
    document.getElementById('ea3myModal').style.display='none';
    console.log("i3vb3b3e3",openRequestModal)
   }
   function closeRequestModal() {
    document.getElementById('buyingEditModal').style.display = 'none';
   }
   window.onclick = function(event) {
    var modal = document.getElementById('buyingEditModal');
    if (event.target == modal) {
    modal.style.display = "none";
    }
   }