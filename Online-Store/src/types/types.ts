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

export interface FilterInterface {
    filterProperties: FilterPropertiesInterface;
    dataCurrent: PropertiesType[];
    addFilterListener(): void;
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
    generateCards(): void;
    createSlider(): void;
    addSliderListener(sliderPriceElement: HTMLDivElement, sliderCount: HTMLDivElement): void;
}
