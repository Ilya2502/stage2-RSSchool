import { CardInterface, ProductType } from '../../types/types';
import { productProperties } from '../../constants/constants';
import {
    productPropertiesClassNames,
    productPropertiesValueClassNames,
    productPropertiesValue,
} from '../../constants/constants';

export class Card implements CardInterface {
    properties: ProductType;
    constructor(properties: ProductType) {
        this.properties = properties;
    }

    createContainer(): HTMLDivElement {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        return productCard;
    }

    createName(): HTMLDivElement {
        const productCardName = document.createElement('div');
        productCardName.className = 'product-name';
        productCardName.innerHTML = this.properties.name;
        return productCardName;
    }

    createImageContainer(): HTMLDivElement {
        const productImageContainer = document.createElement('div');
        productImageContainer.className = 'product-image-container';
        return productImageContainer;
    }

    createImage(): HTMLDivElement {
        const productImg = document.createElement('img');
        productImg.className = 'product-image';
        productImg.src = this.properties.img;
        productImg.alt = this.properties.name;
        return productImg;
    }

    createList(): HTMLUListElement {
        const list = document.createElement('ul');
        list.className = 'product-properties-list';
        productProperties.forEach((property, index) => {
            const item = document.createElement('li');
            item.className = productPropertiesClassNames[index];
            item.innerHTML = property;

            const propertyItemValue = document.createElement('span');
            propertyItemValue.className = productPropertiesValueClassNames[index];
            propertyItemValue.innerHTML = this.properties[productPropertiesValue[index] as keyof ProductType];
            item.append(propertyItemValue);

            list.append(item);
        });
        return list;
    }
}
