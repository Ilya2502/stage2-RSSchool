import { ProductType } from '../../types/types';
import { createProperty } from './create-property';
import { productProperties } from '../../../constants/constants';

export function createProductCard(): HTMLDivElement {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    return productCard;
}

export function createProductCardName(item: ProductType): HTMLDivElement {
    const productCardName = document.createElement('div');
    productCardName.className = 'product-name';
    productCardName.innerHTML = item.name;
    return productCardName;
}

export function createProductImageContainer(): HTMLDivElement {
    const productImageContainer = document.createElement('div');
    productImageContainer.className = 'product-image-container';
    return productImageContainer;
}

export function createProductImage(item: ProductType): HTMLDivElement {
    const productImg = document.createElement('img');
    productImg.className = 'product-image';
    productImg.src = item.img;
    productImg.alt = item.name;
    return productImg;
}

export function createProductPropertiesList(item: ProductType): HTMLUListElement {
    const productPropertiesList = document.createElement('ul');
    productPropertiesList.className = 'product-properties-list';
    productProperties.forEach((property, index) => {
        productPropertiesList.append(createProperty(property, index, item));
    });
    return productPropertiesList;
}
