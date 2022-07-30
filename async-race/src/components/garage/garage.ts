import { IGarage } from './types';
import GarageService from '../../services/garage_service/garage-service';

class Garage implements IGarage {
    private service;
    // cars: Car[];   как затипизировать свойство cars чтобы после ответа от this.service.getCars() я мог в него записать массив
    countCars: number;
    constructor() {
        this.service = new GarageService();
        this.countCars = 0;
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
