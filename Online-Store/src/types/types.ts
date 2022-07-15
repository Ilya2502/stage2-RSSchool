export type ProductType = Record<string, string>;

export interface StoreInterface {
    data: Array<ProductType>;
    start(): void;
}

export interface InstrumentInterface {
    properties: ProductType,
    createCard(): HTMLDivElement;
}

export interface CardInterface {
    properties: ProductType,
    createContainer(): HTMLDivElement,
    createName(): HTMLDivElement,
    createImageContainer(): HTMLDivElement,
    createImage(item: ProductType): HTMLDivElement,
    createList(item: ProductType): HTMLUListElement
}
