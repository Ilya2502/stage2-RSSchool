import { StoreInterface, PropertiesType, FilterInterface } from '../../types/types';
import Filter from '../filter/filter';
// import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';
import { filterProperties } from '../../constants/constants';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';

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

        const slider = document.getElementById('slider') as HTMLDivElement;

        noUiSlider.create(slider, {
            start: [20, 900],
            connect: true,
            range: {
                min: 0,
                max: 1000,
            },
        });
        slider.style.width = '100px';
        slider.style.height = '10px';
    }
}

export default Store;
