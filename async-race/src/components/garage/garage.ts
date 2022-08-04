import GarageService from '../../services/garage-service/garage-service';
import { IGarage } from './types';
import { CarType } from '../../services/car-service/types';
import { SELECTOR, models } from '../../constants/constants';

class Garage implements IGarage {
    private service;
    cars: CarType[];
    totalCount;
    constructor() {
        this.service = new GarageService();
        this.totalCount = 0;
        this.cars = [];
    }

    async init() {
        // await this.renderCars();
        // this.service.getCar(5);
        // this.service.createCar('Zhiga', '#ffffff');
        this.generatePage();
    }

    private async renderCars() {
        const responseCars = await this.service.getCars();
        if (responseCars?.data.length) {
            this.cars = responseCars.data;
        }
        if (responseCars?.totalCount) {
            this.totalCount = +responseCars.totalCount;
        }
        console.log(this.cars, this.totalCount);
    }

    generatePage() {
        const body = document.querySelector(SELECTOR.BODY) as HTMLBodyElement;
        const navigation = this.addNavigation();
        body.append(navigation);
        const garageMenu = this.addGarageMenu();
        body.append(garageMenu);
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
        const createName = garageMenuClone.querySelector('#models-list');
        for (const key in models) {
            models[key].forEach((item) => {
                const option = document.createElement('option');
                option.value = `${key} ${item}`;
                createName?.append(option);
            });
        }
        fragment.append(garageMenuClone);
        return fragment;
    }
}

export default Garage;
