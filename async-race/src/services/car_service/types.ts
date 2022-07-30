export type Car = {
    name: string;
    color: string;
    id: number;
}

// export type StartStop = {
//     velocity: string;
//     distance: string;
// }

// export type Drive = {
//     success: boolean;
// }

export type CarBody = {
    name: string;
    color: string;
}

export interface ICarService {
    getCar(id: number): void;
}
