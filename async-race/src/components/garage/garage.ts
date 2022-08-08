import GarageService from '../../services/garage-service/garage-service';
import Car from '../car/car';
import { IGarage, WinnerRace } from './types';
// import { CarType } from '../../services/car-service/types';
import { carNames } from '../../constants/constants';
import { Selector } from '../../types/types';
// import { IWinners } from '../winners/types';
import Winners from '../winners/winners';

class Garage implements IGarage {
    private service;
    cars: Car[];
    totalCount;
    page;
    carsOnPage;
    idCurrentCar;
    winners: Winners;
    constructor() {
        this.service = new GarageService();
        this.totalCount = 0;
        this.cars = [];
        this.page = 1;
        this.carsOnPage = 7;
        this.idCurrentCar = 0;
        this.winners = new Winners();
    }

    init() {
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

    renderPage() {
        const wrapper = document.createElement('div');
        wrapper.id = Selector.Wrapper.slice(1);
        const body = document.querySelector(Selector.Body) as HTMLBodyElement;
        body.append(wrapper);
        this.renderNavigation();
        this.renderGarageMenu();
        this.renderGarageContent();
        this.renderCars();
    }

    renderNavigation() {
        const fragment = document.createDocumentFragment();
        const navigationTemp = document.querySelector(Selector.NavigationTemp) as HTMLTemplateElement;
        const navigationClone = navigationTemp.content.cloneNode(true) as HTMLElement;
        fragment.append(navigationClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    renderGarageMenu() {
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

    renderGarageContent() {
        const fragment = document.createDocumentFragment();
        const garageContentTemp = document.querySelector(Selector.GarageContentTemp) as HTMLTemplateElement;
        const garageContentClone = garageContentTemp.content.cloneNode(true) as HTMLElement;
        const page = garageContentClone.querySelector(Selector.GaragePage) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(garageContentClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    async renderCars() {
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
    }

    checkDisabledPagination() {
        const prevButton = document.querySelector(Selector.PrevButtonGarage) as HTMLButtonElement;
        const nextButton = document.querySelector(Selector.NextButtonGarage) as HTMLButtonElement;
        prevButton.disabled = this.page === 1 ? true : false;
        nextButton.disabled = this.totalCount / this.carsOnPage <= this.page ? true : false;
    }

    addAllListeners() {
        this.addCreateListener();
        this.addUpdateListener();
        this.addGenerateCarsListener();
        this.addPaginationListener();
        this.addRaceListener();
        this.addResetListener();
        this.addWrapperListener();
    }

    addNavigationListener() {
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

    addCreateListener() {
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

    addGenerateCarsListener() {
        const generateCarsButton = document.querySelector(Selector.generateCars) as HTMLButtonElement;
        generateCarsButton.addEventListener('click', this.generateCars.bind(this));
    }

    addPaginationListener() {
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

    addRaceListener() {
        const raceButton = document.querySelector(Selector.Race) as HTMLButtonElement;
        const winnerMessage = document.querySelector(Selector.WinnerMessage) as HTMLParagraphElement;
        raceButton.addEventListener('click', () => {
            let winner: null | WinnerRace = null;
            this.addDisabled(raceButton);
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

    async writeWinner(newWinner: WinnerRace) {
        const oldWinner = await this.winners.service.getWinner(newWinner.id);
        if (!oldWinner?.time) {
            this.winners.service.createWinner(newWinner.id, 1, newWinner.time);
        } else {
            const bestTime = Math.min(newWinner.time, oldWinner.time);
            this.winners.service.updateWinner(oldWinner.id, oldWinner.wins + 1, bestTime);
        }
        this.winners.renderWinnerCars();
    }

    addResetListener() {
        const resetButton = document.querySelector(Selector.Reset) as HTMLButtonElement;
        const raceButton = document.querySelector(Selector.Race) as HTMLButtonElement;
        resetButton.addEventListener('click', () => {
            this.removeDisabled(raceButton);
            this.cars.forEach((item) => {
                item.stopCar();
            });
        });
    }

    addWrapperListener() {
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        const winnerMessage = document.querySelector(Selector.WinnerMessage) as HTMLParagraphElement;
        wrapper.addEventListener('click', () => {
            winnerMessage.classList.add('hidden-page');
        });
    }

    async generateCars() {
        const carProducers = Object.keys(carNames);
        for (let i = 0; i < 100; i += 1) {
            const randomName = this.generateName(carProducers);
            const randomColor = this.generateColor();
            await this.service.createCar(randomName, randomColor);
        }
        const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
        carsContainer.innerHTML = '';
        this.renderCars();
    }

    getRandomInteger(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    generateName(carProducers: string[]) {
        const carProducerRandom = carProducers[this.getRandomInteger(1, +carProducers.length) - 1];
        const models = carNames[carProducerRandom];
        const modelRandom = models[this.getRandomInteger(1, +models.length) - 1];
        return `${carProducerRandom} ${modelRandom}`;
    }

    generateColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    addSelectListener() {
        const selectButton = document.querySelectorAll(Selector.Select) as NodeListOf<HTMLButtonElement>;
        selectButton.forEach((item) => {
            item.addEventListener('click', () => {
                this.selectCar(item);
            });
        });
    }

    addRemoveListener() {
        const removeButton = document.querySelectorAll(Selector.Remove) as NodeListOf<HTMLButtonElement>;
        removeButton.forEach((item) => {
            item.addEventListener('click', () => {
                this.idCurrentCar = +item.id.slice(6);
                this.removeCar(this.idCurrentCar);
                this.winners.removeWinner(this.idCurrentCar);
            });
        });
    }

    checkContainsSelector(element: HTMLElement, selector: string) {
        return element.classList.contains(selector);
    }

    selectCar(currentCar: HTMLButtonElement) {
        this.idCurrentCar = +currentCar.id.slice(6);
        const updateName = document.querySelector(Selector.UpdateName) as HTMLInputElement;
        const updateColor = document.querySelector(Selector.UpdateColor) as HTMLInputElement;
        const updateButton = document.querySelector(Selector.UpdateButton) as HTMLButtonElement;
        this.removeDisabled(updateName, updateColor, updateButton);
    }

    async removeCar(idCurrentCar: number) {
        // this.idCurrentCar = +currentCar.id.slice(6);
        await this.service.deleteCar(idCurrentCar);
        const carsContainer = document.querySelector(Selector.CarsContainer) as HTMLDivElement;
        carsContainer.innerHTML = '';
        this.renderCars();
    }

    removeDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
        elements.forEach((item) => {
            item.disabled = false;
        });
    }

    addDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
        elements.forEach((item) => {
            item.disabled = true;
        });
    }

    addUpdateListener() {
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
