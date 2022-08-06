// import { CarType } from '../../services/car-service/types';

export type WinnerType = {
    name: string;
    color: string;
    id: number;
    countWins: number;
    bestTime: number;
}

export interface IWinners {
    winnersCars: WinnerType[],
    totalCount: number,
    init(): void,
}