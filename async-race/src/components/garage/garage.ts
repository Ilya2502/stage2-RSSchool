import { IGarage } from './types';
import GarageService from '../../services/garage_service/garage-service';
import { Car } from '../../services/car_service/types';

class Garage implements IGarage {
    private service;
    cars: Car[] | [];
    countCars: number;
    constructor() {
        this.service = new GarageService();
        this.countCars = 0;
        this.cars = [];
    }

    async init() {
        await this.renderCars();
    }

    private async renderCars() {
        const responseCars = await this.service.getCars();
        if (responseCars.count) {
            this.countCars = +responseCars.count;
        }
    }
}

export default Garage;
