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
// MENU OPEN / CLOSE
// ================================

menuButton.addEventListener("click", () => {

  const isOpening =
    !nav.classList.contains("open");


  if (isOpening) {

    // 現在のスクロール位置を保存
    menuScrollPosition = window.scrollY;


    // MENUを開く
    nav.classList.add("open");

    menuButton.textContent = "CLOSE";


    // スクロール時のヘッダー状態を解除
    header.classList.remove("scrolled");


    // 現在位置でbodyを固定
    document.body.style.top =
      `-${menuScrollPosition}px`;

    document.body.classList.add(
      "menu-open"
    );

  } else {

    closeMenu();

  }

});


// ================================
// MENU CLOSE FUNCTION
// ================================

function closeMenu() {

  // MENUを閉じる
  nav.classList.remove("open");

  menuButton.textContent = "MENU";


  // bodyの固定を解除
  document.body.classList.remove(
    "menu-open"
  );

  document.body.style.top = "";


  // MENUを開く前の位置に戻す
  window.scrollTo(
    0,
    menuScrollPosition
  );


  // ヘッダー状態を再判定
  updateHeader();

}


// ================================
// MENU LINKS
// ================================

document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      () => {

        closeMenu();

      }
    );

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