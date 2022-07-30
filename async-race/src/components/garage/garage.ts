import GarageService from '../../services/garage-service/garage-service';
import { IGarage } from './types';
import { Car } from '../../services/car-service/types';

class Garage implements IGarage {
    private service;
    cars: Car[];
    totalCount;
    constructor() {
        this.service = new GarageService();
        this.totalCount = 0;
        this.cars = [];
    }

    async init() {
        await this.renderCars();
    }

    private async renderCars() {
        const responseCars = await this.service.getCars();
        console.log(responseCars);
        if (responseCars.totalCount) {
            this.totalCount = +responseCars.totalCount;
            this.cars = responseCars.cars;
        }
    }
}

export default Garage;
