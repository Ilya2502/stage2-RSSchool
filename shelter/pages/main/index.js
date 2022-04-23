
function toggleMenu() {
    backgroundBurger.classList.toggle('background-burger-open');
    mobileMenu.classList.toggle('mobile-menu-open');
    burger.classList.toggle('burger-open');
    logo.classList.toggle('logo-open');
    body.classList.toggle('no-scroll');
  };
  
  function closeMenu() {
    backgroundBurger.classList.remove('background-burger-open');
    mobileMenu.classList.remove('mobile-menu-open');
    burger.classList.remove('burger-open');
    logo.classList.remove('logo-open');
    body.classList.remove('no-scroll');
  };
  
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const backgroundBurger = document.querySelector('.background-burger');
  const logo = document.querySelector('.logo');
  const body = document.querySelector('body');
  const navLinks = document.querySelectorAll('.nav-link');
  const logoMobile = document.querySelector('.logo-mobile');
  
  burger.addEventListener('click', toggleMenu);
  navLinks.forEach((item) => item.addEventListener('click', closeMenu));
  backgroundBurger.addEventListener('click', closeMenu);
  logoMobile.addEventListener('click', closeMenu);
  

/*  --------------   carousel  -------------  */



  const btnLeft = document.querySelector("#button-left");
  const btnRight = document.querySelector("#button-right");
  const carousel = document.querySelector("#carousel");
  const itemLeft = document.querySelector("#item-left");
  const itemRight = document.querySelector("#item-right");
  const itemActive = document.querySelector("#item-active");

  let activeRundomNumbers = [];
  let leftRundomNumbers = [];
  let rightRundomNumbers = [];
  let rundomNumber;

  const moveLeft = () => {
    carousel.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };
  
  const moveRight = () => {
    carousel.classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }


  btnLeft.addEventListener("click", moveLeft);
  btnRight.addEventListener("click", moveRight);

  carousel.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      carousel.classList.remove("transition-left");
      itemActive.innerHTML = itemLeft.innerHTML;
      for (let i=0; i < 3; i++) {
        activeRundomNumbers[i] = leftRundomNumbers[i];
      }
      leftRundomNumbers = [];
      rightRundomNumbers = [];
      getLeftPets();
      getRightPets();
    } else {
      carousel.classList.remove("transition-right");
      itemActive.innerHTML = itemRight.innerHTML;
      for (let i=0; i < 3; i++) {
        activeRundomNumbers[i] = rightRundomNumbers[i];
      }
      leftRundomNumbers = [];
      rightRundomNumbers = [];
      getLeftPets();
      getRightPets();
    }
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);  
  })

  async function getActivePets() { 
    const res = await fetch('../../assets/json-files/pets-information.json');
    const data = await res.json();
    const activeCards = itemActive.querySelectorAll(".first-card, .second-card, .third-card");
    for (let i = 0; i < 3; i++) {
      rundomNumber = getRandomInt(0, 8);
      if (activeRundomNumbers.includes(rundomNumber)) {
        i -= 1;
        continue;
      } else {
        activeRundomNumbers.push(rundomNumber);
        activeCards[i].querySelector(".card-image .img-pet").src = data[rundomNumber].img;
        activeCards[i].querySelector(".card-name").innerHTML = data[rundomNumber].name;
      }
    }
  }

  async function getLeftPets() { 
    const res = await fetch('../../assets/json-files/pets-information.json');
    const data = await res.json();
    const leftCards = itemLeft.querySelectorAll(".first-card, .second-card, .third-card");
    for (let i = 0; i < 3; i++) {
      rundomNumber = getRandomInt(0, 8);
      if (activeRundomNumbers.includes(rundomNumber) || leftRundomNumbers.includes(rundomNumber)) {
        i -= 1;
        continue;
      } else {
        leftRundomNumbers.push(rundomNumber);
        leftCards[i].querySelector(".card-image .img-pet").src = data[rundomNumber].img;
        leftCards[i].querySelector(".card-name").innerHTML = data[rundomNumber].name;
      }
    }
  }

  async function getRightPets() { 
    const res = await fetch('../../assets/json-files/pets-information.json');
    const data = await res.json();
    const rightCards = itemRight.querySelectorAll(".first-card, .second-card, .third-card");
    for (let i = 0; i < 3; i++) {
      rundomNumber = getRandomInt(0, data.length);
      if (activeRundomNumbers.includes(rundomNumber) || rightRundomNumbers.includes(rundomNumber)) {
        i -= 1;
        continue;
      } else {
        rightRundomNumbers.push(rundomNumber);
        rightCards[i].querySelector(".card-image .img-pet").src = data[rundomNumber].img;
        rightCards[i].querySelector(".card-name").innerHTML = data[rundomNumber].name;
      }
    }
  }
 
  getActivePets();
  getLeftPets();
  getRightPets();

