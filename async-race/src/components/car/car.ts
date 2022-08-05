import CarService from '../../services/car-service/car-service';
import { ICar } from './types';
import { SELECTOR } from '../../constants/constants';
import { CarType } from '../../services/car-service/types';

class Car implements ICar {
    private service;
    name;
    color;
    id;
    constructor(car: CarType) {
        this.service = new CarService();
        this.name = car.name;
        this.color = car.color;
        this.id = car.id;
    }

    init() {
        // this.service.updateCar(5, 'Moskvich', '#dddfee');
        // this.service.start(4);
        // this.service.drive(4);
        // this.service.stop(4);
    }

    renderCar() {
        const fragment = document.createDocumentFragment();
        const carContentTemp = document.querySelector(SELECTOR.CAR_CONTENT_TEMP) as HTMLTemplateElement;
        const carContentClone = carContentTemp.content.cloneNode(true) as HTMLElement;
        const carContent = carContentClone.querySelector(SELECTOR.CAR_CONTENT) as HTMLDivElement;
        carContent.id = `car${this.id}`;
        const carName = carContentClone.querySelector(SELECTOR.CAR_NAME) as HTMLTitleElement;
        carName.innerHTML = this.name;
        const carImage = carContentClone.querySelector(SELECTOR.ICON_USE) as HTMLElement;
        carImage.style.fill = this.color;
        fragment.append(carContentClone);
        const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
        carsContainer.append(fragment);
    }
}

export default Car;
