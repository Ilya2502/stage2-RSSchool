export type Car = {
    name: string;
    color: string;
    id: number;
}

export type ResponseCars = {
    cars: Car[];
    totalCount: number;
}

export interface IGarageService {
    // getCars(page: number, limit: number): ResponseCars;
}