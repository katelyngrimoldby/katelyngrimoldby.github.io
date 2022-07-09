const openBtn = document.getElementById('menu-open');
const closeBtn = document.getElementById('menu-close');
const nav = document.querySelector('nav');
const content = nav.querySelector('ul');

const openNav = () => {
  nav.style.width = '100%';

  closeBtn.style.opacity = 1;
  closeBtn.style.pointerEvents = 'auto';
  closeBtn.style.userSelect = 'text';

  content.style.opacity = 1;
  content.style.pointerEvents = 'auto';
  content.style.userSelect = 'text';
  if (window.getComputedStyle(closeBtn).getPropertyValue('display')) {
    content.addEventListener('click', closeNav);
  }
};

const closeNav = () => {
  nav.style.width = 0;

  closeBtn.style.opacity = 0;
  closeBtn.style.pointerEvents = 'none';
  closeBtn.style.userSelect = 'none';

  content.style.opacity = 0;
  content.style.pointerEvents = 'none';
  content.style.userSelect = 'none';
};

openBtn.addEventListener('click', openNav);
closeBtn.addEventListener('click', closeNav);
