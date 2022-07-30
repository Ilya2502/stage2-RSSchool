export type Car = {
    name: string;
    color: string;
    id: number;
}

export type Cars = {
    cars: Car[];
    count: number;
}

export interface IGarageService {
    // getCars(page: number, limit: number): ResponseCars;
}