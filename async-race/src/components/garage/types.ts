import { CarType } from '../../services/car-service/types'

export interface IGarage {
    cars: CarType[],
    totalCount: number,
    init(): void,
}