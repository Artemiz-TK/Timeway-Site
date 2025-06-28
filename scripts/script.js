const home = document.querySelector("#home");
const nav = document.querySelector(".nav");
const about = document.querySelector("#about");
const footer = document.querySelector("footer");
const divContainer = document.querySelector(".container-nav");
const divAux = document.querySelector(".aux-div");
const menuBar = document.querySelector("#bar-menu");
const closeMenu = document.querySelector("#bar-close");

function hideMenu() {
    divContainer.classList.remove("show");
    divAux.classList.remove("show");
}

menuBar.addEventListener('click', () => {
    divContainer.classList.add("show");
    divAux.classList.add("show");
});

closeMenu.addEventListener('click', () => {
    hideMenu();
});

home.addEventListener('click', () => {
    hideMenu();
});

about.addEventListener('click', () => {
    hideMenu();
});

footer.addEventListener('click', () => {
    hideMenu();
});