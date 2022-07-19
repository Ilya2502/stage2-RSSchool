import { FilterPropertiesInterface, MapperInterface } from '../types/types';
import * as noUiSlider from 'nouislider';

export const mapperTyped: MapperInterface = {
    type: {
        classNameText: 'type-text',
        text: 'Type: ',
        classNameValue: 'type-value',
    },
    price: {
        classNameText: 'price-text',
        text: 'Price: ',
        classNameValue: 'price-value',
    },
    producer: {
        classNameText: 'producer-text',
        text: 'Producer: ',
        classNameValue: 'producer-value',
    },
    count: {
        classNameText: 'count-text',
        text: 'Count: ',
        classNameValue: 'count-value',
    },
    popular: {
        classNameText: 'popular-text',
        text: 'Popular: ',
        classNameValue: 'popular-value',
    },
    color: {
        classNameText: 'color-text',
        text: 'Color: ',
        classNameValue: 'color-value',
    },
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

export const sliderPriceElement = document.getElementById('slider-price') as HTMLDivElement;

export const noUiSliderPrice = noUiSlider.create(sliderPriceElement, {
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

export const sliderCountElement = document.getElementById('slider-count') as HTMLDivElement;

export const noUiSliderCount = noUiSlider.create(sliderCountElement, {
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
