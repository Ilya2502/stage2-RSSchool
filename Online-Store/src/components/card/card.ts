import { CardInterface, ProductType, MapperInterface } from '../../types/types';
import { mapper } from '../../constants/constants';

const mapper1: MapperInterface = mapper;

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
        list.className = 'properties-list';
        for (const key in mapper1) {
            const item = document.createElement('li');
            item.className = mapper1[key as keyof MapperInterface].classNameText;
            item.innerHTML = mapper1[key as keyof MapperInterface].text;

            const propertyItemValue = document.createElement('span');
            propertyItemValue.className = mapper1[key as keyof MapperInterface].classNameValue;
            propertyItemValue.innerHTML = this.properties[key as keyof ProductType];
            item.append(propertyItemValue);

            list.append(item);
        }
        return list;
    }
}
