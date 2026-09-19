const menu = document.getElementById("menu")
const overlay = document.getElementById("overlay")
const btnmenu = document.getElementById("btn.menu")
const btnclose = document.getElementById("btn.close")

function openMenu(){
    menu.classList.add("aberto");
    overlay.classList.add("aberto");
}

function closeMenu(){
    menu.classList.remove("aberto");
    overlay.classList.remove("aberto");
}

btnmenu.addEventListener("click", openMenu);
btnclose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}