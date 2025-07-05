const divContainer = document.querySelector(".container-nav");
const divAux = document.querySelector(".aux-div");
const menuBar = document.querySelector("#bar-menu");
const closeMenu = document.querySelector("#bar-close");
const divFade = document.querySelector(".fade-div");

function hideMenu() {
    divContainer.classList.remove("show");
    divAux.classList.remove("show");
}

function hideDarkScreen() {
    divFade.classList.remove("show");
}

menuBar.addEventListener('click', () => {
    divContainer.classList.add("show");
    divAux.classList.add("show");
    divFade.classList.add("show");
});

divFade.addEventListener('click', () => {
    hideMenu();
    hideDarkScreen();
});

closeMenu.addEventListener('click', () => {
    hideMenu();
    hideDarkScreen();
})