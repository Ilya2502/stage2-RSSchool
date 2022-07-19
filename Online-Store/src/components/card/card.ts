import { CardInterface, PropertiesType, ProductAttributesMapper } from '../../types/types';
import { productAttributes } from '../../utils/productAttributesMapper';

export class Card implements CardInterface {
    properties: PropertiesType;
    cardClone: HTMLElement;
    constructor(properties: PropertiesType, cardClone: HTMLElement) {
        this.properties = properties;
        this.cardClone = cardClone;
    }

    addId(): void {
        const card = this.cardClone.querySelector('.card') as HTMLDivElement;
        card.id = this.properties.id;
    }

    addName(): void {
        const name = this.cardClone.querySelector('.name') as HTMLTitleElement;
        name.innerHTML = this.properties.name;
    }

    addImage(): void {
        const image = this.cardClone.querySelector('.image') as HTMLImageElement;
        image.src = this.properties.img;
        image.alt = this.properties.name;
    }

    addList(): void {
        for (const key in productAttributes) {
            const item = this.cardClone.querySelector(
                `.${productAttributes[key as keyof ProductAttributesMapper].classNameText}`
            ) as HTMLSpanElement;
            item.innerHTML = productAttributes[key as keyof ProductAttributesMapper].text;

            const itemValue = this.cardClone.querySelector(
                `.${productAttributes[key as keyof ProductAttributesMapper].classNameValue}`
            ) as HTMLSpanElement;
            itemValue.innerHTML = this.properties[key as keyof PropertiesType];
        }
    }
}
