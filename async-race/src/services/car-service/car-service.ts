import FetchService from '../fetch-service/fetch-service';
import { ICarService } from './types';

class CarService extends FetchService implements ICarService {
    async getCar(id: number) {
        const data = await this.getData(id);
        console.log(data);
    }

    async createCar(name: string, color: string) {
        const data = await this.postData(name, color);
        console.log(data);
    }

    async updateCar(id: number, name: string, color: string) {
        const data = await this.putData(id, name, color);
        console.log(data);
    }

    async start(id: number) {
        const status = 'started';
        const data = await this.patchData(id, status);
        console.log(data);
    }

    async stop(id: number) {
        const status = 'stopped';
        const data = await this.patchData(id, status);
        console.log(data);
    }

    async drive(id: number) {
        const status = 'drive';
        const data = await this.patchData(id, status);
        console.log(data);
    }
}

export default CarService;
