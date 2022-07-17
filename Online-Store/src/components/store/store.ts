import { StoreInterface, PropertiesType, FilterInterface } from '../../types/types';
import Filter from '../filter/filter';
import data from '../json-files/product-catalog.json';
import { filterProperties } from '../../constants/constants';

class Store implements StoreInterface {
    filter: FilterInterface;
    data: PropertiesType[];
    dataCurrent: PropertiesType[];
    constructor() {
        this.data = <PropertiesType[]>data;
        this.dataCurrent = Array.from(<PropertiesType[]>data);
        this.filter = new Filter(filterProperties, this.dataCurrent);
    }

    start() {
        this.filter.generateCards();
        this.filter.addFilterListener();
        this.filter.createSlider();
        this.filter.addSortListener();
    }
}

export default Store;
