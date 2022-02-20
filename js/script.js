/* ========================= Burger ======================== */
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

const btn = document.getElementsByClassName("header-menu__button");
const openMenu = document.querySelector('.header-menu__panel');
//const i;

for (let i = 0; i < acc.length; i++) {
  btn[i].addEventListener("click", function () {
    openMenu.classList.toggle("open");
    let panel = openMenu.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}