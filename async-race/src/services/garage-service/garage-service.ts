import { baseUrl } from '../../constants/constants';
import { IGarageService, Car } from './types';

class GarageService implements IGarageService {
    async getCars(page = 1, limit = 7) {
        const responseCars = await fetch(`${baseUrl}/garage?_page=${page}&_limit=${limit}`);
        const cars: Car[] = await responseCars.json();
        const totalCount = responseCars.headers.get('X-Total-Count');
        return {
            cars,
            totalCount,
        };
    }

    async deleteCar(id: number) {
        const responseDeleteCar = await fetch(`${baseUrl}/garage/${id}`, {
            method: 'DELETE',
        });
        return await responseDeleteCar.json();
    }
}

export default GarageService;
