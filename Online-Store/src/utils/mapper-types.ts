import { PropertyType } from '../types/types';

export enum FilterType { 
    type = 'type',
    price = 'price',
    producer = 'producer',
    count = 'count',
    popular = 'popular',
    color='color'
}

export type ProductAttributesMapper = Record<FilterType, PropertyType>;