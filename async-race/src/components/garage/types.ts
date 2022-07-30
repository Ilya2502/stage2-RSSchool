import { Car } from '../../services/garage-service/types'

export interface IGarage {
    cars: Car[],
    totalCount: number,
    init(): void,
}