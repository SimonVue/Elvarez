/* ========================= Header_menu ======================== */

document.getElementById('headerOne').onclick = function () {
  open()
};

function open() {
  document.body.classList.toggle('_lock');
  document.querySelector('.header_menu').classList.toggle('openMenu');
}

/* =========================  ======================== */
