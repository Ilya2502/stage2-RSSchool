export type PropertiesType = Record<string, string>;

export interface IStore {
    data: Array<PropertiesType>;
    start(): void;
}

export interface IInstrument {
    properties: PropertiesType;
    createCard(cardClone: HTMLElement): void;
}

export interface ICard {
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

export type SortFunctions = Record<string, ICallback<string>>;

export interface ICallback<T> { (): void };

export interface IFilter {
    filterProperties: FilterPropertiesInterface;
    sortFunctions: SortFunctions;
    cart: ICart;
    addFilterListener(): void;
    addSearchListener(): void;
    filtrationCards(): void;
    generateCards(): void;
    createSlider(): void;
    addSortListener(): void;
}

export interface ICart {
    cartContent: PropertiesType;
    addCartListener(): void;
    updateCount(): void;
}

