import { IInstrument, PropertiesType } from '../../types/types';
import { Card } from '../card/card';

export class Instrument implements IInstrument {
    properties: PropertiesType;
    constructor(properties: PropertiesType) {
        this.properties = properties;
    }

    public createCard(cardClone: HTMLElement): void {
        const card = new Card(this.properties, cardClone);
        card.addId();
        card.addName();
        card.addImage();
        card.addList();
    }
}
