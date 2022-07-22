import { PropertyType } from '../../types/types';
import { IInstrument } from '../instrument/instrument-types';

import { Card } from '../card/card';

export class Instrument implements IInstrument {
    properties: PropertyType;
    constructor(properties: PropertyType) {
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
