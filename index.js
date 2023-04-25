// hamburger menu nav bar
const hamburger= document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const menuItems = document.querySelectorAll(".nav-item");
// const closeIcon= document.querySelector(".close-icon");
// const menuIcon = document.querySelector(".menu-icon");
// const showMenu = document.querySelector(".showMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("nav.link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

