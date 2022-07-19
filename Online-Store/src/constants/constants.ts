import { FilterPropertiesInterface } from '../types/types';
import * as noUiSlider from 'nouislider';

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
