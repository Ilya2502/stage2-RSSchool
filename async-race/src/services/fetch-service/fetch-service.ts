import { IFetchService, RequestType } from './types';

class FetchService implements IFetchService {
    readonly baseUrl = 'http://127.0.0.1:3000';
    totalCount = 0;

    async typedFetch<T, B>(
        endPoint: string,
        request: RequestType,
        body?: B
    ): Promise<{ totalCount: string | null; data: T } | void> {
        try {
            const url = `${this.baseUrl}/${endPoint}`;
            const requestConfig = this.getRequestConfig(request, body);
            const response = await fetch(`${url}`, requestConfig);
            return await response.json().then((data: T) => {
                return new Promise((resolve) => {
                    resolve({ totalCount: response.headers.get('X-Total-Count'), data });
                });
            });
        } catch (error) {
            console.log(error);
        }
    }

    getRequestConfig<B>(requestType: RequestType, body?: B) {
        const config = {
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        switch (requestType) {
            case 'DELETE':
                return { method: 'DELETE' };
            case 'PATCH':
                return { method: 'PATCH' };
            case 'POST':
                return {
                    method: 'POST',
                    ...config,
                };
            case 'PUT':
                return {
                    method: 'PUT',
                    ...config,
                };
            default:
                return {};
        }
    }

    async getData<T>(endPoint: string) {
        return await this.typedFetch<T, never>(endPoint, 'GET');
    }

    async postData<R, B>(endPoint: string, body: B) {
        return await this.typedFetch<R, B>(endPoint, 'POST', body);
    }

    async putData<R, B>(endPoint: string, body: B) {
        return await this.typedFetch<R, B>(endPoint, 'PUT', body);
    }

    async patchData<T>(endPoint: string) {
        return await this.typedFetch<T, never>(endPoint, 'PATCH');
    }

    async deleteData(endPoint: string) {
        return await this.typedFetch<never, never>(endPoint, 'DELETE');
    }
}

export default FetchService;
