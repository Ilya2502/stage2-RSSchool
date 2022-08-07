import CarService from '../../services/car-service/car-service';
import { ICar } from './types';
import { Selector } from '../../types/types';
import { CarType } from '../../services/car-service/types';

class Car implements ICar {
    private service;
    name;
    color;
    id;
    intervalId!: NodeJS.Timer;
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
        const carContentTemp = document.querySelector(Selector.CarContentTemp) as HTMLTemplateElement;
        const carContentClone = carContentTemp.content.cloneNode(true) as HTMLElement;
        const carContent = carContentClone.querySelector(Selector.CarContent) as HTMLDivElement;
        carContent.id = `car${this.id}`;
        const selectButton = carContentClone.querySelector(Selector.Select) as HTMLButtonElement;
        selectButton.id = `select${this.id}`;
        const removeButton = carContentClone.querySelector(Selector.Remove) as HTMLButtonElement;
        removeButton.id = `remove${this.id}`;
        const carName = carContentClone.querySelector(Selector.CarName) as HTMLTitleElement;
        carName.innerHTML = this.name;
        const iconContainer = carContentClone.querySelector(Selector.IconContainer) as HTMLDivElement;
        iconContainer.id = `icon${this.id}`;
        const carImage = carContentClone.querySelector(Selector.IconUse) as HTMLElement;
        carImage.style.fill = this.color;
        const startButton = carContentClone.querySelector(Selector.Start) as HTMLButtonElement;
        startButton.id = `start${this.id}`;
        startButton.addEventListener('click', () => {
            this.startCar();
        });
        const stopButton = carContentClone.querySelector(Selector.Stop) as HTMLButtonElement;
        stopButton.id = `stop${this.id}`;
        stopButton.addEventListener('click', () => {
            this.stopCar();
        });
        fragment.append(carContentClone);
        const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
        carsContainer.append(fragment);
    }

    async startCar() {
        const carContent = document.querySelector(`#car${this.id}`) as HTMLDivElement;
        const iconContainer = document.querySelector(`#icon${this.id}`) as HTMLDivElement;
        const distance = carContent.offsetWidth - iconContainer.offsetLeft - iconContainer.offsetWidth;
        this.startDisabled();
        const drugProperties = await this.service.start(this.id);
        if (drugProperties?.data) {
            const time = drugProperties.data.distance / drugProperties.data.velocity;
            this.animatePosition(distance, time);
            const drive = await this.service.drive(this.id);
            if (!drive) {
                clearInterval(this.intervalId);
            }
        }
    }

    async stopCar() {
        const drugProperties = await this.service.stop(this.id);
        if (drugProperties) {
            this.stopDisabled();
            clearInterval(this.intervalId);
            const carImage = document.querySelector(`#icon${this.id}`) as HTMLDivElement;
            carImage.style.transform = `translateX(0px)`;
        }
    }

    startDisabled() {
        const stopButton = document.querySelector(`#stop${this.id}`) as HTMLButtonElement;
        const startButton = document.querySelector(`#start${this.id}`) as HTMLButtonElement;
        stopButton.disabled = false;
        startButton.disabled = true;
    }

    stopDisabled() {
        const stopButton = document.querySelector(`#stop${this.id}`) as HTMLButtonElement;
        const startButton = document.querySelector(`#start${this.id}`) as HTMLButtonElement;
        stopButton.disabled = true;
        startButton.disabled = false;
    }

    async animatePosition(distance: number, time: number) {
        const carImage = document.querySelector(`#icon${this.id}`) as HTMLDivElement;
        let currentPosition = 0;
        const stepCount = (time / 1000) * 60;
        const step = (distance - currentPosition) / stepCount;
        this.intervalId = setInterval(() => {
            currentPosition += step;
            if (currentPosition > distance) {
                clearInterval(this.intervalId);
            }
            carImage.style.transform = `translateX(${currentPosition}px)`;
        }, 16);
    }
}

export default Car;
