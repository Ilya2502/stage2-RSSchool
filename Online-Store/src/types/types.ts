export type PropertiesType = Record<string, string>;

export interface StoreInterface {
    data: Array<PropertiesType>;
    start(): void;
}

export interface InstrumentInterface {
    properties: PropertiesType;
    createCard(cardClone: HTMLElement): void;
}

export interface CardInterface {
    properties: PropertiesType;
    cardClone: HTMLElement;
}

export enum Filters { 
    type = 'type',
    price = 'price',
    producer = 'producer',
    count = 'count',
    popular = 'popular',
    color='color'
}

export type ProductAttributesMapper = Record<Filters, PropertiesType>;

export type FilterPropertiesInterface = Record<string, (string | number)[]>;

export type SortFunctions = Record<string, Callback<string>>;

export interface Callback<T> { (): void };

export interface FilterInterface {
    filterProperties: FilterPropertiesInterface;
    sortFunctions: SortFunctions;
    cart: CartInterface;
    addFilterListener(): void;
    addSearchListener(): void;
    filtrationCards(): void;
    generateCards(): void;
    createSlider(): void;
    addSortListener(): void;
}

export interface CartInterface {
    cartContent: PropertiesType;
    addCartListener(): void;
    updateCount(): void;
}

