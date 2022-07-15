import { InstrumentInterface, PropertiesType } from '../../types/types';
import { Card } from '../card/card';

export class Instrument implements InstrumentInterface {
    properties: PropertiesType;
    constructor(properties: PropertiesType) {
        this.properties = properties;
    }

    createCard(): HTMLDivElement {
        const card = new Card(this.properties);

        const cardContainer = card.createContainer();

        const name = card.createName();
        cardContainer.append(name);

        const imageContainer = card.createImageContainer();
        cardContainer.append(imageContainer);

        const image = card.createImage();
        imageContainer.append(image);

        const list = card.createList();
        cardContainer.append(list);

        return cardContainer;
    }
}
