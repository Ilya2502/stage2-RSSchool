import FetchService from '../fetch-service/fetch-service';
import { IGarageService } from './types';

class GarageService extends FetchService implements IGarageService {
    async getCars(page = 1, limit = 7) {
        return this.getFullData(page, limit);
    }

    async deleteCar(id: number) {
        const data = await this.deleteData(id);
        console.log(data);
    }
}

export default GarageService;
