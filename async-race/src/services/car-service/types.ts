export type CarBody = {
    name: string;
    color: string;
}

export interface ICarService {
    getCar(id: number): void;
}
