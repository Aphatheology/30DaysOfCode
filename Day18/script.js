let hamburger = document.getElementById('hamburger-icon');
let menu = document.getElementById('menu');
let closet = document.getElementById('close');

hamburger.addEventListener('click' , () => {
    menu.style.display = 'block';
    hamburger.style.display = 'none';
    closet.style.display = 'block';
})

closet.addEventListener('click' , () => {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
    closet.style.display = 'none';
})

window.onclick = function(event) {
    if (event.target == menu) {
      menu.style.display = "none";
      
    hamburger.style.display = 'block';
    closet.style.display = 'none';
    }
  }

  window.onload = function() {
    menu.style.display = 'none';
    hamburger.style.display = 'block';
    closet.style.display = 'none';
  }

