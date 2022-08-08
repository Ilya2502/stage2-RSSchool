import WinnersService from '../../services/winners-service/winners-service';
import WinnerCar from '../winner-car/winner-car';
import { Selector } from '../../types/types';
import { IWinners } from './types';
// import { IWinnerCar } from '../winner-car/types';

class Winners implements IWinners {
    service;
    winnerCars: WinnerCar[];
    totalCount;
    page;
    winnersOnPage;
    sort;
    order;
    constructor() {
        this.totalCount = 0;
        this.winnerCars = [];
        this.page = 1;
        this.winnersOnPage = 10;
        this.service = new WinnersService();
        this.sort = 'time';
        this.order = 'ASC';
    }

    init() {
        this.renderWinnersPage();
        this.addPaginationListener();
    }

    private async getWinnerCars() {
        const responseWinners = await this.service.getWinners(this.page, this.winnersOnPage, this.sort, this.order);
        if (responseWinners?.data) {
            this.winnerCars = [];
            for (let i = 0; i < responseWinners.data.length; i += 1) {
                const car = await this.service.getCar(responseWinners.data[i].id);
                if (car) {
                    this.winnerCars.push(new WinnerCar(responseWinners.data[i], car, i));
                }
            }
        }
        if (responseWinners?.totalCount) {
            this.totalCount = +responseWinners.totalCount;
        }
    }

    renderWinnersPage() {
        this.renderWinnersContent();
        this.renderWinnerCars();
        this.addSortListener();
    }

    renderWinnersContent() {
        const fragment = document.createDocumentFragment();
        const winnersContentTemp = document.querySelector(Selector.WinnersContentTemp) as HTMLTemplateElement;
        const winnersContentClone = winnersContentTemp.content.cloneNode(true) as HTMLElement;
        const page = winnersContentClone.querySelector(Selector.WinnersPage) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(winnersContentClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    async renderWinnerCars() {
        await this.getWinnerCars();
        const totalCount = document.querySelector(Selector.WinnersCount) as HTMLTitleElement;
        totalCount.innerHTML = `${this.totalCount}`;
        const winnerCarsContainer = document.querySelector(Selector.WinnerCarsContainer) as HTMLDivElement;
        winnerCarsContainer.innerHTML = '';
        this.winnerCars.forEach((item) => {
            item.renderWinnerCar();
        });
        this.checkDisabledPagination();
    }

    async removeWinner(id: number) {
        await this.service.deleteWinner(id);
        this.renderWinnerCars();
    }

    checkDisabledPagination() {
        const prevButton = document.querySelector(Selector.WinnersPrev) as HTMLButtonElement;
        const nextButton = document.querySelector(Selector.WinnersNext) as HTMLButtonElement;
        prevButton.disabled = this.page === 1 ? true : false;
        nextButton.disabled = this.totalCount / this.winnersOnPage <= this.page ? true : false;
    }

    addPaginationListener() {
        const paginationButtons = document.querySelectorAll(
            `${Selector.WinnersPrev}, ${Selector.WinnersNext}`
        ) as NodeListOf<HTMLDivElement>;
        const page = document.querySelector(Selector.WinnersPage) as HTMLTitleElement;
        paginationButtons.forEach((item) => {
            item.addEventListener('click', async (event) => {
                (event.target as HTMLButtonElement).id === 'winners-prev' ? (this.page -= 1) : (this.page += 1);
                page.innerHTML = `${this.page}`;
                const winnerCarsContainer = document.querySelector(Selector.WinnerCarsContainer) as HTMLDivElement;
                winnerCarsContainer.innerHTML = '';
                this.renderWinnerCars();
            });
        });
    }

    addSortListener() {
        const time = document.querySelector(Selector.HeaderBestTime) as HTMLDivElement;
        time.addEventListener('click', () => {
            this.sort = 'time';
            this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
            console.log(this.sort, this.order);
            this.renderWinnerCars();
        });
        const wins = document.querySelector(Selector.HeaderWins) as HTMLDivElement;
        wins.addEventListener('click', () => {
            this.sort = 'wins';
            this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
            this.renderWinnerCars();
        });
    }

    // async generateCars() {
    //     const carProducers = Object.keys(carNames);
    //     for (let i = 0; i < 100; i += 1) {
    //         const randomName = this.generateName(carProducers);
    //         const randomColor = this.generateColor();
    //         await this.service.createCar(randomName, randomColor);
    //     }
    //     const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
    //     carsContainer.innerHTML = '';
    //     await this.getCars();
    //     this.renderCars();
    // }

    // getRandomInteger(min: number, max: number) {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    // }

    // generateName(carProducers: string[]) {
    //     const carProducerRandom = carProducers[this.getRandomInteger(1, +carProducers.length) - 1];
    //     const models = carNames[carProducerRandom];
    //     const modelRandom = models[this.getRandomInteger(1, +models.length) - 1];
    //     return `${carProducerRandom} ${modelRandom}`;
    // }

    // generateColor() {
    //     const letters = '0123456789ABCDEF';
    //     let color = '#';
    //     for (let i = 0; i < 6; i += 1) {
    //         color += letters[Math.floor(Math.random() * 16)];
    //     }
    //     return color;
    // }

    // addCarListener() {
    //     const carContainers = document.querySelectorAll(SELECTOR.CAR_CONTENT) as NodeListOf<HTMLDivElement>;
    //     carContainers.forEach((item) => {
    //         item.addEventListener('click', (event) => {
    //             const button = event.target as HTMLButtonElement;
    //             const currentCar = event.currentTarget as HTMLDivElement;
    //             if (this.checkContainsSelector(button, 'select')) {
    //                 this.selectCar(currentCar);
    //             } else if (this.checkContainsSelector(button, 'remove')) {
    //                 this.removeCar(currentCar);
    //             }
    //         });
    //     });
    // }

    // checkContainsSelector(element: HTMLElement, selector: string) {
    //     return element.classList.contains(selector);
    // }

    // selectCar(currentCar: HTMLDivElement) {
    //     this.idCurrentCar = +currentCar.id.slice(3);
    //     const updateName = document.querySelector(SELECTOR.UPDATE_NAME) as HTMLInputElement;
    //     const updateColor = document.querySelector(SELECTOR.UPDATE_COLOR) as HTMLInputElement;
    //     const updateButton = document.querySelector(SELECTOR.UPDATE_BUTTON) as HTMLButtonElement;
    //     this.removeDisabled(updateName, updateColor, updateButton);
    // }

    // async removeCar(currentCar: HTMLDivElement) {
    //     this.idCurrentCar = +currentCar.id.slice(3);
    //     await this.service.deleteCar(this.idCurrentCar);
    //     const carsContainer = document.querySelector(SELECTOR.CARS_CONTAINER) as HTMLDivElement;
    //     carsContainer.innerHTML = '';
    //     await this.getCars();
    //     this.renderCars();
    // }

    // removeDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
    //     elements.forEach((item) => {
    //         item.disabled = false;
    //     });
    // }

    // addDisabled(...elements: (HTMLInputElement | HTMLButtonElement)[]) {
    //     elements.forEach((item) => {
    //         item.disabled = true;
    //     });
    // }

    // addUpdateListener() {
    //     const updateButton = document.querySelector(SELECTOR.UPDATE_BUTTON) as HTMLButtonElement;
    //     updateButton.addEventListener('click', async () => {
    //         const updateName = document.querySelector(SELECTOR.UPDATE_NAME) as HTMLInputElement;
    //         const name = updateName.value;
    //         const updateColor = document.querySelector(SELECTOR.UPDATE_COLOR) as HTMLInputElement;
    //         const color = updateColor.value;
    //         await this.service.updateCar(this.idCurrentCar, name, color);
    //         updateName.value = '';
    //         const updateButton = document.querySelector(SELECTOR.UPDATE_BUTTON) as HTMLButtonElement;
    //         this.addDisabled(updateName, updateColor, updateButton);
    //         await this.getCars();
    //         this.renderCars();
    //     });
    // }
}

export default Winners;
