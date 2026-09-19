// =========================
// HEADER
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
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

const revealElements = document.querySelectorAll(
  ".concept-grid, .style-heading, .style-card, .price-title, .price-row, .salon-content, .info-title, .info-row"
);

revealElements.forEach(element => {
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


revealElements.forEach(element => {
  observer.observe(element);
});


// =========================
// IMAGE PARALLAX
// =========================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

  const scrollY = window.scrollY;

  if (scrollY < window.innerHeight) {

    heroImage.style.transform =
      `scale(1.045) translateY(${scrollY * 0.035}px)`;

  }

});