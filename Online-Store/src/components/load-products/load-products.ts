import { ProductType } from '../types/types';
import { createProduct } from './create-cards/create-product';

export function loadProducts(data: ProductType[]): void {
    const productsContainer = document.querySelector('.products-container') as HTMLDivElement;
    data.forEach((item: ProductType): void => {
        productsContainer.append(createProduct(item));
    });
}
