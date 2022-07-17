import { FilterPropertiesInterface } from '../types/types';

export const mapper = {
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
};
