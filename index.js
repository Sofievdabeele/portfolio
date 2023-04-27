// hamburger menu nav bar
const hamburger= document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.
  addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }))

// dark mode
const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const footer = document.querySelector("footer");
const copyright= document.querySelector(".copyright");
const span = document.querySelector(".copyright span");
const header = document.querySelector("header");
const navBranding = document.querySelector(".nav-branding");
const navLink = document.querySelector(".nav-link");
const bar = document.querySelector(".bar");
const scrollLink = document.querySelector(".scroll-link")

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  footer.classList.toggle("dark");
  copyright.classList.toggle("dark");
  span.classList.toggle("dark");
  header.classList.toggle("dark");
  navBranding.classList.toggle("dark");
  // navLink.classList.toggle("dark");
  bar.classList.toggle("dark");
  navMenu.classList.toggle("dark");
  scrollLink.classList.toggle("dark");

  


});

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active")
});

