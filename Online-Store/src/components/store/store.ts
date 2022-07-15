import { StoreInterface, PropertiesType } from '../../types/types';
import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';

class Store implements StoreInterface {
    data: PropertiesType[];
    dataCurrent: PropertiesType[];
    constructor() {
        this.data = <PropertiesType[]>data;
        this.dataCurrent = Array.from(<PropertiesType[]>data);
    }

    start() {
        const instrumentsContainer = document.querySelector('.instruments-container') as HTMLDivElement;
        this.dataCurrent.forEach((item: PropertiesType): void => {
            const instrument = new Instrument(item);
            const card: HTMLDivElement = instrument.createCard();
            instrumentsContainer.append(card);
        });
    }
}

export default Store;
