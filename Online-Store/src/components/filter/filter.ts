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
            this.dataCurrent.length
                ? sorryMessage.classList.remove('sorry-active')
                : sorryMessage.classList.add('sorry-active');
        } else {
            this.dataCurrent = Array.from(<PropertiesType[]>data);
        }
        this.generateCards();
    }

    filtrationData() {
        this.dataCurrent = this.data.filter((item) =>
            Object.keys(this.filterProperties).reduce(
                (result, filter) =>
                    filter === 'price' || filter === 'count'
                        ? result && this.filterRange(item, filter)
                        : filter !== 'search'
                        ? result && this.filterValue(item, filter)
                        : result && this.filterSearch(item),
                true
            )
        );
    }

    filterValue(instrument: PropertiesType, filter: string): boolean {
        return this.filterProperties[filter].length !== 0
            ? this.filterProperties[filter].includes(instrument[filter])
            : true;
    }

    filterRange(instrument: PropertiesType, filter: string): boolean {
        return this.filterProperties[filter].length !== 0
            ? +instrument[filter] <= +this.filterProperties[filter][1] &&
                  +instrument[filter] >= +this.filterProperties[filter][0]
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
        this.dataCurrent.sort((a, b) => +a.price - +b.price);
    }

    sortPriceDescending() {
        this.dataCurrent.sort((a, b) => +b.price - +a.price);
    }

    sortCountAscending() {
        this.dataCurrent.sort((a, b) => +a.count - +b.count);
    }

    sortCountDescending() {
        this.dataCurrent.sort((a, b) => +b.count - +a.count);
    }

    sortNameAscending() {
        this.dataCurrent.sort((a, b) => (a.name >= b.name ? 1 : -1));
    }

    sortNameDescending() {
        this.dataCurrent.sort((a, b) => (b.name >= a.name ? 1 : -1));
    }
}

export default Filter;
