import { IFetchService, requestType, CarType, PostBodyType, PutBodyType, StartStopType, DriveType } from './types';

class FetchService implements IFetchService {
    readonly baseUrl = 'http://127.0.0.1:3000';

    async typedFetch<T, B>(endPoint: string, request: requestType, body?: B): Promise<T | void> {
        try {
            const url = `${this.baseUrl}/${endPoint}`;
            const requestConfig = this.getRequestConfig(request, body);
            const response = await fetch(`${url}`, requestConfig);
            return await response.json();
        } catch (error) {
            // console.log(error);
        }
    }

    getRequestConfig<B>(request: string, body?: B) {
        switch (request) {
            case 'GET':
                return {};
            case 'DELETE':
                return { method: 'DELETE' };
            case 'PATCH':
                return { method: 'PATCH' };
            case 'POST':
                return {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
            case 'PUT':
                return {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
            default:
                return {};
        }
    }

    async getData(id: number) {
        const endPoint = `garage/${id}`;
        return await this.typedFetch<CarType, never>(endPoint, 'GET');
    }

    async getFullData(page: number, limit: number) {
        const endpoint = `garage?_page=${page}&_limit=${limit}`;
        const responseCars = await fetch(`${this.baseUrl}/${endpoint}`);
        const cars: CarType[] = await responseCars.json();
        const totalCount = responseCars.headers.get('X-Total-Count');
        return {
            cars,
            totalCount,
        };
    }

    async postData(name: string, color: string) {
        const endPoint = 'garage';
        const body = { name, color };
        return await this.typedFetch<CarType, PostBodyType>(endPoint, 'POST', body);
    }

    async putData(id: number, name: string, color: string) {
        const endPoint = `garage/${id}`;
        const body = { name, color };
        return await this.typedFetch<CarType, PutBodyType>(endPoint, 'PUT', body);
    }

    async patchData(id: number, status: string) {
        const endPoint = `engine?id=${id}&status=${status}`;
        return await this.typedFetch<StartStopType | DriveType, never>(endPoint, 'PATCH');
    }

    async deleteData(id: number) {
        const endPoint = `garage/${id}`;
        return await this.typedFetch<never, never>(endPoint, 'DELETE');
    }
}

export default FetchService;
