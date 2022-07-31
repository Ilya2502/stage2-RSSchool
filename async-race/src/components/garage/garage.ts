import GarageService from '../../services/garage-service/garage-service';
import { IGarage } from './types';
import { CarType } from '../../services/fetch-service/types';

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
        // this.service.deleteCar(10);
        // await this.service.getData();
    }

    private async renderCars() {
        const responseCars = await this.service.getCars();
        console.log(responseCars);
        // if (Array.isArray(responseCars)) {
        //     this.cars = responseCars;
        // }
        if (responseCars.totalCount) {
            this.totalCount = +responseCars.totalCount;
            this.cars = responseCars.cars;
        }
    }
}

export default Garage;
