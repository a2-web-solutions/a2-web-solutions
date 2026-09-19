const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {

  nav.classList.toggle("open");

  menuButton.textContent =
    nav.classList.contains("open")
      ? "CLOSE"
      : "MENU";

});


document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("open");
    menuButton.textContent = "MENU";

  });

});


const targets = document.querySelectorAll(
  ".concept-grid, .training-card, .program-row, .gym-content, .access-list"
);

targets.forEach(target => {
  target.classList.add("reveal");
});


const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("active");
      observer.unobserve(entry.target);

    }

  });

}, {
  threshold: 0.12
});


targets.forEach(target => {
  observer.observe(target);
});