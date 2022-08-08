export interface IFetchService {
    baseUrl: string;
    totalCount: number;
}

export type RequestType = 'GET' | 'DELETE' | 'PATCH' | 'POST' | 'PUT';

