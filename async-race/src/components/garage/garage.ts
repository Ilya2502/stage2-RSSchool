import GarageService from '../../services/garage-service/garage-service';
import Car from '../car/car';
import Winners from '../winners/winners';
import { IGarage, WinnerRace } from './types';
import { carNames } from '../../constants/constants';
import { Selector } from '../../types/types';

class Garage implements IGarage {
    private service;
    public cars: Car[];
    private totalCount;
    private page;
    readonly carsOnPage;
    private idCurrentCar;
    private winners: Winners;
    constructor() {
        this.service = new GarageService();
        this.totalCount = 0;
        this.cars = [];
        this.page = 1;
        this.carsOnPage = 7;
        this.idCurrentCar = 0;
        this.winners = new Winners();
    }

    public init() {
        this.renderPage();
        this.addAllListeners();
    }

    private async getCars() {
        const responseCars = await this.service.getCars(this.page, this.carsOnPage);
        if (responseCars?.data) {
            this.cars = [];
            responseCars.data.forEach((item) => {
                this.cars.push(new Car(item));
            });
        }
        if (responseCars?.totalCount) {
            this.totalCount = +responseCars.totalCount;
        }
    }

    private renderPage() {
        const wrapper = document.createElement('div');
        wrapper.id = Selector.Wrapper.slice(1);
        const body = document.querySelector(Selector.Body) as HTMLBodyElement;
        body.append(wrapper);
        this.renderNavigation();
        this.renderGarageMenu();
        this.renderGarageContent();
        this.renderCars();
    }

    private renderNavigation() {
        const fragment = document.createDocumentFragment();
        const navigationTemp = document.querySelector(Selector.NavigationTemp) as HTMLTemplateElement;
        const navigationClone = navigationTemp.content.cloneNode(true) as HTMLElement;
        fragment.append(navigationClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    private renderGarageMenu() {
        const fragment = document.createDocumentFragment();
        const garageMenuTemp = document.querySelector(Selector.GarageMenuTemp) as HTMLTemplateElement;
        const garageMenuClone = garageMenuTemp.content.cloneNode(true) as HTMLElement;
        const createName = garageMenuClone.querySelector(Selector.ModelsList);
        for (const key in carNames) {
            carNames[key].forEach((item) => {
                const option = document.createElement('option');
                option.value = `${key} ${item}`;
                createName?.append(option);
            });
        }
        fragment.append(garageMenuClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    private renderGarageContent() {
        const fragment = document.createDocumentFragment();
        const garageContentTemp = document.querySelector(Selector.GarageContentTemp) as HTMLTemplateElement;
        const garageContentClone = garageContentTemp.content.cloneNode(true) as HTMLElement;
        const page = garageContentClone.querySelector(Selector.GaragePage) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(garageContentClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    private async renderCars() {
        await this.getCars();
        const totalCount = document.querySelector(Selector.TotalCount) as HTMLTitleElement;
        totalCount.innerHTML = `${this.totalCount}`;
        const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
        carsContainer.innerHTML = '';
        this.cars.forEach((item) => {
            item.renderCar();
        });
        this.checkDisabledPagination();
        this.addSelectListener();
        this.addRemoveListener();
        const resetButton = document.querySelector(Selector.Reset) as HTMLButtonElement;
        const raceButton = document.querySelector(Selector.Race) as HTMLButtonElement;
        this.removeDisabled(raceButton);
        this.addDisabled(resetButton);
    }

    private checkDisabledPagination() {
        const prevButton = document.querySelector(Selector.PrevButtonGarage) as HTMLButtonElement;
        const nextButton = document.querySelector(Selector.NextButtonGarage) as HTMLButtonElement;
        prevButton.disabled = this.page === 1 ? true : false;
        nextButton.disabled = this.totalCount / this.carsOnPage <= this.page ? true : false;
    }

    private addAllListeners() {
        this.addCreateListener();
        this.addUpdateListener();
        this.addGenerateCarsListener();
        this.addPaginationListener();
        this.addRaceListener();
        this.addResetListener();
        this.addWrapperListener();
    }

    public addNavigationListener() {
        const toGarage = document.querySelector(Selector.ToGarage) as HTMLButtonElement;
        const toWinners = document.querySelector(Selector.ToWinners) as HTMLButtonElement;
        const garageMenu = document.querySelector(Selector.GarageMenu) as HTMLDivElement;
        const garageContent = document.querySelector(Selector.GarageContent) as HTMLDivElement;
        const winnersContent = document.querySelector(Selector.WinnersContent) as HTMLDivElement;
        toGarage.addEventListener('click', () => {
            garageMenu.classList.remove('hidden-page');
            garageContent.classList.remove('hidden-page');
            winnersContent.classList.add('hidden-page');
        });
        toWinners.addEventListener('click', () => {
            garageMenu.classList.add('hidden-page');
            garageContent.classList.add('hidden-page');
            winnersContent.classList.remove('hidden-page');
        });
    }

    private addCreateListener() {
        const createButton = document.querySelector(Selector.CreateButton) as HTMLButtonElement;
        createButton.addEventListener('click', async () => {
            const createName = document.querySelector(Selector.CreateName) as HTMLInputElement;
            const name = createName.value;
            const createColor = document.querySelector(Selector.CreateColor) as HTMLInputElement;
            const color = createColor.value;
            await this.service.createCar(name, color);
            createName.value = '';
            this.renderCars();
        });
    }

    private addGenerateCarsListener() {
        const generateCarsButton = document.querySelector(Selector.generateCars) as HTMLButtonElement;
        generateCarsButton.addEventListener('click', this.generateCars.bind(this));
    }

    private addPaginationListener() {
        const paginationButtons = document.querySelectorAll(
            `${Selector.PrevButtonGarage}, ${Selector.NextButtonGarage}`
        ) as NodeListOf<HTMLDivElement>;
        const page = document.querySelector(Selector.GaragePage) as HTMLTitleElement;
        paginationButtons.forEach((item) => {
            item.addEventListener('click', async (event) => {
                (event.target as HTMLButtonElement).id === 'garage-prev' ? (this.page -= 1) : (this.page += 1);
                page.innerHTML = `${this.page}`;
                const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
                carsContainer.innerHTML = '';
                this.renderCars();
            });
        });
    }

    private addRaceListener() {
        const raceButton = document.querySelector(Selector.Race) as HTMLButtonElement;
        const winnerMessage = document.querySelector(Selector.WinnerMessage) as HTMLParagraphElement;
        raceButton.addEventListener('click', () => {
            let winner: null | WinnerRace = null;
            this.addDisabled(raceButton);
            const resetButton = document.querySelector(Selector.Reset) as HTMLButtonElement;
            this.removeDisabled(resetButton);
            this.cars.forEach(async (item) => {
                const response = await item.startCar();
                if (!winner && response) {
                    winner = response;
                    winnerMessage.innerHTML = `${response.name} went first (${response.time} s)`;
                    winnerMessage.classList.remove('hidden-page');
                    this.writeWinner(winner);
                }
            });
        });
    }

    private async writeWinner(newWinner: WinnerRace) {
        const oldWinner = await this.winners.service.getWinner(newWinner.id);
        if (!oldWinner?.time) {
            this.winners.service.createWinner(newWinner.id, 1, newWinner.time);
        } else {
            const bestTime = Math.min(newWinner.time, oldWinner.time);
            this.winners.service.updateWinner(oldWinner.id, oldWinner.wins + 1, bestTime);
        }
        this.winners.renderWinnerCars();
    }

    private addResetListener() {
        const resetButton = document.querySelector(Selector.Reset) as HTMLButtonElement;
        const raceButton = document.querySelector(Selector.Race) as HTMLButtonElement;
        resetButton.addEventListener('click', () => {
            this.removeDisabled(raceButton);
            this.addDisabled(resetButton);
            this.cars.forEach((item) => {
                item.stopCar();
            });
        });
    }

    private addWrapperListener() {
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        const winnerMessage = document.querySelector(Selector.WinnerMessage) as HTMLParagraphElement;
        wrapper.addEventListener('click', () => {
            winnerMessage.classList.add('hidden-page');
        });
    }

    private async generateCars() {
        const carProducers = Object.keys(carNames);
        const carsHundred = Array.from({ length: 100 }, () => {
            const randomName = this.generateName(carProducers);
            const randomColor = this.generateColor();
            return this.service.createCar(randomName, randomColor);
        });
        Promise.all(carsHundred).then(() => {
            const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
            carsContainer.innerHTML = '';
            this.renderCars();
        });
    }

    private getRandomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private generateName(carProducers: string[]) {
        const carProducerRandom = carProducers[this.getRandomInteger(1, +carProducers.length) - 1];
        const models = carNames[carProducerRandom];
        const modelRandom = models[this.getRandomInteger(1, +models.length) - 1];
        return `${carProducerRandom} ${modelRandom}`;
    }

    private generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    private addSelectListener() {
        const selectButton = document.querySelectorAll(Selector.Select) as NodeListOf<HTMLButtonElement>;
        selectButton.forEach((item) => {
            item.addEventListener('click', () => {
                this.selectCar(item);
            });
        });
    }

    private addRemoveListener() {
        const removeButton = document.querySelectorAll(Selector.Remove) as NodeListOf<HTMLButtonElement>;
        removeButton.forEach((item) => {
            item.addEventListener('click', () => {
                this.idCurrentCar = +item.id.slice(6);
                this.removeCar(this.idCurrentCar);
                this.winners.removeWinner(this.idCurrentCar);
            });
        });
    }

    private selectCar(currentCar: HTMLButtonElement) {
        this.idCurrentCar = +currentCar.id.slice(6);
        const updateName = document.querySelector(Selector.UpdateName) as HTMLInputElement;
        const updateColor = document.querySelector(Selector.UpdateColor) as HTMLInputElement;
        const updateButton = document.querySelector(Selector.UpdateButton) as HTMLButtonElement;
        this.removeDisabled(updateName, updateColor, updateButton);
    }

    private async removeCar(idCurrentCar: number) {
        await this.service.deleteCar(idCurrentCar);
        const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
        carsContainer.innerHTML = '';
        this.renderCars();
    }

    private removeDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
        elements.forEach((item) => {
            item.disabled = false;
        });
    }

    private addDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
        elements.forEach((item) => {
            item.disabled = true;
        });
    }

    private addUpdateListener() {
        const updateButton = document.querySelector(Selector.UpdateButton) as HTMLButtonElement;
        updateButton.addEventListener('click', async () => {
            const updateName = document.querySelector(Selector.UpdateName) as HTMLInputElement;
            const name = updateName.value;
            const updateColor = document.querySelector(Selector.UpdateColor) as HTMLInputElement;
            const color = updateColor.value;
            await this.service.updateCar(this.idCurrentCar, name, color);
            updateName.value = '';
            const updateButton = document.querySelector(Selector.UpdateButton) as HTMLButtonElement;
            this.addDisabled(updateName, updateColor, updateButton);
            this.renderCars();
        });
    }
}

export default Garage;
