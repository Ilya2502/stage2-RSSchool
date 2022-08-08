import { IFetchService, RequestType } from './types';

class FetchService implements IFetchService {
    readonly baseUrl = 'http://127.0.0.1:3000';
    totalCount = 0;

    private async typedFetch<T, B>(
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
            console.log('engine crush');
        }
    }

    private getRequestConfig<B>(requestType: RequestType, body?: B) {
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

    protected async getData<T>(endPoint: string) {
        return await this.typedFetch<T, never>(endPoint, 'GET');
    }

    protected async postData<R, B>(endPoint: string, body: B) {
        return await this.typedFetch<R, B>(endPoint, 'POST', body);
    }

    protected async putData<R, B>(endPoint: string, body: B) {
        return await this.typedFetch<R, B>(endPoint, 'PUT', body);
    }

    protected async patchData<T>(endPoint: string) {
        return await this.typedFetch<T, never>(endPoint, 'PATCH');
    }

    protected async deleteData(endPoint: string) {
        return await this.typedFetch<never, never>(endPoint, 'DELETE');
    }
}

export default FetchService;
