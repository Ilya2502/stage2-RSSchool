// import { CarType} from '../car-service/types';

export interface IFetchService {
    baseUrl: string;
    totalCount: number;
}

export type RequestType = 'GET' | 'DELETE' | 'PATCH' | 'POST' | 'PUT';

// export type CarType = {
//     name: string;
//     color: string;
//     id: number;
// }

// export type PutBodyType = {
//     name: string;
//     color: string;
// }

// export type PostBodyType = {
//     name: string;
//     color: string;
// }

// export type StartStopType = {
//     velocity: number;
//     distance: number;
// }

// export type DriveType = {
//     success: boolean;
// }

// export type ResponseCars = {
//     cars: CarType[];
//     totalCount: string;
// }

// export type GetRequestResponseType<T> = {
//     data: Promise<T | void>,
//     totalCount?: number,
// }
