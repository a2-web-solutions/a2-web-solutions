// =========================
// HEADER
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


// =========================
// MOBILE MENU
// =========================

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav a");

menuButton.addEventListener("click", () => {

  nav.classList.toggle("open");

  if (nav.classList.contains("open")) {
    menuButton.textContent = "CLOSE";
  } else {
    menuButton.textContent = "MENU";
  }

});


navLinks.forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");

    menuButton.textContent = "MENU";

  });

});


// =========================
// SCROLL REVEAL
// =========================

const revealTargets = document.querySelectorAll(
  ".concept-grid, .food-title, .food-card, .space-content, .information-head, .information-row"
);

revealTargets.forEach(element => {
  element.classList.add("reveal");
});


const observer = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("active");

        observer.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealTargets.forEach(element => {
  observer.observe(element);
});