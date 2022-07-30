import { baseUrl } from '../../constants/constants';
import { ICarService, CarBody } from './types';

class CarService implements ICarService {
    async getCar(id: number) {
        const responseCar = await fetch(`${baseUrl}/garage/${id}`);
        return await responseCar.json();
    }

    async createCar(body: CarBody) {
        const responseNewCar = await fetch(`${baseUrl}/garage`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await responseNewCar.json();
    }

    async updateCar(id: number, body: CarBody) {
        const responseUpdateCar = await fetch(`${baseUrl}/garage/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await responseUpdateCar.json();
    }

    async start(id: number) {
        const responseStart = await fetch(`${baseUrl}/engine?id=${id}&status=started`, {
            method: 'PATCH',
        });
        return await responseStart.json();
    }

    async stop(id: number) {
        const responseStop = await fetch(`${baseUrl}/engine?id=${id}&status=stopped`, {
            method: 'PATCH',
        });
        return await responseStop.json();
    }

    async drive(id: number) {
        const responseDrive = await fetch(`${baseUrl}/engine?id=${id}&status=drive`, {
            method: 'PATCH',
        });
        return await responseDrive.json();
    }
}

export default CarService;
