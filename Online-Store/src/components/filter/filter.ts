import { FilterPropertiesInterface, FilterInterface, PropertiesType } from '../../types/types';
import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';

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
                console.log(valueFilter, typeFilter);
                this.changeFilterProperties(valueFilter, typeFilter);
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

    filtrationData() {
        this.dataCurrent = this.data.filter((item) => {
            if (
                this.filterType(item) &&
                this.filterColor(item) &&
                this.filterProducer(item) &&
                this.filterPopular(item)
            ) {
                return true;
            } else {
                return false;
            }
        });
    }

    filterType(instrument: PropertiesType): boolean {
        if (this.filterProperties.type.length !== 0) {
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
}

export default Filter;
