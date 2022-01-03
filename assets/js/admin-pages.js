document.querySelector('.mobile-burger').addEventListener('click', mobileMenu);

function mobileMenu() {
  document.querySelector('.adm-navbar').classList.toggle('adm-navbar--mobile');
  document.querySelector('.mobile-burger-1').classList.toggle('active');
  document.querySelector('.mobile-burger-2').classList.toggle('active');
  document.querySelector('.mobile-burger-3').classList.toggle('active');
  document.querySelector('.body').classList.toggle('body--active');
  document.querySelector('.admin-content').classList.toggle('admin-content--active');
}