import { IFetchService } from './types';
import { CarBody } from '../car-service/types'

class FetchService implements IFetchService {
    baseUrl;
    constructor() {
        this.baseUrl = 'http://127.0.0.1:3000';
    }

    async typedFetch<T>(url: string, request: string, body?: CarBody): Promise<T> {
        url = `${this.baseUrl}${url}`;
        const requestConfig = this.getRequestConfig(request, body);
        const response = await fetch(`${url}`, requestConfig);
        return response.json();
    }

    getRequestConfig(request: string, body?: CarBody) {
        let res;
        switch (request) {
            case 'GET': 
                res = {};
                break;
            case 'PATCH':
                res = { method: 'PATCH' };
                break;
            case 'POST':
                res = {
                    method: 'POST',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                break;
            case 'PUT':
                res = {
                    method: 'PUT',
                    body: JSON.stringify(body),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                };
                break;
        }
        return res;
    }
}

export default FetchService;