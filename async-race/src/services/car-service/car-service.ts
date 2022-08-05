import FetchService from '../fetch-service/fetch-service';
import { ICarService, /*CarType, PostBodyType, */ StartStopType, DriveType } from './types';

class CarService extends FetchService implements ICarService {
    // async updateCar(id: number, name: string, color: string) {
    //     const endPoint = `garage/${id}`;
    //     const body = { name, color };
    //     const data = await this.putData<CarType, PostBodyType>(endPoint, body);
    //     console.log(data);
    // }

    async start(id: number) {
        const status = 'started';
        const endPoint = `engine?id=${id}&status=${status}`;
        const data = await this.patchData<StartStopType | DriveType>(endPoint);
        console.log(data);
    }

    async stop(id: number) {
        const status = 'stopped';
        const endPoint = `engine?id=${id}&status=${status}`;
        const data = await this.patchData<StartStopType | DriveType>(endPoint);
        console.log(data);
    }

    async drive(id: number) {
        const status = 'drive';
        const endPoint = `engine?id=${id}&status=${status}`;
        const data = await this.patchData<StartStopType | DriveType>(endPoint);
        console.log(data);
    }
}

export default CarService;
