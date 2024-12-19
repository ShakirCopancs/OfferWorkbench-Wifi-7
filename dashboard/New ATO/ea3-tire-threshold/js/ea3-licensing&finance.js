function openRequestModal() {
    document.getElementById('discardChangesModal').style.display = 'block';
    document.getElementById('ea3myModal').style.display='none';
    console.log("i3vb3b3e3",openRequestModal)
   }
   function closeRequestModal() {
    document.getElementById('discardChangesModal').style.display = 'none';
   }
   function redirectToEnrollment() {
    window.location.href = "../ea3-licensing&finance/ea3-licensing&finance.html";
   }
   window.onclick = function(event) {
    var modal = document.getElementById('discardChangesModal');
    if (event.target == modal) {
    modal.style.display = "none";
    }
}





