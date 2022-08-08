import GarageService from '../garage-service/garage-service';
import { IWinnersService, WinnerType } from './types';

class WinnersService extends GarageService implements IWinnersService {
    public async getWinner(id: number) {
        const endPoint = `winners/${id}`;
        const data = await this.getData<WinnerType>(endPoint);
        if (data) {
            return data.data;
        }
    }

    public async createWinner(id: number, wins: number, time: number) {
        const endPoint = 'winners';
        const body = { id, wins, time };
        await this.postData<WinnerType, WinnerType>(endPoint, body);
    }

    public async updateWinner(id: number, wins: number, time: number) {
        const endPoint = `winners/${id}`;
        const body = { id, wins, time };
        await this.putData<WinnerType, WinnerType>(endPoint, body);
    }

    public async getWinners(page = 1, limit = 10, sort = 'time', order = 'ASC') {
        const endPoint = `winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`;
        return this.getData<WinnerType[]>(endPoint);
    }

    public async deleteWinner(id: number) {
        const endPoint = `winners/${id}`;
        await this.deleteData(endPoint);
    }
}

export default WinnersService;
