export interface IWinnerCar {
    name: string;
    color: string;
    id: number;
    wins: number;
    time: number;
    number: number;
    renderWinnerCar(): void;
}
