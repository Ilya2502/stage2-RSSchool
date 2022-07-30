import CarService from '../../services/car-service/car-service';
import { ICar } from './types';

class Car implements ICar {
    private service;
    constructor() {
        this.service = new CarService();
    }
}

export default Car;
