import { ICarService } from "../../services/car-service/types";

export interface ICar {
    service: ICarService;
    name: string;
    color: string;
    id: number;
    intervalId: NodeJS.Timer;
    renderCar(): void;
    startCar(): void;
    stopCar(): void;
}
