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
