
function toggleMenu() {
    backgroundBurger.classList.toggle('background-burger-open');
    mobileMenu.classList.toggle('mobile-menu-open');
    burger.classList.toggle('burger-open');
    logo.classList.toggle('logo-open');
    // spanLine.forEach((item) => item.classList.toggle('open-line'));
  };
  
//   function closeMenu() {
//     navList.classList.remove('open');
//     hamburger.classList.remove('openBurger');
//     spanLine.forEach((item) => item.classList.remove('open-line'));
//   };
  
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const backgroundBurger = document.querySelector('.background-burger');
  const logo = document.querySelector('.logo');
  
  burger.addEventListener('click', toggleMenu);
  
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