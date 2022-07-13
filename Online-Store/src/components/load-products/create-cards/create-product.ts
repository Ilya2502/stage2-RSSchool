import { ProductType } from '../../types/types';

import {
    createProductCard,
    createProductCardName,
    createProductImageContainer,
    createProductImage,
    createProductPropertiesList,
} from './create-card';

export function createProduct(item: ProductType): HTMLDivElement {
    const productCard = createProductCard();

    const productCardName = createProductCardName(item);
    productCard.append(productCardName);

    const productImageContainer = createProductImageContainer();
    productCard.append(productImageContainer);

    const productImg = createProductImage(item);
    productImageContainer.append(productImg);

    const productPropertiesList = createProductPropertiesList(item);
    productCard.append(productPropertiesList);

    return productCard;
}
