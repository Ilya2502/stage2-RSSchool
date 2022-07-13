import { ProductType } from '../types/types';

import {
    createProductCard,
    createProductCardName,
    createProductImageContainer,
    createProductImage,
    createProductPropertiesList,
} from './create-cards/create-cards';

export function loadProducts(data: ProductType[]): void {
    const productsContainer = document.querySelector('.products-container') as HTMLDivElement;
    data.forEach((item: ProductType): void => {
        const productCard = createProductCard();
        productsContainer.append(productCard);

        const productCardName = createProductCardName(item);
        productCard.append(productCardName);

        const productImageContainer = createProductImageContainer();
        productCard.append(productImageContainer);

        const productImg = createProductImage(item);
        productImageContainer.append(productImg);

        const productPropertiesList = createProductPropertiesList(item);
        productCard.append(productPropertiesList);
    });
}
