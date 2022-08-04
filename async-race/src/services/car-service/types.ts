export interface ICarService {
    // getCar(id: number): void;
}

export type CarType = {
    name: string;
    color: string;
    id: number;
}

export type PostBodyType = {
    name: string;
    color: string;
}

export type StartStopType = {
    velocity: number;
    distance: number;
}

export type DriveType = {
    success: boolean;
}
