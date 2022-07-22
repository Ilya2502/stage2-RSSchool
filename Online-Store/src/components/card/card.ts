import { PropertyType } from '../../types/types';
import { ProductAttributesMapper } from '../../utils/mapper-types';
import { ICard } from '../card/card-types';
import { productAttributes } from '../../utils/productAttributesMapper';
import { SELECTOR } from '../../constants/constants';

export class Card implements ICard {
    properties: PropertyType;
    cardClone: HTMLElement;
    constructor(properties: PropertyType, cardClone: HTMLElement) {
        this.properties = properties;
        this.cardClone = cardClone;
    }

    public addId(): void {
        const card = this.cardClone.querySelector(SELECTOR.CARD) as HTMLDivElement;
        card.id = this.properties.id;
    }

    public addName(): void {
        const name = this.cardClone.querySelector(SELECTOR.NAME) as HTMLTitleElement;
        name.innerHTML = this.properties.name;
    }

    public addImage(): void {
        const image = this.cardClone.querySelector(SELECTOR.IMAGE) as HTMLImageElement;
        image.src = this.properties.img;
        image.alt = this.properties.name;
    }

    public addList(): void {
        for (const key in productAttributes) {
            const item = this.cardClone.querySelector(
                `.${productAttributes[key as keyof ProductAttributesMapper].classNameText}`
            ) as HTMLSpanElement;
            item.innerHTML = productAttributes[key as keyof ProductAttributesMapper].text;

            const itemValue = this.cardClone.querySelector(
                `.${productAttributes[key as keyof ProductAttributesMapper].classNameValue}`
            ) as HTMLSpanElement;
            itemValue.innerHTML = this.properties[key as keyof PropertyType];
        }
    }
}
