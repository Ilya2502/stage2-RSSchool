import { FilterPropertiesInterface } from '../types/types';

const CHECKBOX = '.checkbox';
const CART_VALUE = '.cart-value';
const SELECT_SORT = '#select-sort';
const MANAGE_CART_VALUE = '.manage-cart-value';
const MIN_PRICE_VALUE = '.min-price-value';
const MAX_PRICE_VALUE = '.max-price-value';
const MIN_COUNT_VALUE = '.min-count-value';
const MAX_COUNT_VALUE = '.max-count-value';
const CROSS_CONTAINER = '.cross-container';
const FULL = '.full';
const FILTER_TYPE = '.filter-type';
const RESET = '.reset';
const CLEAR = '.clear';
const SLIDER_PRICE = '#slider-price';
const SLIDER_COUNT = '#slider-count';
const SEARCH = '.search';
const SORRY = '.sorry';
const INSTRUMENTS_CONTAINER = '.instruments-container';
const CARD_ITEM_TEMP = '#cardItemTemp';

const CARD = '.card';
const NAME = '.name';
const IMAGE = '.image';

const COUNT_VALUE = '.count-value';

export const SELECTOR = {
    CHECKBOX, //!
    CART_VALUE, //!
    SELECT_SORT, //!
    MANAGE_CART_VALUE, //!
    MIN_PRICE_VALUE, //!
    MAX_PRICE_VALUE, //!
    MIN_COUNT_VALUE, //!
    MAX_COUNT_VALUE, //!
    CROSS_CONTAINER,
    FULL, //!
    FILTER_TYPE,
    RESET,
    CLEAR,
    SLIDER_PRICE,
    SLIDER_COUNT,
    SEARCH,
    SORRY,
    INSTRUMENTS_CONTAINER,
    CARD_ITEM_TEMP,
    CARD, //!
    NAME,
    IMAGE,
    COUNT_VALUE,
};

export const filterProperties: FilterPropertiesInterface = {
    type: [],
    producer: [],
    color: [],
    popular: [],
    price: [],
    count: [],
    search: [],
};

export const sliderPriceElement = document.querySelector(SELECTOR.SLIDER_PRICE) as HTMLDivElement;

export const sliderCountElement = document.querySelector(SELECTOR.SLIDER_COUNT) as HTMLDivElement;
