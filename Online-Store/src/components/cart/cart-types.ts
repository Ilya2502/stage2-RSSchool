import { PropertyType } from '../../types/types';

export interface ICart {
    cartContent: PropertyType;
    addCartListener(): void;
    updateCount(): void;
}