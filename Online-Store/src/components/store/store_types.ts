import { PropertyType } from '../../types/types';

export interface IStore {
    data: Array<PropertyType>;
    init(): void;
}