import { IGarageService, Car } from '../../services/garage_service/types'

export interface IGarage {
    countCars: number,
    init(): void,
}