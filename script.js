// ================================
// HEADER
// ================================

const header =
  document.querySelector(".header");


window.addEventListener(
  "scroll",
  () => {

    if (window.scrollY > 50) {

      header.classList.add("scrolled");

    } else {

      header.classList.remove("scrolled");

    }

  }
);



// ================================
// MOBILE MENU
// ================================

const menuButton =
  document.querySelector(".menu-button");

const nav =
  document.querySelector(".nav");


menuButton.addEventListener(
  "click",
  () => {

    nav.classList.toggle("open");


    menuButton.textContent =
      nav.classList.contains("open")
        ? "CLOSE"
        : "MENU";

  }
);


document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        nav.classList.remove("open");

        menuButton.textContent =
          "MENU";

      }
    );

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