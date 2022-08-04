import CarService from '../../services/car-service/car-service';
import { ICar } from './types';

class Car implements ICar {
    private service;
    constructor() {
        this.service = new CarService();
    }

    init() {
        // this.service.updateCar(5, 'Moskvich', '#dddfee');
        // this.service.start(4);
        // this.service.drive(4);
        // this.service.stop(4);
    }
}

export default Car;
