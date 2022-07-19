import { FilterPropertiesInterface, FilterInterface, PropertiesType, SortFunctions } from '../../types/types';
import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './slider.css';
import Cart from '../cart/cart';
import { sliderPriceElement, sliderCountElement } from '../../constants/constants';

class Filter implements FilterInterface {
    filterProperties: FilterPropertiesInterface;
    dataCurrent: PropertiesType[];
    data: PropertiesType[];
    sortFunctions: SortFunctions;
    cart: Cart;
    constructor(filterProperties: FilterPropertiesInterface, dataCurrent: PropertiesType[]) {
        this.filterProperties = filterProperties;
        this.dataCurrent = dataCurrent;
        this.data = <PropertiesType[]>data;
        this.cart = new Cart();
        this.sortFunctions = {
            priceAscending: this.sortPriceAscending.bind(this),
            priceDescending: this.sortPriceDescending.bind(this),
            countAscending: this.sortCountAscending.bind(this),
            countDescending: this.sortCountDescending.bind(this),
            nameAscending: this.sortNameAscending.bind(this),
            nameDescending: this.sortNameDescending.bind(this),
        };
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
        const reset = document.querySelector('.reset') as HTMLButtonElement;
        reset.addEventListener('click', () => {
            this.reset();
        });
        const clear = document.querySelector('.clear') as HTMLButtonElement;
        clear.addEventListener('click', () => {
            location.reload();
            localStorage.clear();
        });
    }

    reset() {
        for (const key in this.filterProperties) {
            this.filterProperties[key] = [];
        }
        const checkboxes = document.querySelectorAll('.checkbox');
        checkboxes.forEach((item) => ((item as HTMLInputElement).checked = false));

        const sliderPriceElement = document.getElementById('slider-price') as HTMLDivElement;
        const sliderCount = document.getElementById('slider-count') as HTMLDivElement;
        (sliderPriceElement as noUiSlider.target).noUiSlider?.reset();
        (sliderCount as noUiSlider.target).noUiSlider?.reset();

        const minPrice = document.querySelector(`.min-price-value`) as HTMLSpanElement;
        minPrice.innerHTML = '200';
        const maxPrice = document.querySelector(`.max-price-value`) as HTMLSpanElement;
        maxPrice.innerHTML = '1500';
        const minCount = document.querySelector(`.min-count-value`) as HTMLSpanElement;
        minCount.innerHTML = '1';
        const maxCount = document.querySelector(`.max-count-value`) as HTMLSpanElement;
        maxCount.innerHTML = '8';

        this.filtrationCards();
    }

    addSearchListener() {
        const input = document.querySelector('.search') as HTMLInputElement;
        input.addEventListener('input', () => {
            this.filterProperties.search[0] = input.value;
            this.filtrationCards();
        });
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
            return (
                this.filterType(item) &&
                this.filterColor(item) &&
                this.filterProducer(item) &&
                this.filterPopular(item) &&
                this.filterPrice(item) &&
                this.filterCount(item) &&
                this.filterSearch(item)
            );
        });
    }

    filterType(instrument: PropertiesType): boolean {
        return this.filterProperties.type.length !== 0 ? this.filterProperties.type.includes(instrument.type) : true;
    }

    filterProducer(instrument: PropertiesType): boolean {
        return this.filterProperties.producer.length !== 0
            ? this.filterProperties.producer.includes(instrument.producer)
            : true;
    }

    filterColor(instrument: PropertiesType): boolean {
        return this.filterProperties.color.length !== 0 ? this.filterProperties.color.includes(instrument.color) : true;
    }

    filterPopular(instrument: PropertiesType): boolean {
        return this.filterProperties.popular.length !== 0
            ? this.filterProperties.popular.includes(instrument.popular)
            : true;
    }

    filterPrice(instrument: PropertiesType): boolean {
        return this.filterProperties.price.length !== 0
            ? +instrument.price.slice(0, -1) <= +this.filterProperties.price[1] &&
                  +instrument.price.slice(0, -1) >= +this.filterProperties.price[0]
            : true;
    }

    filterCount(instrument: PropertiesType): boolean {
        return this.filterProperties.count.length !== 0
            ? +instrument.count <= +this.filterProperties.count[1] &&
                  +instrument.count >= +this.filterProperties.count[0]
            : true;
    }

    filterSearch(instrument: PropertiesType): boolean {
        return this.filterProperties.search.length !== 0
            ? instrument.name.toLowerCase().includes((this.filterProperties.search[0] as string).toLowerCase())
            : true;
    }

    generateCards() {
        this.sortApply();
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
        this.cart.addCartListener();
        this.cart.updateCount();
    }

    createSlider() {
        const minPrice = document.querySelector(`.min-price-value`) as HTMLSpanElement;
        minPrice.innerHTML = '200';
        const maxPrice = document.querySelector(`.max-price-value`) as HTMLSpanElement;
        maxPrice.innerHTML = '1500';

        const minCount = document.querySelector(`.min-count-value`) as HTMLSpanElement;
        minCount.innerHTML = '1';
        const maxCount = document.querySelector(`.max-count-value`) as HTMLSpanElement;
        maxCount.innerHTML = '8';

        this.addSliderListener(sliderPriceElement, sliderCountElement);
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

                const minSliderValue = document.querySelector(`.min-${property}-value`) as HTMLSpanElement;
                minSliderValue.innerHTML = propertyMinCurrent + '';
                const maxSliderValue = document.querySelector(`.max-${property}-value`) as HTMLSpanElement;
                maxSliderValue.innerHTML = propertyMaxCurrent + '';

                this.filtrationCards();
            });
        });
    }

    addSortListener() {
        const sortType = document.querySelector('#select-sort') as HTMLSelectElement;
        sortType.addEventListener('change', () => {
            this.generateCards();
        });
    }

    sortApply() {
        const sortType = document.querySelector('#select-sort') as HTMLSelectElement;
        this.sortFunctions[sortType.value]();
    }

    sortPriceAscending() {
        this.dataCurrent.sort((a, b) => +a.price.slice(0, -1) - +b.price.slice(0, -1));
    }

    sortPriceDescending() {
        this.dataCurrent.sort((a, b) => +b.price.slice(0, -1) - +a.price.slice(0, -1));
    }

    sortCountAscending() {
        this.dataCurrent.sort((a, b) => +a.count - +b.count);
    }

    sortCountDescending() {
        this.dataCurrent.sort((a, b) => +b.count - +a.count);
    }

    sortNameAscending() {
        this.dataCurrent = this.dataCurrent.sort((a, b) => {
            if (a.name > b.name) return 1;
            if (a.name === b.name) return 0;
            return -1;
        });
    }

    sortNameDescending() {
        this.dataCurrent = this.dataCurrent.sort((a, b) => {
            if (b.name > a.name) return 1;
            if (b.name === a.name) return 0;
            return -1;
        });
    }
}

export default Filter;
