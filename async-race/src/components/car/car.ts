import { ICar } from './types';
import CarService from '../../services/car_service/car-service';

class Car implements ICar {
    private service;
    constructor() {
        this.service = new CarService();
    }
}

export default Car;
