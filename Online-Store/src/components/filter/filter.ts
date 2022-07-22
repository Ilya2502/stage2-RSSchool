import { IFilter, PropertyType, SortFunctions } from '../../types/types';
import { FilterPropertiesType } from './filter-types';
import { Instrument } from '../instrument/instrument';
import data from '../json-files/product-catalog.json';
import * as noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
import './slider.css';
import Cart from '../cart/cart';
import { sliderPriceElement, sliderCountElement, SELECTOR } from '../../constants/constants';
import { API } from 'nouislider';

class Filter implements IFilter {
    readonly filterProperties: FilterPropertiesType;
    private dataCurrent: PropertyType[];
    readonly data: PropertyType[];
    readonly sortFunctions: SortFunctions;
    public cart: Cart;
    public noUiSliderPrice: API;
    public noUiSliderCount: API;
    constructor(filterProperties: FilterPropertiesType) {
        this.filterProperties = filterProperties;
        this.dataCurrent = Array.from(data);
        this.data = <PropertyType[]>data;
        this.cart = new Cart();
        this.sortFunctions = {
            priceAscending: this.sortPriceAscending.bind(this),
            priceDescending: this.sortPriceDescending.bind(this),
            countAscending: this.sortCountAscending.bind(this),
            countDescending: this.sortCountDescending.bind(this),
            nameAscending: this.sortNameAscending.bind(this),
            nameDescending: this.sortNameDescending.bind(this),
        };
        this.noUiSliderPrice = noUiSlider.create(sliderPriceElement, {
            start: [200, 1500],
            tooltips: true,
            connect: true,
            range: {
                min: 200,
                max: 1500,
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
        this.noUiSliderCount = noUiSlider.create(sliderCountElement, {
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
    }

    public addFilterListener() {
        const checkboxes = document.querySelectorAll(SELECTOR.FILTER_TYPE) as NodeListOf<HTMLElement>;
        checkboxes.forEach((item) =>
            item.addEventListener('change', (event) => {
                const valueFilter = (event.target as HTMLInputElement).value;
                const typeFilter = (event.currentTarget as HTMLDivElement).id;
                this.changeFilterProperties(valueFilter, typeFilter);
                this.filtrationCards();
            })
        );
        const reset = document.querySelector(SELECTOR.RESET) as HTMLButtonElement;
        reset.addEventListener('click', () => {
            this.reset();
        });
        const clear = document.querySelector(SELECTOR.CLEAR) as HTMLButtonElement;
        clear.addEventListener('click', () => {
            location.reload();
            localStorage.clear();
        });
    }

    private reset() {
        for (const key in this.filterProperties) {
            this.filterProperties[key] = [];
        }
        const checkboxes = document.querySelectorAll(SELECTOR.CHECKBOX);
        checkboxes.forEach((item) => ((item as HTMLInputElement).checked = false));

        const sliderPriceElement = document.querySelector(SELECTOR.SLIDER_PRICE) as HTMLDivElement;
        const sliderCount = document.querySelector(SELECTOR.SLIDER_COUNT) as HTMLDivElement;
        (sliderPriceElement as noUiSlider.target).noUiSlider?.reset();
        (sliderCount as noUiSlider.target).noUiSlider?.reset();

        const minPrice = document.querySelector(SELECTOR.MIN_PRICE_VALUE) as HTMLSpanElement;
        minPrice.innerHTML = '200';
        const maxPrice = document.querySelector(SELECTOR.MAX_PRICE_VALUE) as HTMLSpanElement;
        maxPrice.innerHTML = '1500';
        const minCount = document.querySelector(SELECTOR.MIN_COUNT_VALUE) as HTMLSpanElement;
        minCount.innerHTML = '1';
        const maxCount = document.querySelector(SELECTOR.MAX_COUNT_VALUE) as HTMLSpanElement;
        maxCount.innerHTML = '8';

        this.filtrationCards();
    }

    public addSearchListener() {
        const input = document.querySelector(SELECTOR.SEARCH) as HTMLInputElement;
        input.addEventListener('input', () => {
            this.filterProperties.search[0] = input.value;
            this.filtrationCards();
        });
    }

    private checkFilterProperties() {
        for (const key in this.filterProperties) {
            if (this.filterProperties[key].length) {
                return true;
            }
        }
        return false;
    }

    private changeFilterProperties(valueFilter: string, typeFilter: string) {
        if (!this.filterProperties[typeFilter].includes(valueFilter)) {
            this.filterProperties[typeFilter].push(valueFilter);
        } else {
            this.filterProperties[typeFilter] = this.filterProperties[typeFilter].filter((item) => item != valueFilter);
        }
    }

    public filtrationCards() {
        const sorryMessage = document.querySelector(SELECTOR.SORRY) as HTMLDivElement;
        if (this.checkFilterProperties()) {
            this.filtrationData();
            this.dataCurrent.length
                ? sorryMessage.classList.remove('sorry-active')
                : sorryMessage.classList.add('sorry-active');
        } else {
            this.dataCurrent = Array.from(<PropertyType[]>data);
        }
        this.generateCards();
    }

    private filtrationData() {
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

    private filterValue(instrument: PropertyType, filter: string): boolean {
        return this.filterProperties[filter].length !== 0
            ? this.filterProperties[filter].includes(instrument[filter])
            : true;
    }

    private filterRange(instrument: PropertyType, filter: string): boolean {
        return this.filterProperties[filter].length !== 0
            ? +instrument[filter] <= +this.filterProperties[filter][1] &&
                  +instrument[filter] >= +this.filterProperties[filter][0]
            : true;
    }

    private filterSearch(instrument: PropertyType): boolean {
        return this.filterProperties.search.length !== 0
            ? instrument.name.toLowerCase().includes((this.filterProperties.search[0] as string).toLowerCase())
            : true;
    }

    public generateCards() {
        this.sortApply();
        const instrumentsContainer = document.querySelector(SELECTOR.INSTRUMENTS_CONTAINER) as HTMLDivElement;
        instrumentsContainer.innerHTML = '';
        const fragment = document.createDocumentFragment();
        const cardItemTemp = document.querySelector(SELECTOR.CARD_ITEM_TEMP) as HTMLTemplateElement;
        this.dataCurrent.forEach((item: PropertyType): void => {
            const cardClone = cardItemTemp.content.cloneNode(true) as HTMLElement;
            const instrument = new Instrument(item);
            instrument.createCard(cardClone);
            fragment.append(cardClone);
        });
        instrumentsContainer.append(fragment);
        this.cart.addCartListener();
        this.cart.updateCount();
    }

    public createSlider() {
        const minPrice = document.querySelector(SELECTOR.MIN_PRICE_VALUE) as HTMLSpanElement;
        minPrice.innerHTML = '200';
        const maxPrice = document.querySelector(SELECTOR.MAX_PRICE_VALUE) as HTMLSpanElement;
        maxPrice.innerHTML = '1500';

        const minCount = document.querySelector(SELECTOR.MIN_COUNT_VALUE) as HTMLSpanElement;
        minCount.innerHTML = '1';
        const maxCount = document.querySelector(SELECTOR.MAX_COUNT_VALUE) as HTMLSpanElement;
        maxCount.innerHTML = '8';

        this.addSliderListener(sliderPriceElement, sliderCountElement);
    }

    private addSliderListener(...sliderArray: HTMLDivElement[]) {
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

    public addSortListener() {
        const sortType = document.querySelector(SELECTOR.SELECT_SORT) as HTMLSelectElement;
        sortType.addEventListener('change', () => {
            this.generateCards();
        });
    }

    private sortApply() {
        const sortType = document.querySelector(SELECTOR.SELECT_SORT) as HTMLSelectElement;
        this.sortFunctions[sortType.value]();
    }

    private sortPriceAscending() {
        this.dataCurrent.sort((a, b) => +a.price - +b.price);
    }

    private sortPriceDescending() {
        this.dataCurrent.sort((a, b) => +b.price - +a.price);
    }

    private sortCountAscending() {
        this.dataCurrent.sort((a, b) => +a.count - +b.count);
    }

    private sortCountDescending() {
        this.dataCurrent.sort((a, b) => +b.count - +a.count);
    }

    private sortNameAscending() {
        this.dataCurrent.sort((a, b) => (a.name >= b.name ? 1 : -1));
    }

    private sortNameDescending() {
        this.dataCurrent.sort((a, b) => (b.name >= a.name ? 1 : -1));
    }
}

export default Filter;
