import { FilterPropertiesInterface, FilterInterface, PropertiesType } from '../../types/types';
import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './slider.css';
// import { Options, API } from 'nouislider';

class Filter implements FilterInterface {
    filterProperties: FilterPropertiesInterface;
    dataCurrent: PropertiesType[];
    data: PropertiesType[];
    constructor(filterProperties: FilterPropertiesInterface, dataCurrent: PropertiesType[]) {
        this.filterProperties = filterProperties;
        this.dataCurrent = dataCurrent;
        this.data = <PropertiesType[]>data;
    }

    addFilterListener() {
        const checkboxes = document.querySelectorAll('.filter-type') as NodeListOf<HTMLElement>;
        checkboxes.forEach((item) =>
            item.addEventListener('change', (event) => {
                const valueFilter = (event.target as HTMLInputElement).value;
                const typeFilter = (event.currentTarget as HTMLDivElement).id;
                this.changeFilterProperties(valueFilter, typeFilter);
                this.filtrationCards();
            })
        );
    }

    checkFilterProperties() {
        for (const key in this.filterProperties) {
            if (this.filterProperties[key].length) {
                return true;
            }
        }
        return false;
    }

    changeFilterProperties(valueFilter: string, typeFilter: string) {
        if (!this.filterProperties[typeFilter].includes(valueFilter)) {
            this.filterProperties[typeFilter].push(valueFilter);
        } else {
            this.filterProperties[typeFilter] = this.filterProperties[typeFilter].filter((item) => item != valueFilter);
        }
    }

    filtrationCards() {
        const sorryMessage = document.querySelector('.sorry') as HTMLDivElement;
        if (this.checkFilterProperties()) {
            this.filtrationData();
            if (!this.dataCurrent.length) {
                sorryMessage.classList.add('sorry-active');
            } else {
                sorryMessage.classList.remove('sorry-active');
            }
            this.generateCards();
        } else {
            this.dataCurrent = Array.from(<PropertiesType[]>data);
            this.generateCards();
        }
    }

    filtrationData() {
        this.dataCurrent = this.data.filter((item) => {
            if (
                this.filterType(item) &&
                this.filterColor(item) &&
                this.filterProducer(item) &&
                this.filterPopular(item) &&
                this.filterPrice(item) &&
                this.filterCount(item)
            ) {
                return true;
            } else {
                return false;
            }
        });
    }

    filterType(instrument: PropertiesType): boolean {
        if (this.filterProperties.producer.length !== 0) {
            for (let i = 0; i < this.filterProperties.type.length; i++) {
                if (instrument.type === this.filterProperties.type[i]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    filterProducer(instrument: PropertiesType): boolean {
        if (this.filterProperties.producer.length !== 0) {
            for (let i = 0; i < this.filterProperties.producer.length; i++) {
                if (instrument.producer === this.filterProperties.producer[i]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    filterColor(instrument: PropertiesType): boolean {
        if (this.filterProperties.color.length !== 0) {
            for (let i = 0; i < this.filterProperties.color.length; i++) {
                if (instrument.color === this.filterProperties.color[i]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    filterPopular(instrument: PropertiesType): boolean {
        if (this.filterProperties.popular.length !== 0) {
            for (let i = 0; i < this.filterProperties.popular.length; i++) {
                if (instrument.popular === this.filterProperties.popular[i]) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }

    filterPrice(instrument: PropertiesType): boolean {
        if (this.filterProperties.price.length !== 0) {
            if (
                +instrument.price < +this.filterProperties.price[1] &&
                +instrument.price > +this.filterProperties.price[0]
            ) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    filterCount(instrument: PropertiesType): boolean {
        if (this.filterProperties.count.length !== 0) {
            if (
                +instrument.count <= +this.filterProperties.count[1] &&
                +instrument.count >= +this.filterProperties.count[0]
            ) {
                return true;
            } else {
                return false;
            }
        }
        return true;
    }

    generateCards() {
        const instrumentsContainer = document.querySelector('.instruments-container') as HTMLDivElement;
        instrumentsContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const cardItemTemp = document.querySelector('#cardItemTemp') as HTMLTemplateElement;
        this.dataCurrent.forEach((item: PropertiesType): void => {
            const cardClone = cardItemTemp.content.cloneNode(true) as HTMLElement;
            const instrument = new Instrument(item);
            instrument.createCard(cardClone);
            fragment.append(cardClone);
        });
        instrumentsContainer.append(fragment);
    }

    createSlider() {
        const sliderPriceElement = document.getElementById('slider-price') as HTMLDivElement;
        noUiSlider.create(sliderPriceElement, {
            start: [200, 1850],
            tooltips: true,
            connect: true,
            range: {
                min: 200,
                max: 1850,
            },
            step: 10,
            format: {
                to: function (value) {
                    return value.toFixed(0);
                },
                from: function (value) {
                    return parseInt(value);
                },
            },
        });

        const sliderCount = document.getElementById('slider-count') as HTMLDivElement;
        noUiSlider.create(sliderCount, {
            start: [1, 8],
            tooltips: true,
            connect: true,
            range: {
                min: 1,
                max: 8,
            },
            step: 1,
            format: {
                to: function (value) {
                    return value.toFixed(0);
                },
                from: function (value) {
                    return parseInt(value);
                },
            },
        });

        this.addSliderListener(sliderPriceElement, sliderCount);
    }

    addSliderListener(...sliderArray: HTMLDivElement[]) {
        sliderArray.forEach((item) => {
            (item as noUiSlider.target).noUiSlider?.on('change', (value) => {
                const property = item.id.split('-')[1];
                const propertyMinCurrent = value[0];
                const propertyMaxCurrent = value[1];

                if (property === 'price' && propertyMinCurrent === '200' && propertyMaxCurrent === '1850') {
                    this.filterProperties[property] = [];
                } else if (property === 'count' && propertyMinCurrent === '1' && propertyMaxCurrent === '8') {
                    this.filterProperties[property] = [];
                } else {
                    this.filterProperties[property][0] = propertyMinCurrent;
                    this.filterProperties[property][1] = propertyMaxCurrent;
                }

                this.filtrationCards();
            });
        });
    }
}

export default Filter;
