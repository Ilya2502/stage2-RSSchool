import { CardInterface, PropertiesType, MapperInterface } from '../../types/types';
import { mapper } from '../../constants/constants';

const mapper1: MapperInterface = mapper;

export class Card implements CardInterface {
    properties: PropertiesType;
    constructor(properties: PropertiesType) {
        this.properties = properties;
    }

    createContainer(): HTMLDivElement {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'card';
        return cardContainer;
    }

    createName(): HTMLDivElement {
        const name = document.createElement('div');
        name.className = 'name';
        name.innerHTML = this.properties.name;
        return name;
    }

    createImageContainer(): HTMLDivElement {
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
        return imageContainer;
    }

    createImage(): HTMLDivElement {
        const image = document.createElement('img');
        image.className = 'image';
        image.src = this.properties.img;
        image.alt = this.properties.name;
        return image;
    }

    createList(): HTMLUListElement {
        const list = document.createElement('ul');
        list.className = 'list';
        for (const key in mapper1) {
            const item = document.createElement('li');
            item.className = mapper1[key as keyof MapperInterface].classNameText;
            item.innerHTML = mapper1[key as keyof MapperInterface].text;

            const itemValue = document.createElement('span');
            itemValue.className = mapper1[key as keyof MapperInterface].classNameValue;
            itemValue.innerHTML = this.properties[key as keyof PropertiesType];
            item.append(itemValue);

            list.append(item);
        }
        return list;
    }
}
