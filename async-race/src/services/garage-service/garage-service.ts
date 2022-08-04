import FetchService from '../fetch-service/fetch-service';
import { IGarageService } from './types';
import { CarType, PostBodyType } from '../car-service/types';

class GarageService extends FetchService implements IGarageService {
    async getCar(id: number) {
        const endPoint = `garage/${id}`;
        const data = await this.getData<CarType>(endPoint);
        console.log(data);
    }

    async createCar(name: string, color: string) {
        const endPoint = 'garage';
        const body = { name, color };
        const data = await this.postData<CarType, PostBodyType>(endPoint, body);
        console.log(data);
    }

    async getCars(page = 1, limit = 3) {
        const endPoint = `garage?_page=${page}&_limit=${limit}`;
        return this.getData<CarType[]>(endPoint);
    }

    async deleteCar(id: number) {
        const endPoint = `garage/${id}`;
        const data = await this.deleteData(endPoint);
        console.log(data);
    }
}

export default GarageService;
