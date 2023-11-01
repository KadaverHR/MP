
document.addEventListener("DOMContentLoaded", () => {

  
  document.getElementById('selectMP').addEventListener('click', () => {
    document.getElementById('selectMPform').classList.toggle('active')
  })

  var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
    removeItemButton: true,
});

});