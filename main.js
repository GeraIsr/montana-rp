const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    // Запрещаем скролл основной страницы при открытом меню
    document.body.style.overflow = burger.classList.contains('active') ? 'hidden' : 'visible';
  });

  // Закрытие меню при клике на ссылку
  const mobileLinks = document.querySelectorAll('.header_nav_mobile .header_link');
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = 'visible';
    });
  });