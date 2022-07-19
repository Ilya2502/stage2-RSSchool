import { StoreInterface, PropertiesType, FilterInterface } from '../../types/types';
import Filter from '../filter/filter';
import data from '../json-files/product-catalog.json';
import { filterProperties } from '../../constants/constants';
import { noUiSliderPrice, noUiSliderCount } from '../../constants/constants';

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
        window.addEventListener('beforeunload', () => {
            localStorage.setItem('filters', JSON.stringify(this.filter.filterProperties));

            const checkboxes = document.querySelectorAll('.checkbox');
            const checkboxCheckedId: string[] = [];
            checkboxes.forEach((item) => {
                if ((item as HTMLInputElement).checked) {
                    checkboxCheckedId.push(item.id);
                }
            });
            localStorage.setItem('checkbox-checked', JSON.stringify(checkboxCheckedId));

            const cartValue = document.querySelector('.cart-value') as HTMLParagraphElement;
            localStorage.setItem('cart-value', cartValue.innerHTML);

            localStorage.setItem('cart-content', JSON.stringify(this.filter.cart.cartContent));

            const sortType = document.querySelector('#select-sort') as HTMLSelectElement;
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
                const cartValue = document.querySelector('.cart-value') as HTMLParagraphElement;
                cartValue.innerHTML = JSON.parse(localStorage.getItem('cart-value') as string);
            }

            if (localStorage.getItem('cart-content')) {
                this.filter.cart.cartContent = JSON.parse(localStorage.getItem('cart-content') as string);
                for (const key in this.filter.cart.cartContent) {
                    const card = document.querySelector(`#${key}`) as HTMLDivElement;
                    card.classList.add('choose');
                    const countInstrumentsReserved = card.querySelector('.manage-cart-value') as HTMLSpanElement;
                    countInstrumentsReserved.innerHTML = this.filter.cart.cartContent[key];
                }
            }

            if (localStorage.getItem('sortType')) {
                const sortType = document.querySelector('#select-sort') as HTMLSelectElement;
                sortType.value = JSON.parse(localStorage.getItem('sortType') as string);
            }

            if (localStorage.getItem('filters')) {
                this.filter.filterProperties = JSON.parse(localStorage.getItem('filters') as string);
                if (this.filter.filterProperties.price[0]) {
                    noUiSliderPrice.set([this.filter.filterProperties.price[0], this.filter.filterProperties.price[1]]);
                    const minPrice = document.querySelector(`.min-price-value`) as HTMLSpanElement;
                    minPrice.innerHTML = this.filter.filterProperties.price[0] + '';
                    const maxPrice = document.querySelector(`.max-price-value`) as HTMLSpanElement;
                    maxPrice.innerHTML = this.filter.filterProperties.price[1] + '';
                }

                if (this.filter.filterProperties.count[0]) {
                    noUiSliderCount.set([this.filter.filterProperties.count[0], this.filter.filterProperties.count[1]]);
                    const minCount = document.querySelector(`.min-count-value`) as HTMLSpanElement;
                    minCount.innerHTML = this.filter.filterProperties.count[0] + '';
                    const maxCount = document.querySelector(`.max-count-value`) as HTMLSpanElement;
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
        const closeMessage = document.querySelector('.cross-container') as HTMLDivElement;
        const fullCartMessage = document.querySelector('.full') as HTMLDivElement;
        closeMessage.addEventListener('click', () => fullCartMessage.classList.remove('full-active'));
    }
}

export default Store;
