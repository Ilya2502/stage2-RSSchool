import { PropertyType } from '../../types/types';

export interface IInstrument {
    properties: PropertyType;
    createCard(cardClone: HTMLElement): void;
}