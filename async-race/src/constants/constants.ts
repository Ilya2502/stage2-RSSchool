import { ModelType } from './types';

const BODY = 'body';
const NAVIGATION_TEMP = '#navigation-temp';
const GARAGE_MENU_TEMP = '#garage-menu-temp';
const MODELS_LIST = '#models-list';
const GARAGE_CONTENT_TEMP = '#garage-content-temp';
const CAR_CONTENT_TEMP = '#car-content-temp';
const TOTAL_COUNT = '#total-count';
const PAGE = '#page';
const GARAGE_CONTENT = '#garage-content';
const CARS_CONTAINER = '.cars-container';

export const SELECTOR = {
    BODY,
    NAVIGATION_TEMP,
    GARAGE_MENU_TEMP,
    MODELS_LIST,
    GARAGE_CONTENT_TEMP,
    CAR_CONTENT_TEMP,
    TOTAL_COUNT,
    PAGE,
    GARAGE_CONTENT,
    CARS_CONTAINER,
};

export const carNames: ModelType = {
    Mazda: ['CX-3', 'CX-5', 'CX-7', 'CX-9', 'CX-30', 'RX-8', '626', '323F', 'MX-3', 'MX-5', 'MX-7', 'MX-9'],
    Audi: ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8'],
    BMW: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'iX', 'iX3', 'M2', 'M3', 'M4', 'M5', 'M6'],
    Mercedes: ['CL', 'CLA', 'CLK', 'CLS', 'SLC', 'SLK', 'Vito', 'Viano', 'GLA', 'GLE', 'EQC'],
    Honda: ['Accord', 'Civic', 'Concerto', 'CR-V', 'CR-X', 'CR-Z', 'Fit', 'FR-V', 'HR-V', 'Jazz'],
    Toyota: ['Auris', 'Avalon', 'Avensis', 'CH-R', 'Camry', 'Carina', 'Corolla', 'Fortuner', 'Picnic', 'Tundra'],
    Lada: ['2101', '2102', '2103', '2104', '2105', '2106', '2107', '2108', '2109', '21099', '2110'],
    Hyndai: ['Accent', 'Coupe', 'Creta', 'Elantra', 'Genesis', 'H100', 'H200', 'i10', 'i20', 'i30', 'i40'],
    Nissan: ['100NX', 'Almera', 'Armada', 'Cherry', 'Juke', 'Leaf', 'Maxima', 'Murano', 'Navara', 'Qashqai'],
    Skoda: ['Citigo', 'Felicia', 'Octavia', 'Roomster', 'Fabia', 'Karoq', 'Praktik', 'Superb', 'Rapid', 'Yeti'],
};
