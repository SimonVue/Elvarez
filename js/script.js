/* ========================= Burger - menu ======================== */
document.querySelector('.menu-burger').onclick = function () {
  open()
};

function open() {
  document.body.classList.toggle('_lock');
  document.getElementById('nav-menu').classList.toggle('_open');
  document.querySelector('.menu-burger').classList.toggle('_close');
}

/* ========================= Accordion ======================== */
const acc = document.getElementsByClassName("accordion__button");
//const i;

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

/* ========================= Header_menu ======================== */

document.getElementById('header-button').onclick = function () {
  openHeaderMenu()
};

function openHeaderMenu() {
  document.body.classList.toggle('_lock');
  document.querySelector('.header_menu').classList.toggle('openMenu');
}

/* ============================  ================================ */