const menuBtn = document.querySelector('.menu-btn');
const offScreenMenu = document.querySelector('.off-screen-menu');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  offScreenMenu.classList.toggle('open');
  });

