import { CarType } from "../car-service/types";

export interface IGarageService {
    getCar(id: number): Promise<CarType | void>;
    createCar(name: string, color: string): Promise<void | { totalCount: string | null; data: CarType; }>;
    updateCar(id: number, name: string, color: string): Promise<void | {totalCount: string | null; data: CarType; }>;
    getCars(page: number, limit: number): Promise<void | {totalCount: string | null; data: CarType[]; }>;
    deleteCar(id: number): void;
}

