export interface ICarService {
    start(id: number): Promise<responseStartType | void>;
    stop(id: number): Promise<responseStartType | void>;
    drive(id: number): Promise<DriveType | void>;
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

export type responseStartType = {
    totalCount: string | null;
    data: StartStopType;
}

