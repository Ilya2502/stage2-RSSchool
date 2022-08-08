import FetchService from '../fetch-service/fetch-service';
import { ICarService, StartStopType, DriveType } from './types';

class CarService extends FetchService implements ICarService {
    public async start(id: number) {
        const status = 'started';
        const endPoint = `engine?id=${id}&status=${status}`;
        return await this.patchData<StartStopType>(endPoint);
    }

    public async stop(id: number) {
        const status = 'stopped';
        const endPoint = `engine?id=${id}&status=${status}`;
        return await this.patchData<StartStopType>(endPoint);
    }

    public async drive(id: number) {
        const status = 'drive';
        const endPoint = `engine?id=${id}&status=${status}`;
        const data = await this.patchData<DriveType>(endPoint);
        if (data) {
            return data.data;
        }
    }
}

export default CarService;
