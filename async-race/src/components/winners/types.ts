// import { CarType } from '../../services/car-service/types';

export type WinnerType = {
    // name: string;
    // color: string;
    id: number;
    wins: number;
    time: number;
}

export interface IWinners {
    winnerCars: WinnerType[],
    totalCount: number,
    init(): void,
}