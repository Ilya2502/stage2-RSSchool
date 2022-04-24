function toggleMenu() {
    backgroundBurger.forEach((item) => item.classList.toggle('background-burger-open'));
    mobileMenu.classList.toggle('mobile-menu-open');
    burger.classList.toggle('burger-open');
    logo.classList.toggle('logo-open');
    body.classList.toggle('no-scroll');
  };
  
  function closeMenu() {
    backgroundBurger.forEach((item) => item.classList.remove('background-burger-open'));
    mobileMenu.classList.remove('mobile-menu-open');
    burger.classList.remove('burger-open');
    logo.classList.remove('logo-open');
    body.classList.remove('no-scroll');
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



  /*  --------------   carousel  -------------  */



  const btnMaxLeft = document.querySelector("#btn-max-left");
  const btnLeft = document.querySelector("#btn-left");
  const btnActive = document.querySelector("#btn-active");
  const btnRight = document.querySelector("#btn-right");
  const btnMaxRight = document.querySelector("#btn-max-right")

  const carousel = document.querySelector("#carousel");
  const itemLeft = document.querySelector("#item-left");
  const itemRight = document.querySelector("#item-right");
  const itemActive = document.querySelector("#item-active");
  const actualNumberPage = document.querySelector(".arrow-number");
  

  let activeRundomNumbers = [];
  let leftRundomNumbers = [];
  let rightRundomNumbers = [];
  let cardsBase = [];
  let arrNumbersCards = [];
  const quantityAllCards = 48;
  const quantityExclusiveCards = 8;
  let numberPage = 1;
  let rundomNumber;


  

  const moveLeft = () => {
    if (actualNumberPage.innerHTML === "2") {
      btnLeft.classList.add("disabled");
      btnMaxLeft.classList.add("disabled");
      btnLeft.removeEventListener("click", moveLeft);
      btnMaxLeft.removeEventListener("click", moveMaxLeft);
    }
    numberPage -= 1;
    actualNumberPage.innerHTML = numberPage;
    getActivePets();
    if (numberPage === quantityPages - 1) {
      btnRight.addEventListener("click", moveRight);
      btnRight.classList.remove("disabled");
      btnMaxRight.addEventListener("click", moveMaxRight);
      btnMaxRight.classList.remove("disabled");
    }
  };

  const moveMaxLeft = () => {
    if (numberPage === quantityPages) {
      btnRight.addEventListener("click", moveRight);
      btnRight.classList.remove("disabled");
      btnMaxRight.addEventListener("click", moveMaxRight);
      btnMaxRight.classList.remove("disabled");
    }
    numberPage = 1;
    actualNumberPage.innerHTML = numberPage;
    getActivePets();
    btnLeft.classList.add("disabled");
    btnMaxLeft.classList.add("disabled");
    btnLeft.removeEventListener("click", moveLeft);
    btnMaxLeft.removeEventListener("click", moveMaxLeft);
  };
  
  const moveRight = () => {
    if (actualNumberPage.innerHTML === "1") {
      btnLeft.classList.remove("disabled");
      btnMaxLeft.classList.remove("disabled");
      btnLeft.addEventListener("click", moveLeft);
      btnMaxLeft.addEventListener("click", moveMaxLeft);
    }
    numberPage += 1;
    actualNumberPage.innerHTML = numberPage;
    getActivePets();
    if (numberPage === quantityPages) {
      btnRight.removeEventListener("click", moveRight);
      btnRight.classList.add("disabled");
      btnMaxRight.removeEventListener("click", moveRight);
      btnMaxRight.classList.add("disabled");
    }
  };

  const moveMaxRight = () => {
    if (actualNumberPage.innerHTML === "1") {
      btnLeft.classList.remove("disabled");
      btnMaxLeft.classList.remove("disabled");
      btnLeft.addEventListener("click", moveLeft);
      btnMaxLeft.addEventListener("click", moveMaxLeft);
    }
    numberPage = quantityPages;
    actualNumberPage.innerHTML = numberPage;
    getActivePets();
    btnRight.removeEventListener("click", moveRight);
    btnRight.classList.add("disabled");
    btnMaxRight.removeEventListener("click", moveRight);
    btnMaxRight.classList.add("disabled");
  };
  

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
  }

  const howManyCardsOnePage = () => document.documentElement.clientWidth > 1279 ? 8 : (document.documentElement.clientWidth > 767 ? 6 : 3);
  
  const createCardsBase = () => {
    for (let i = 0; i < quantityAllCards/quantityExclusiveCards; i++) {
      for (let j = 0; j < quantityExclusiveCards; j++) {
        arrNumbersCards.push(j);
      }
    }
    arrNumbersCards.sort(() => Math.random() - 0.5);
    for (let i = 0; i < quantityPages; i++) {
      cardsBase.push([]);
    }
    arrNumbersCards.forEach((item) => {
      for (let i = 0; i < quantityPages; i++) {
        if (!cardsBase[i].includes(item)) {
          cardsBase[i].push(item);
          i = quantityPages;
        }
      }
      cardsBase.sort((a, b) => a.length - b.length);
    })
    while (cardsBase[cardsBase.length - 1].length - cardsBase[0].length > 0) {
      for (let i = 0; i < cardsBase[cardsBase.length - 1].length; i++) {
        if (!cardsBase[0].includes(cardsBase[cardsBase.length - 1][i])) {
          cardsBase[0].push(cardsBase[cardsBase.length - 1][i]);
          cardsBase[cardsBase.length - 1][i] = 999999999;
          cardsBase[cardsBase.length - 1].sort((a,b) => a - b).pop();
          break;
        }
      }
    }
  }

  
  let quantityCardsOnePage = howManyCardsOnePage();
  let quantityPages = quantityAllCards/quantityCardsOnePage;
  createCardsBase();

  btnLeft.addEventListener("click", moveLeft);
  btnMaxLeft.addEventListener("click", moveMaxLeft);
  btnRight.addEventListener("click", moveRight);
  btnMaxRight.addEventListener("click", moveMaxRight);

  async function getActivePets() { 
    const res = await fetch('../../assets/json-files/pets-information.json');
    const data = await res.json();
    const activeCards = itemActive.querySelectorAll(".card");
    for (let i = 0; i < quantityCardsOnePage; i++) {
      activeCards[i].querySelector(".card-image .img-pet").src = data[cardsBase[numberPage-1][i]].img;
      activeCards[i].querySelector(".card-name").innerHTML = data[cardsBase[numberPage-1][i]].name;
    }
  }
 
   getActivePets();