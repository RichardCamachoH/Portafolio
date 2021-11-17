const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
    navMenu.classList.toggle("nav-menu_no_visible")
});

const menuOpc = document.querySelectorAll('.nav-menu a[href^="#"]')

menuOpc.forEach(element => {
    element.addEventListener("click", function() {
        navMenu.classList.toggle("nav-menu_visible")
        navMenu.classList.toggle("nav-menu_no_visible")
    })
});