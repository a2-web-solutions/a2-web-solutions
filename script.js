// ================================
// HEADER
// ================================

const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

function updateHeader() {
  if (window.scrollY > 50 && !nav.classList.contains("open")) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  const isOpen = nav.classList.contains("open");

  menuButton.textContent = isOpen ? "CLOSE" : "MENU";

  if (isOpen) {
    header.classList.remove("scrolled");
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
    updateHeader();
  }
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.textContent = "MENU";
    updateHeader();
  });
});



// ================================
// SERVICE ACCORDION
// ================================

const serviceItems =
  document.querySelectorAll(".service-item");


serviceItems.forEach(item => {

  const button =
    item.querySelector(".service-main");


  button.addEventListener(
    "click",
    () => {

      const isOpen =
        item.classList.contains("open");


      serviceItems.forEach(
        otherItem => {

          otherItem.classList.remove("open");

        }
      );


      if (!isOpen) {

        item.classList.add("open");

      }

    }
  );

});



// ================================
// SERVICE CONTACT LINKS
// ================================

document
  .querySelectorAll(".service-detail a")
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        event.stopPropagation();

      }
    );

  });



// ================================
// SCROLL REVEAL
// ================================

const revealTargets =
  document.querySelectorAll(
    `
    .intro-grid,
    .service-item,
    .works-head,
    .work,
    .about-content,
    .flow-item,
    .free-sample,
    .contact-form-wrap
    `
  );


revealTargets.forEach(
  element => {

    element.classList.add("reveal");

  }
);


const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("active");


            observer
              .unobserve(
                entry.target
              );

          }

        }
      );

    },

    {
      threshold: 0.1
    }

  );


revealTargets.forEach(
  element => {

    observer.observe(element);

  }
);