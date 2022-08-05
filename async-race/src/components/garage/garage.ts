import GarageService from '../../services/garage-service/garage-service';
import Car from '../car/car';
import { IGarage } from './types';
// import { CarType } from '../../services/car-service/types';
import { SELECTOR, carNames } from '../../constants/constants';

class Garage implements IGarage {
    private service;
    cars: Car[];
    totalCount;
    page;
    carsOnPage;
    constructor() {
        this.service = new GarageService();
        this.totalCount = 0;
        this.cars = [];
        this.page = 1;
        this.carsOnPage = 7;
    }

    async init() {
        // await this.renderCars();
        // this.service.getCar(5);
        // this.service.createCar('Zhiga', '#ffffff');
        await this.renderPage();
        // await this.generateCars();
    }

    private async getCars() {
        const responseCars = await this.service.getCars(this.page, this.carsOnPage);
        if (responseCars?.data.length) {
            this.cars = [];
            responseCars.data.forEach((item) => {
                this.cars.push(new Car(item));
            });
        }
        if (responseCars?.totalCount) {
            this.totalCount = +responseCars.totalCount;
        }
    }

    async renderPage() {
        await this.getCars();
        const wrapper = document.createElement('div');
        wrapper.id = SELECTOR.WRAPPER.slice(1);
        const body = document.querySelector(SELECTOR.BODY) as HTMLBodyElement;
        body.append(wrapper);
        this.renderNavigation();
        this.renderGarageMenu();
        this.renderGarageContent();
        this.addNavigationListener();
        this.addCreateListener();
        this.renderCars();
    }

    renderNavigation() {
        const fragment = document.createDocumentFragment();
        const navigationTemp = document.querySelector(SELECTOR.NAVIGATION_TEMP) as HTMLTemplateElement;
        const navigationClone = navigationTemp.content.cloneNode(true) as HTMLElement;
        fragment.append(navigationClone);
        const wrapper = document.querySelector(SELECTOR.WRAPPER) as HTMLDivElement;
        wrapper.append(fragment);
    }

    addNavigationListener() {
        const toGarage = document.querySelector(SELECTOR.TO_GARAGE) as HTMLButtonElement;
        const toWinners = document.querySelector(SELECTOR.TO_WINNERS) as HTMLButtonElement;
        const garageMenu = document.querySelector(SELECTOR.GARAGE_MENU) as HTMLDivElement;
        const garageContent = document.querySelector(SELECTOR.GARAGE_CONTENT) as HTMLDivElement;
        toGarage.addEventListener('click', () => {
            garageMenu.classList.remove('hidden-page');
            garageContent.classList.remove('hidden-page');
        });
        toWinners.addEventListener('click', () => {
            garageMenu.classList.add('hidden-page');
            garageContent.classList.add('hidden-page');
        });
    }

    addCreateListener() {
        const createButton = document.querySelector(SELECTOR.CREATE_BUTTON) as HTMLButtonElement;
        createButton.addEventListener('click', async () => {
            const createName = document.querySelector(SELECTOR.CREATE_NAME) as HTMLInputElement;
            const name = createName.value;
            const createColor = document.querySelector(SELECTOR.CREATE_COLOR) as HTMLInputElement;
            const color = createColor.value;
            this.service.createCar(name, color);
            await this.getCars();
            this.renderCars();
        });
    }

    renderGarageMenu() {
        const fragment = document.createDocumentFragment();
        const garageMenuTemp = document.querySelector(SELECTOR.GARAGE_MENU_TEMP) as HTMLTemplateElement;
        const garageMenuClone = garageMenuTemp.content.cloneNode(true) as HTMLElement;
        const createName = garageMenuClone.querySelector(SELECTOR.MODELS_LIST);
        for (const key in carNames) {
            carNames[key].forEach((item) => {
                const option = document.createElement('option');
                option.value = `${key} ${item}`;
                createName?.append(option);
            });
        }
        fragment.append(garageMenuClone);
        const wrapper = document.querySelector(SELECTOR.WRAPPER) as HTMLDivElement;
        wrapper.append(fragment);
    }

    renderGarageContent() {
        const fragment = document.createDocumentFragment();
        const garageContentTemp = document.querySelector(SELECTOR.GARAGE_CONTENT_TEMP) as HTMLTemplateElement;
        const garageContentClone = garageContentTemp.content.cloneNode(true) as HTMLElement;
        const page = garageContentClone.querySelector(SELECTOR.PAGE) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(garageContentClone);
        const wrapper = document.querySelector(SELECTOR.WRAPPER) as HTMLDivElement;
        wrapper.append(fragment);
    }

    renderCars() {
        const totalCount = document.querySelector(SELECTOR.TOTAL_COUNT) as HTMLTitleElement;
        totalCount.innerHTML = `${this.totalCount}`;
        const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
        carsContainer.innerHTML = '';
        this.cars.forEach((item) => {
            item.renderCar();
        });
    }

    async generateCars() {
        const carProducers = Object.keys(carNames);
        for (let i = 0; i < 100; i += 1) {
            const randomName = this.generateName(carProducers);
            const randomColor = this.generateColor();
            await this.service.createCar(randomName, randomColor);
        }
        const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
        carsContainer.innerHTML = '';
        await this.getCars();
        this.renderCars();
    }

    getRandomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateName(carProducers: string[]) {
        const carProducerRandom = carProducers[this.getRandomInteger(1, +carProducers.length) - 1];
        const models = carNames[carProducerRandom];
        const modelRandom = models[this.getRandomInteger(1, +models.length) - 1];
        return `${carProducerRandom} ${modelRandom}`;
    }

    generateColor() {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
}

export default Garage;
