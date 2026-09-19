// ================================
// HEADER
// ================================

const header = document.querySelector(".header");
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

let menuScrollPosition = 0;


// ================================
// HEADER SCROLL
// ================================

function updateHeader() {

  if (
    window.scrollY > 50 &&
    !nav.classList.contains("open")
  ) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

}

window.addEventListener("scroll", updateHeader);


// ================================
// MENU OPEN
// ================================

function openMenu() {

  // 開く直前の位置を保存
  menuScrollPosition =
    window.pageYOffset ||
    document.documentElement.scrollTop;

  nav.classList.add("open");
  menuButton.textContent = "CLOSE";

  header.classList.remove("scrolled");

  // 今いる位置のままbodyを固定
  document.body.style.position = "fixed";
  document.body.style.top = `-${menuScrollPosition}px`;
  document.body.style.left = "0";
  document.body.style.right = "0";
  document.body.style.width = "100%";

}


// ================================
// MENU CLOSE
// ================================

function closeMenu() {

  nav.classList.remove("open");
  menuButton.textContent = "MENU";

  // 保存していた位置を別変数に確保
  const restorePosition = menuScrollPosition;

  // body固定解除
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.left = "";
  document.body.style.right = "";
  document.body.style.width = "";

  // 元いた位置へ戻す
  window.scrollTo({
    top: restorePosition,
    left: 0,
    behavior: "instant"
  });

  updateHeader();

}


// ================================
// MENU BUTTON
// ================================

menuButton.addEventListener("click", () => {

  if (nav.classList.contains("open")) {
    closeMenu();
  } else {
    openMenu();
  }

});


// ================================
// MENU LINKS
// ================================

document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener("click", () => {

      // メニュー内リンクの場合は
      // body固定だけ解除する
      nav.classList.remove("open");
      menuButton.textContent = "MENU";

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";

    });

  });


// ================================
// SERVICE ACCORDION
// ================================

const serviceItems =
  document.querySelectorAll(
    ".service-item"
  );


serviceItems.forEach(item => {

  const button =
    item.querySelector(
      ".service-main"
    );


  button.addEventListener(
    "click",
    () => {

      const isOpen =
        item.classList.contains(
          "open"
        );


      serviceItems.forEach(
        otherItem => {

          otherItem.classList.remove(
            "open"
          );

        }
      );


      if (!isOpen) {

        item.classList.add(
          "open"
        );

      }

    }
  );

});


// ================================
// SERVICE CONTACT LINKS
// ================================

document
  .querySelectorAll(
    ".service-detail a"
  )
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

    element.classList.add(
      "reveal"
    );

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
              .add(
                "active"
              );


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

    observer.observe(
      element
    );

  }
);