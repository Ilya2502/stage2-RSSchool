export type PropertiesType = Record<string, string>;

export interface StoreInterface {
    data: Array<PropertiesType>;
    start(): void;
}

export interface InstrumentInterface {
    properties: PropertiesType,
    createCard(): HTMLDivElement;
}

export interface CardInterface {
    properties: PropertiesType,
    createContainer(): HTMLDivElement,
    createName(): HTMLDivElement,
    createImageContainer(): HTMLDivElement,
    createImage(): HTMLDivElement,
    createList(): HTMLUListElement
}

export type MapperInterface = Record<string, PropertiesType>;
