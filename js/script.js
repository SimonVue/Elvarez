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
  //document.body.classList.toggle('_lock');
  document.querySelector('.header_menu').classList.toggle('openMenu');
}

/* ====================== First submenu list ======================= */
document.getElementById('first-submenu-btn').onclick = function () {
  openSubmenuList()
};

function openSubmenuList() {
  //document.body.classList.toggle('_lock');
  document.getElementById('first-submenu-list').classList.toggle('open-submenu-list');
}


/* ============================ Carusel ========================== */

/* этот код помечает картинки, для удобства разработки */
let i = 1;
for (let li of carousel.querySelectorAll('li')) {
  li.style.position = 'relative';
  li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
  i++;
}

/* конфигурация */
let width = 350; // ширина картинки
let count = 3; // видимое количество изображений

let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 0; // положение ленты прокрутки

carousel.querySelector('.prev').onclick = function () {
  // сдвиг влево
  position += width;
  // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
  position = Math.min(position, 0)
  list.style.marginLeft = position + 'px';
};

carousel.querySelector('.next').onclick = function () {
  // сдвиг вправо
  position -= width;
  // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
  position = Math.max(position, -width * (listElems.length - count));
  list.style.marginLeft = position + 'px';
};

// /* ===================== trial-products carusel =================== */
// /* этот код помечает картинки, для удобства разработки */
// let i = 1;
// for (let li of carousel.querySelectorAll('li')) {
//   li.style.position = 'relative';
//   li.insertAdjacentHTML('beforeend', `<span style="position:absolute;left:0;top:0">${i}</span>`);
//   i++;
// }

// /* конфигурация */
// let width = 350; // ширина картинки
// let count = 3; // видимое количество изображений

// let list = carousel.querySelector('ul');
// let listElems = carousel.querySelectorAll('li');

// let position = 0; // положение ленты прокрутки

// carousel.querySelector('.prev').onclick = function () {
//   // сдвиг влево
//   position += width;
//   // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
//   position = Math.min(position, 0)
//   list.style.marginLeft = position + 'px';
// };

// carousel.querySelector('.next').onclick = function () {
//   // сдвиг вправо
//   position -= width;
//   // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
//   position = Math.max(position, -width * (listElems.length - count));
//   list.style.marginLeft = position + 'px';
// };