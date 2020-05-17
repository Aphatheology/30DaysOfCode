const modalBtn = document.getElementById('modal-btn')
const modal = document.getElementById('modal')
const close = document.querySelector('.close')

console.log(modal)
console.log(modalBtn)


modalBtn.addEventListener('click' , () => {
    modal.style.display = "block"
})

close.addEventListener('click' , () => {
    modal.style.display = "none"
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }