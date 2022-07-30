import { IGarageService, Cars } from './types';
import { domen } from '../../constants/constants';

class GarageService implements IGarageService {
    constructor() {
        return this;
    }

    async getCars(page = 1, limit = 7) {
        const responseCars = await fetch(`${domen}garage?_page=${page}&_limit=${limit}`);
        const cars: Cars = await responseCars.json();
        const count = responseCars.headers.get('X-Total-Count');
        return {
            cars,
            count,
        };
    }

    async deleteCar(id: number) {
        const responseDeleteCar = await fetch(`${domen}garage/${id}`, {
            method: 'DELETE',
        });
        return await responseDeleteCar.json();
    }
}

export default GarageService;
