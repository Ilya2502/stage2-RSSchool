import GarageService from '../../services/garage-service/garage-service';
import { IGarage } from './types';
import { CarType } from '../../services/car-service/types';

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
        await this.renderCars();
        this.service.getCar(5);
        this.service.createCar('Zhiga', '#ffffff');
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
}

export default Garage;
