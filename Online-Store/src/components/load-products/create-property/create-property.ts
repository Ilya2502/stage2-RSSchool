import {
    productPropertiesClassNames,
    productPropertiesValueClassNames,
    productPropertiesValue,
} from '../../../constants/constants';

import { ProductType } from '../../types/types';

export function createProperty(property: string, index: number, item: ProductType) {
    const propertyItem = document.createElement('li');
    propertyItem.className = productPropertiesClassNames[index];
    propertyItem.innerHTML = property;

    const propertyItemValue = document.createElement('span');
    propertyItemValue.className = productPropertiesValueClassNames[index];
    propertyItemValue.innerHTML = item[productPropertiesValue[index] as keyof ProductType];
    propertyItem.append(propertyItemValue);
    return propertyItem;
}
