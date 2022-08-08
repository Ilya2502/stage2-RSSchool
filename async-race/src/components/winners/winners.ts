import WinnersService from '../../services/winners-service/winners-service';
import WinnerCar from '../winner-car/winner-car';
import { Selector } from '../../types/types';
import { IWinners } from './types';

class Winners implements IWinners {
    public service;
    private winnerCars: WinnerCar[];
    private totalCount: number;
    private page: number;
    readonly winnersOnPage;
    private sort: 'time' | 'wins';
    private order: 'ASC' | 'DESC';
    constructor() {
        this.totalCount = 0;
        this.winnerCars = [];
        this.page = 1;
        this.winnersOnPage = 10;
        this.service = new WinnersService();
        this.sort = 'time';
        this.order = 'ASC';
    }

    public init() {
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

    private renderWinnersPage() {
        this.renderWinnersContent();
        this.renderWinnerCars();
        this.addSortListener();
    }

    private renderWinnersContent() {
        const fragment = document.createDocumentFragment();
        const winnersContentTemp = document.querySelector(Selector.WinnersContentTemp) as HTMLTemplateElement;
        const winnersContentClone = winnersContentTemp.content.cloneNode(true) as HTMLElement;
        const page = winnersContentClone.querySelector(Selector.WinnersPage) as HTMLTitleElement;
        page.innerHTML = `${this.page}`;
        fragment.append(winnersContentClone);
        const wrapper = document.querySelector(Selector.Wrapper) as HTMLDivElement;
        wrapper.append(fragment);
    }

    public async renderWinnerCars() {
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

    public async removeWinner(id: number) {
        await this.service.deleteWinner(id);
        this.renderWinnerCars();
    }

    private checkDisabledPagination() {
        const prevButton = document.querySelector(Selector.WinnersPrev) as HTMLButtonElement;
        const nextButton = document.querySelector(Selector.WinnersNext) as HTMLButtonElement;
        prevButton.disabled = this.page === 1 ? true : false;
        nextButton.disabled = this.totalCount / this.winnersOnPage <= this.page ? true : false;
    }

    private addPaginationListener() {
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

    private addSortListener() {
        const time = document.querySelector(Selector.HeaderBestTime) as HTMLDivElement;
        time.addEventListener('click', () => {
            this.sort = 'time';
            this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
            this.renderWinnerCars();
        });
        const wins = document.querySelector(Selector.HeaderWins) as HTMLDivElement;
        wins.addEventListener('click', () => {
            this.sort = 'wins';
            this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
            this.renderWinnerCars();
        });
    }
}

export default Winners;
