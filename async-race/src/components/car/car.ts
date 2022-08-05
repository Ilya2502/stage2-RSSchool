import CarService from '../../services/car-service/car-service';
import { ICar } from './types';
// import { SELECTOR } from '../../constants/constants';
// import { CarType } from '../../services/car-service/types';

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

    // addCar(car: CarType) {
    //     const fragment = document.createDocumentFragment();
    //     const carContentTemp = document.querySelector(SELECTOR.CAR_CONTENT_TEMP) as HTMLTemplateElement;
    //     const carContentClone = carContentTemp.content.cloneNode(true) as HTMLElement;
    //     const carContent = carContentClone.querySelector('.car-content') as HTMLDivElement;
    //     carContent.id = `car${car.id}`;
    //     const carName = carContentClone.querySelector('.car-name') as HTMLTitleElement;
    //     carName.innerHTML = car.name;
    //     const carImage = carContentClone.querySelector('.icon-use') as HTMLElement;
    //     carImage.style.fill = car.color;
    //     fragment.append(carContentClone);
    //     return fragment;
    // }
}

export default Car;
