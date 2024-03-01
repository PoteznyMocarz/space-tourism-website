let openMenuBtn = document.getElementById("openMenuBtn");
let closeMenuBtn = document.getElementById("closeMenuBtn");
let menu = document.getElementById("menu");

function closeMenu() {
    menu.classList.remove("w-[60%]")
    menu.classList.add("w-[0%]")
    setTimeout(() => menu.classList.add("hidden"), 250)
}

closeMenuBtn.addEventListener("click", closeMenu)

function openMenu() {
    menu.classList.add("w-[60%]")
    setTimeout(() => menu.classList.remove("w-[0%]"), 1)
    menu.classList.remove("hidden")
}

openMenuBtn.addEventListener("click", openMenu)