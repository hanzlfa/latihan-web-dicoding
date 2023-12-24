const dropdrownMenu = document.querySelector(".dropdown-menu input");
const nav = document.querySelector("nav ul");

dropdrownMenu.addEventListener("click", function() {
    nav.classList.toggle("slide");
})
