import { CarType } from '../../services/car-service/types'

export interface IGarage {
    cars: CarType[],
    carsOnPage: number,
    init(): void,
    addNavigationListener(): void,
}

export type WinnerRace = {
    name: string;
    id: number;
    time: number;
}
