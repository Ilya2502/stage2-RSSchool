function toggleMenu() {
    backgroundBurger.forEach((item) => item.classList.toggle('background-burger-open'));
    mobileMenu.classList.toggle('mobile-menu-open');
    burger.classList.toggle('burger-open');
    logo.classList.toggle('logo-open');
    body.classList.toggle('no-scroll');
    // spanLine.forEach((item) => item.classList.toggle('open-line'));
  };
  
  function closeMenu() {
    backgroundBurger.forEach((item) => item.classList.remove('background-burger-open'));
    mobileMenu.classList.remove('mobile-menu-open');
    burger.classList.remove('burger-open');
    logo.classList.remove('logo-open');
    body.classList.remove('no-scroll');
    // navList.classList.remove('open');
    // hamburger.classList.remove('openBurger');
    // spanLine.forEach((item) => item.classList.remove('open-line'));
  };
  
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const backgroundBurger = document.querySelectorAll('.background-burger');
  const logo = document.querySelector('.logo');
  const body = document.querySelector('body');
  const navLinks = document.querySelectorAll('.nav-link');
  const logoMobile = document.querySelector('.logo-mobile');
  
  burger.addEventListener('click', toggleMenu);
  navLinks.forEach((item) => item.addEventListener('click', closeMenu));
  backgroundBurger.forEach((item) => item.addEventListener('click', closeMenu));
  logoMobile.addEventListener('click', closeMenu);

//   const itemSkills = document.querySelector('.nav-item-skills');
//   itemSkills.addEventListener('click', closeMenu);
  
//   const itemPortfolio = document.querySelector('.nav-item-portfolio');
//   itemPortfolio.addEventListener('click', closeMenu);
  
//   const itemVideo = document.querySelector('.nav-item-video');
//   itemVideo.addEventListener('click', closeMenu);
  
//   const itemPrice = document.querySelector('.nav-item-price');
//   itemPrice.addEventListener('click', closeMenu);
  
//   const itemContacts = document.querySelector('.nav-item-contacts');
//   itemContacts.addEventListener('click', closeMenu);