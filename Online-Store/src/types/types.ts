import { API } from 'nouislider';
import { FilterPropertiesType } from '../components/filter/filter-types';
import { ICart } from '../components/cart/cart-types';

export type PropertyType = Record<string, string>;

export type SortFunctions = Record<string, ICallback<string>>;

export interface ICallback<T> { (): void };

export interface IFilter {
    filterProperties: FilterPropertiesType;
    sortFunctions: SortFunctions;
    cart: ICart;
    noUiSliderPrice: API;
    noUiSliderCount: API;
    addFilterListener(): void;
    addSearchListener(): void;
    filtrationCards(): void;
    generateCards(): void;
    createSlider(): void;
    addSortListener(): void;
}
