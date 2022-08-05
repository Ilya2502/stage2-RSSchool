import GarageService from '../../services/garage-service/garage-service';
// import Car from '../car/car';
import { IGarage } from './types';
import { CarType } from '../../services/car-service/types';
import { SELECTOR, carNames } from '../../constants/constants';

class Garage implements IGarage {
    private service;
    cars: CarType[];
    totalCount;
    // car;
    page;
    carsOnPage;
    constructor() {
        this.service = new GarageService();
        this.totalCount = 0;
        this.cars = [];
        // this.car = new Car();
        this.page = 1;
        this.carsOnPage = 7;
    }

    async init() {
        // await this.renderCars();
        // this.service.getCar(5);
        // this.service.createCar('Zhiga', '#ffffff');
        await this.generatePage();
        // await this.generateCars();
    }

    private async getCars() {
        const responseCars = await this.service.getCars(this.page, this.carsOnPage);
        if (responseCars?.data.length) {
            this.cars = responseCars.data;
        }
        if (responseCars?.totalCount) {
            this.totalCount = +responseCars.totalCount;
        }
        // console.log(this.cars, this.totalCount);
    }

    async generatePage() {
        await this.getCars();
        const wrapper = document.createElement('div');
        wrapper.id = 'wrapper';
        const body = document.querySelector(SELECTOR.BODY) as HTMLBodyElement;
        body.append(wrapper);
        const navigation = this.addNavigation();
        wrapper.append(navigation);
        const garageMenu = this.addGarageMenu();
        wrapper.append(garageMenu);
        wrapper.append(this.addGarageContent());
        this.addCars();
    }

    addNavigation() {
        const fragment = document.createDocumentFragment();
        const navigationTemp = document.querySelector(SELECTOR.NAVIGATION_TEMP) as HTMLTemplateElement;
        const navigationClone = navigationTemp.content.cloneNode(true) as HTMLElement;
        fragment.append(navigationClone);
        return fragment;
    }

    addGarageMenu() {
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
        return fragment;
    }

    addGarageContent() {
        const fragment = document.createDocumentFragment();
        const garageContentTemp = document.querySelector(SELECTOR.GARAGE_CONTENT_TEMP) as HTMLTemplateElement;
        const garageContentClone = garageContentTemp.content.cloneNode(true) as HTMLElement;
        const totalCount = garageContentClone.querySelector(SELECTOR.TOTAL_COUNT) as HTMLTitleElement;
        totalCount.innerHTML = `${this.totalCount}`;
        const page = garageContentClone.querySelector(SELECTOR.PAGE) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(garageContentClone);
        return fragment;
    }

    addCars() {
        const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
        this.cars.forEach((item) => {
            carsContainer.append(this.addCar(item));
        });
    }

    addCar(car: CarType) {
        const fragment = document.createDocumentFragment();
        const carContentTemp = document.querySelector(SELECTOR.CAR_CONTENT_TEMP) as HTMLTemplateElement;
        const carContentClone = carContentTemp.content.cloneNode(true) as HTMLElement;
        const carContent = carContentClone.querySelector('.car-content') as HTMLDivElement;
        carContent.id = `car${car.id}`;
        const carName = carContentClone.querySelector('.car-name') as HTMLTitleElement;
        carName.innerHTML = car.name;
        const carImage = carContentClone.querySelector('.icon-use') as HTMLElement;
        carImage.style.fill = car.color;
        fragment.append(carContentClone);
        return fragment;
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
        this.addCars();
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
