import { InstrumentInterface, PropertiesType } from '../../types/types';
import { Card } from '../card/card';

export class Instrument implements InstrumentInterface {
    properties: PropertiesType;
    constructor(properties: PropertiesType) {
        this.properties = properties;
    }

    createCard(cardClone: HTMLElement): void {
        const card = new Card(this.properties, cardClone);
        card.addId();
        card.addName();
        card.addImage();
        card.addList();
    }
}
