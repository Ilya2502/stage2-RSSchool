import { PropertyType, IFilter } from '../../types/types';
import { IStore } from '../store/store_types';
import Filter from '../filter/filter';
import data from '../json-files/product-catalog.json';
import { filterProperties, SELECTOR } from '../../constants/constants';

class Store implements IStore {
    readonly filter: IFilter;
    readonly data: PropertyType[];
    readonly dataCurrent: PropertyType[];
    constructor() {
        this.data = <PropertyType[]>data;
        this.dataCurrent = Array.from(<PropertyType[]>data);
        this.filter = new Filter(filterProperties, this.dataCurrent);
    }

    public init() {
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('filters', JSON.stringify(this.filter.filterProperties));

            const checkboxes = document.querySelectorAll(SELECTOR.CHECKBOX);
            const checkboxCheckedId: string[] = [];
            checkboxes.forEach((item) => {
                if ((item as HTMLInputElement).checked) {
                    checkboxCheckedId.push(item.id);
                }
            });
            localStorage.setItem('checkbox-checked', JSON.stringify(checkboxCheckedId));

            const cartValue = document.querySelector(SELECTOR.CART_VALUE) as HTMLParagraphElement;
            localStorage.setItem('cart-value', cartValue.innerHTML);

            localStorage.setItem('cart-content', JSON.stringify(this.filter.cart.cartContent));

            const sortType = document.querySelector(SELECTOR.SELECT_SORT) as HTMLSelectElement;
            localStorage.setItem('sortType', JSON.stringify(sortType.value));
        });

        window.addEventListener('load', () => {
            if (localStorage.getItem('checkbox-checked')) {
                const checkboxCheckedId: string[] = JSON.parse(localStorage.getItem('checkbox-checked') as string);
                checkboxCheckedId.forEach((item) => {
                    const checkbox = document.querySelector(`#${item}`) as HTMLInputElement;
                    checkbox.checked = true;
                });
            }

            if (localStorage.getItem('cart-value')) {
                const cartValue = document.querySelector(SELECTOR.CART_VALUE) as HTMLParagraphElement;
                cartValue.innerHTML = JSON.parse(localStorage.getItem('cart-value') as string);
            }

            if (localStorage.getItem('cart-content')) {
                this.filter.cart.cartContent = JSON.parse(localStorage.getItem('cart-content') as string);
                for (const key in this.filter.cart.cartContent) {
                    const card = document.querySelector(`#${key}`) as HTMLDivElement;
                    card.classList.add('choose');
                    const countInstrumentsReserved = card.querySelector(SELECTOR.MANAGE_CART_VALUE) as HTMLSpanElement;
                    countInstrumentsReserved.innerHTML = this.filter.cart.cartContent[key];
                }
            }

            if (localStorage.getItem('sortType')) {
                const sortType = document.querySelector(SELECTOR.SELECT_SORT) as HTMLSelectElement;
                sortType.value = JSON.parse(localStorage.getItem('sortType') as string);
            }

            if (localStorage.getItem('filters')) {
                this.filter.filterProperties = JSON.parse(localStorage.getItem('filters') as string);
                if (this.filter.filterProperties.price[0]) {
                    this.filter.noUiSliderPrice.set([
                        this.filter.filterProperties.price[0],
                        this.filter.filterProperties.price[1],
                    ]);
                    const minPrice = document.querySelector(SELECTOR.MIN_PRICE_VALUE) as HTMLSpanElement;
                    minPrice.innerHTML = this.filter.filterProperties.price[0] + '';
                    const maxPrice = document.querySelector(SELECTOR.MAX_PRICE_VALUE) as HTMLSpanElement;
                    maxPrice.innerHTML = this.filter.filterProperties.price[1] + '';
                }

                if (this.filter.filterProperties.count[0]) {
                    this.filter.noUiSliderCount.set([
                        this.filter.filterProperties.count[0],
                        this.filter.filterProperties.count[1],
                    ]);
                    const minCount = document.querySelector(SELECTOR.MIN_COUNT_VALUE) as HTMLSpanElement;
                    minCount.innerHTML = this.filter.filterProperties.count[0] + '';
                    const maxCount = document.querySelector(SELECTOR.MAX_COUNT_VALUE) as HTMLSpanElement;
                    maxCount.innerHTML = this.filter.filterProperties.count[1] + '';
                }
            }

            this.filter.filtrationCards();
        });
        this.filter.generateCards();
        this.filter.addFilterListener();
        this.filter.createSlider();
        this.filter.addSortListener();
        this.filter.addSearchListener();
        const closeMessage = document.querySelector(SELECTOR.CROSS_CONTAINER) as HTMLDivElement;
        const fullCartMessage = document.querySelector(SELECTOR.FULL) as HTMLDivElement;
        closeMessage.addEventListener('click', () => fullCartMessage.classList.remove('full-active'));
    }
}

export default Store;
