import { IWinnerCar } from './types';
import { WinnerType } from '../winners/types';
import { Selector } from '../../types/types';
import { CarType } from '../../services/car-service/types';

class WinnerCar implements IWinnerCar {
    name;
    color;
    id;
    wins;
    time;
    number;
    constructor(winnerCar: WinnerType, car: CarType, number: number) {
        this.name = car.name;
        this.color = car.color;
        this.id = car.id;
        this.wins = winnerCar.wins;
        this.time = winnerCar.time;
        this.number = number;
    }

    renderWinnerCar() {
        const fragment = document.createDocumentFragment();
        const winnerCarContentTemp = document.querySelector(Selector.WinnerCarContentTemp) as HTMLTemplateElement;
        const winnerCarContentClone = winnerCarContentTemp.content.cloneNode(true) as HTMLElement;
        const winnerNumber = winnerCarContentClone.querySelector(Selector.WinnerNumber) as HTMLDivElement;
        winnerNumber.innerHTML = `${this.number + 1}`;
        const carImage = winnerCarContentClone.querySelector(Selector.IconUse) as HTMLElement;
        carImage.style.fill = this.color;
        const winnerName = winnerCarContentClone.querySelector(Selector.WinnerName) as HTMLDivElement;
        winnerName.innerHTML = `${this.name}`;
        const winnerWins = winnerCarContentClone.querySelector(Selector.WinnerWins) as HTMLDivElement;
        winnerWins.innerHTML = `${this.wins}`;
        const WinnerTime = winnerCarContentClone.querySelector(Selector.WinnerTime) as HTMLDivElement;
        WinnerTime.innerHTML = `${this.time}`;
        fragment.append(winnerCarContentClone);
        const tableWinners = document.querySelector(Selector.WinnerCarsContainer) as HTMLDivElement;
        tableWinners.append(fragment);
    }
}

export default WinnerCar;
