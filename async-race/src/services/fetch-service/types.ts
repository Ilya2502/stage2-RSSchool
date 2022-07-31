export interface IFetchService {
    baseUrl: string;
}

export type requestType = 'GET' | 'DELETE' | 'PATCH' | 'POST' | 'PUT';

export type CarType = {
    name: string;
    color: string;
    id: number;
}

export type PutBodyType = {
    name: string;
    color: string;
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

export type ResponseCars = {
    cars: CarType | CarType[];
    totalCount: string | null;
}
