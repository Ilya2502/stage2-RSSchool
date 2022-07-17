import { StoreInterface, PropertiesType, FilterInterface } from '../../types/types';
import Filter from '../filter/filter';
// import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';
import { filterProperties } from '../../constants/constants';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './slider.css';

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
        // const fragment = document.createDocumentFragment();
        // const cardItemTemp = document.querySelector('#cardItemTemp') as HTMLTemplateElement;
        // const instrumentsContainer = document.querySelector('.instruments-container') as HTMLDivElement;
        // this.dataCurrent.forEach((item: PropertiesType): void => {
        //     const cardClone = cardItemTemp.content.cloneNode(true) as HTMLElement;
        //     const instrument = new Instrument(item);
        //     instrument.createCard(cardClone);
        //     fragment.append(cardClone);
        // });
        // instrumentsContainer.append(fragment);
        this.filter.generateCards();
        this.filter.addFilterListener();

        const sliderPrice = document.getElementById('slider-price') as HTMLDivElement;
        noUiSlider.create(sliderPrice, {
            start: [200, 1850],
            connect: true,
            range: {
                min: 200,
                max: 1850,
            },
            step: 10,
        });

        const sliderCount = document.getElementById('slider-count') as HTMLDivElement;
        noUiSlider.create(sliderCount, {
            start: [1, 8],
            connect: true,
            range: {
                min: 1,
                max: 8,
            },
            step: 1,
        });
    }
}

export default Store;
