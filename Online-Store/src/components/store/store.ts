import { StoreInterface, ProductType } from '../../types/types';
import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';

class Store implements StoreInterface {
    data: Array<ProductType>;
    constructor() {
        this.data = <ProductType[]>data;
    }

    start() {
        const productsContainer = document.querySelector('.products-container') as HTMLDivElement;
        this.data.forEach((item: ProductType): void => {
            const instrument = new Instrument(item);
            const card: HTMLDivElement = instrument.createCard();
            productsContainer.append(card);
        });
    }
}

export default Store;
