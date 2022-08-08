import { IWinnersService } from '../../services/winners-service/types'

export type WinnerType = {
    id: number;
    wins: number;
    time: number;
}

export interface IWinners {
    service: IWinnersService;
    winnersOnPage: number;
    init(): void;
    renderWinnerCars(): void;
    removeWinner(id: number): void;
}
