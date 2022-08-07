import FetchService from '../fetch-service/fetch-service';
import { IWinnersService, WinnerType } from './types';
// import { WinnerType /*PostBodyType*/ } from '../car-service/types';

class WinnersService extends FetchService implements IWinnersService {
    async getWinner(id: number) {
        const endPoint = `winners/${id}`;
        const data = await this.getData<WinnerType>(endPoint);
        console.log(data);
    }

    async createWinner(id: number, wins: number, time: number) {
        const endPoint = 'winners';
        const body = { id, wins, time };
        await this.postData<WinnerType, WinnerType>(endPoint, body);
    }

    async updateWinner(id: number, wins: number, time: number) {
        const endPoint = `winners/${id}`;
        const body = { id, wins, time };
        await this.putData<WinnerType, WinnerType>(endPoint, body);
    }

    async getWinners(page = 1, limit = 10, sort = 'time') {
        const endPoint = `winners?_page=${page}&_limit=${limit}&_sort=${sort}`;
        console.log(await this.getData<WinnerType[]>(endPoint));
        return this.getData<WinnerType[]>(endPoint);
    }

    async deleteWinner(id: number) {
        const endPoint = `winners/${id}`;
        const data = await this.deleteData(endPoint);
        console.log(data);
    }
}

export default WinnersService;
