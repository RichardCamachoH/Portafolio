const navToggle = document.querySelector(".header__toggle");
const navMenu = document.querySelector(".header__list");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu-visible")
    navMenu.classList.toggle("menu-hidden")
});

const menuOpc = document.querySelectorAll('.header__list a[href^="#"]')

menuOpc.forEach(element => {
    element.addEventListener("click", function() {
        navMenu.classList.toggle("menu-visible")
        navMenu.classList.toggle("menu-hidden")
    })
});