import * as noUiSlider from 'nouislider';

export type PropertiesType = Record<string, string>;

export interface StoreInterface {
    data: Array<PropertiesType>;
    start(): void;
}

export interface InstrumentInterface {
    properties: PropertiesType,
    createCard(cardClone: HTMLElement): void;
}

export interface CardInterface {
    properties: PropertiesType,
    cardClone: HTMLElement,
    addId(): void,
    addName(): void,
    addImage(): void,
    addList(): void
}

export type MapperInterface = Record<string, PropertiesType>;

export type FilterPropertiesInterface = Record<string, (string | number)[]>;

export type SortFunctions = Record<string, Callback<string>>;

export interface Callback<T> { (): void };

export interface FilterInterface {
    filterProperties: FilterPropertiesInterface;
    dataCurrent: PropertiesType[];
    sortFunctions: SortFunctions;
    cart: CartInterface;
    // noUiSliderCount:  noUiSlider.API;
    reset(): void;
    addFilterListener(): void;
    addSearchListener(): void;
    checkFilterProperties(): boolean;
    changeFilterProperties(valueFilter: string, typeFilter: string): void;
    filtrationCards(): void;
    filtrationData(): void;
    filterType(instrument: PropertiesType): boolean;
    filterProducer(instrument: PropertiesType): boolean;
    filterColor(instrument: PropertiesType): boolean;
    filterPopular(instrument: PropertiesType): boolean;
    filterPrice(instrument: PropertiesType): boolean;
    filterCount(instrument: PropertiesType): boolean;
    filterSearch(instrument: PropertiesType): boolean;
    generateCards(): void;
    createSlider(): void;
    addSliderListener(sliderPriceElement: HTMLDivElement, sliderCount: HTMLDivElement): void;
    addSortListener(): void;
    sortApply(): void;
}

export interface CartInterface {
    cartContent: PropertiesType;
    addCartListener(): void;
    addInstrument(currentCard: HTMLDivElement): void;
    deleteInstrument(currentCard: HTMLDivElement): void;
    updateCount(): void;
}

// export interface SetLocalStorage<FilterInterface> { (data: FilterInterface): void };
