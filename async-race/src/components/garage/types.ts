import { IGarageService, Car } from '../../services/garage_service/types'

export interface IGarage {
    cars: Car[] | [],
    countCars: number,
    init(): void,
}