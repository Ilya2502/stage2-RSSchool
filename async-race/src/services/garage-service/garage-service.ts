import FetchService from '../fetch-service/fetch-service';
import { IGarageService } from './types';
import { CarType, PostBodyType } from '../car-service/types';

class GarageService extends FetchService implements IGarageService {
    public async getCar(id: number) {
        const endPoint = `garage/${id}`;
        const data = await this.getData<CarType>(endPoint);
        if (data) {
            return data.data;
        }
    }

    public async createCar(name: string, color: string) {
        const endPoint = 'garage';
        const body = { name, color };
        await this.postData<CarType, PostBodyType>(endPoint, body);
    }

    public async updateCar(id: number, name: string, color: string) {
        const endPoint = `garage/${id}`;
        const body = { name, color };
        await this.putData<CarType, PostBodyType>(endPoint, body);
    }

    public async getCars(page = 1, limit = 7) {
        const endPoint = `garage?_page=${page}&_limit=${limit}`;
        return this.getData<CarType[]>(endPoint);
    }

    public async deleteCar(id: number) {
        const endPoint = `garage/${id}`;
        await this.deleteData(endPoint);
    }
}

export default GarageService;
