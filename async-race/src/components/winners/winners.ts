import WinnersService from '../../services/winners-service/winners-service';
// import Car from '../car/car';
import { Selector } from '../../types/types';
import { IWinners, WinnerType } from './types';

class Winners implements IWinners {
    service;
    winnersCars: WinnerType[];
    totalCount;
    page;
    winnersOnPage;
    constructor() {
        this.totalCount = 0;
        this.winnersCars = [];
        this.page = 1;
        this.winnersOnPage = 10;
        this.service = new WinnersService();
    }

    init() {
        this.renderWinnersContent();
        // this.renderWinnersContainer();
        this.addAllListeners();
        // this.service.updateWinner(8, 1, 8);
        // this.service.getWinner(8);
        // this.service.deleteWinner(1);
        // this.service.getWinners();
    }

    renderWinnersContent() {
        const fragment = document.createDocumentFragment();
        const winnersContentTemp = document.querySelector(Selector.WinnersContentTemp) as HTMLTemplateElement;
        const winnersContentClone = winnersContentTemp.content.cloneNode(true) as HTMLElement;
        const page = winnersContentClone.querySelector(Selector.WinnersPage) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(winnersContentClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    addAllListeners() {
        console.log('hi');
    }

    // renderNavigation() {
    //     const fragment = document.createDocumentFragment();
    //     const navigationTemp = document.querySelector(SELECTOR.NAVIGATION_TEMP) as HTMLTemplateElement;
    //     const navigationClone = navigationTemp.content.cloneNode(true) as HTMLElement;
    //     fragment.append(navigationClone);
    //     const wrapper = document.querySelector(SELECTOR.WRAPPER) as HTMLDivElement;
    //     wrapper.append(fragment);
    // }

    // renderGarageMenu() {
    //     const fragment = document.createDocumentFragment();
    //     const garageMenuTemp = document.querySelector(SELECTOR.GARAGE_MENU_TEMP) as HTMLTemplateElement;
    //     const garageMenuClone = garageMenuTemp.content.cloneNode(true) as HTMLElement;
    //     const createName = garageMenuClone.querySelector(SELECTOR.MODELS_LIST);
    //     for (const key in carNames) {
    //         carNames[key].forEach((item) => {
    //             const option = document.createElement('option');
    //             option.value = `${key} ${item}`;
    //             createName?.append(option);
    //         });
    //     }
    //     fragment.append(garageMenuClone);
    //     const wrapper = document.querySelector(SELECTOR.WRAPPER) as HTMLDivElement;
    //     wrapper.append(fragment);
    // }

    // renderGarageContent() {
    //     const fragment = document.createDocumentFragment();
    //     const garageContentTemp = document.querySelector(SELECTOR.GARAGE_CONTENT_TEMP) as HTMLTemplateElement;
    //     const garageContentClone = garageContentTemp.content.cloneNode(true) as HTMLElement;
    //     const page = garageContentClone.querySelector(SELECTOR.GARAGE_PAGE) as HTMLTitleElement;
    //     page.innerHTML = `${this.page}`;
    //     fragment.append(garageContentClone);
    //     const wrapper = document.querySelector(SELECTOR.WRAPPER) as HTMLDivElement;
    //     wrapper.append(fragment);
    // }

    // renderCars() {
    //     const totalCount = document.querySelector(SELECTOR.TOTAL_COUNT) as HTMLTitleElement;
    //     totalCount.innerHTML = `${this.totalCount}`;
    //     const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
    //     carsContainer.innerHTML = '';
    //     this.cars.forEach((item) => {
    //         item.renderCar();
    //     });
    //     console.log(this.cars);
    //     this.checkDisabledPagination();
    //     this.addCarListener();
    // }

    // checkDisabledPagination() {
    //     const prevButton = document.querySelector(SELECTOR.PREV_BUTTON_GARAGE) as HTMLButtonElement;
    //     const nextButton = document.querySelector(SELECTOR.NEXT_BUTTON_GARAGE) as HTMLButtonElement;
    //     prevButton.disabled = this.page === 1 ? true : false;
    //     nextButton.disabled = this.totalCount / this.carsOnPage <= this.page ? true : false;
    // }

    // addAllListeners() {
    //     this.addNavigationListener();
    //     this.addCreateListener();
    //     this.addUpdateListener();
    //     this.addGenerateCarsListener();
    //     this.addPaginationListener();
    // }

    // addNavigationListener() {
    //     const toGarage = document.querySelector(SELECTOR.TO_GARAGE) as HTMLButtonElement;
    //     const toWinners = document.querySelector(SELECTOR.TO_WINNERS) as HTMLButtonElement;
    //     const garageMenu = document.querySelector(SELECTOR.GARAGE_MENU) as HTMLDivElement;
    //     const garageContent = document.querySelector(SELECTOR.GARAGE_CONTENT) as HTMLDivElement;
    //     toGarage.addEventListener('click', () => {
    //         garageMenu.classList.remove('hidden-page');
    //         garageContent.classList.remove('hidden-page');
    //     });
    //     toWinners.addEventListener('click', () => {
    //         garageMenu.classList.add('hidden-page');
    //         garageContent.classList.add('hidden-page');
    //     });
    // }

    // addCreateListener() {
    //     const createButton = document.querySelector(SELECTOR.CREATE_BUTTON) as HTMLButtonElement;
    //     createButton.addEventListener('click', async () => {
    //         const createName = document.querySelector(SELECTOR.CREATE_NAME) as HTMLInputElement;
    //         const name = createName.value;
    //         const createColor = document.querySelector(SELECTOR.CREATE_COLOR) as HTMLInputElement;
    //         const color = createColor.value;
    //         this.service.createCar(name, color);
    //         createName.value = '';
    //         await this.getCars();
    //         this.renderCars();
    //     });
    // }

    // addGenerateCarsListener() {
    //     const generateCarsButton = document.querySelector(SELECTOR.GENERATE_CARS) as HTMLButtonElement;
    //     generateCarsButton.addEventListener('click', this.generateCars.bind(this));
    // }

    // addPaginationListener() {
    //     const paginationButtons = document.querySelectorAll(
    //         `${SELECTOR.PREV_BUTTON_GARAGE}, ${SELECTOR.NEXT_BUTTON_GARAGE}`
    //     ) as NodeListOf<HTMLDivElement>;
    //     const page = document.querySelector(SELECTOR.GARAGE_PAGE) as HTMLTitleElement;
    //     paginationButtons.forEach((item) => {
    //         item.addEventListener('click', async (event) => {
    //             (event.target as HTMLButtonElement).id === 'garage-prev' ? (this.page -= 1) : (this.page += 1);
    //             page.innerHTML = `${this.page}`;
    //             const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
    //             carsContainer.innerHTML = '';
    //             await this.getCars();
    //             this.renderCars();
    //         });
    //     });
    // }

    // async generateCars() {
    //     const carProducers = Object.keys(carNames);
    //     for (let i = 0; i < 100; i += 1) {
    //         const randomName = this.generateName(carProducers);
    //         const randomColor = this.generateColor();
    //         await this.service.createCar(randomName, randomColor);
    //     }
    //     const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
    //     carsContainer.innerHTML = '';
    //     await this.getCars();
    //     this.renderCars();
    // }

    // getRandomInteger(min: number, max: number) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    // generateName(carProducers: string[]) {
    //     const carProducerRandom = carProducers[this.getRandomInteger(1, +carProducers.length) - 1];
    //     const models = carNames[carProducerRandom];
    //     const modelRandom = models[this.getRandomInteger(1, +models.length) - 1];
    //     return `${carProducerRandom} ${modelRandom}`;
    // }

    // generateColor() {
    //     const letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i += 1) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    // addCarListener() {
    //     const carContainers = document.querySelectorAll(SELECTOR.CAR_CONTENT) as NodeListOf<HTMLDivElement>;
    //     carContainers.forEach((item) => {
    //         item.addEventListener('click', (event) => {
    //             const button = event.target as HTMLButtonElement;
    //             const currentCar = event.currentTarget as HTMLDivElement;
    //             if (this.checkContainsSelector(button, 'select')) {
    //                 this.selectCar(currentCar);
    //             } else if (this.checkContainsSelector(button, 'remove')) {
    //                 this.removeCar(currentCar);
    //             }
    //         });
    //     });
    // }

    // checkContainsSelector(element: HTMLElement, selector: string) {
    //     return element.classList.contains(selector);
    // }

    // selectCar(currentCar: HTMLDivElement) {
    //     this.idCurrentCar = +currentCar.id.slice(3);
    //     const updateName = document.querySelector(SELECTOR.UPDATE_NAME) as HTMLInputElement;
    //     const updateColor = document.querySelector(SELECTOR.UPDATE_COLOR) as HTMLInputElement;
    //     const updateButton = document.querySelector(SELECTOR.UPDATE_BUTTON) as HTMLButtonElement;
    //     this.removeDisabled(updateName, updateColor, updateButton);
    // }

    // async removeCar(currentCar: HTMLDivElement) {
    //     this.idCurrentCar = +currentCar.id.slice(3);
    //     await this.service.deleteCar(this.idCurrentCar);
    //     const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
    //     carsContainer.innerHTML = '';
    //     await this.getCars();
    //     this.renderCars();
    // }

    // removeDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
    //     elements.forEach((item) => {
    //         item.disabled = false;
    //     });
    // }

    // addDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
    //     elements.forEach((item) => {
    //         item.disabled = true;
    //     });
    // }

    // addUpdateListener() {
    //     const updateButton = document.querySelector(SELECTOR.UPDATE_BUTTON) as HTMLButtonElement;
    //     updateButton.addEventListener('click', async () => {
    //         const updateName = document.querySelector(SELECTOR.UPDATE_NAME) as HTMLInputElement;
    //         const name = updateName.value;
    //         const updateColor = document.querySelector(SELECTOR.UPDATE_COLOR) as HTMLInputElement;
    //         const color = updateColor.value;
    //         await this.service.updateCar(this.idCurrentCar, name, color);
    //         updateName.value = '';
    //         const updateButton = document.querySelector(SELECTOR.UPDATE_BUTTON) as HTMLButtonElement;
    //         this.addDisabled(updateName, updateColor, updateButton);
    //         await this.getCars();
    //         this.renderCars();
    //     });
    // }
}

export default Winners;
