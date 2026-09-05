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