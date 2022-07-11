import { Product } from '../types/types';
// import * as productsBase from '../json-files/product-catalog.json'; // declare module (d.ts)

// const data: Array<Product> = productsBase;
// const check = fetch('../json-files/product-catalog.json')
//     .then((res) => res.json())
//     .then((data) => console.log(data));

const liClassList = [
    'product-type',
    'product-price',
    'product-producer',
    'product-market-launch-date',
    'product-size',
    'product-color',
];
const liInnerHtmlList = ['Type: ', 'Price: ', 'Producer: ', 'Market launch date: ', 'Size: ', 'Color: '];
const spanClassList = [
    'type-value',
    'price-value',
    'producer-value',
    'market-launch-date-value',
    'size-value',
    'color-value',
];
const spanInnerHtmlList = ['type', 'price', 'producer', 'date', 'size', 'color'];

export function createCards(data: Array<Product>): void {
    // const catalog: Response = await fetch('../../product-catalog.json');
    // const data: Array<Product> = await catalog.json();
    // data.forEach((item) => console.log(item));
    const productsContainer = document.querySelector('.products-container') as HTMLDivElement;
    for (let i = 0; i < data.length; i++) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productsContainer.append(productCard);

        const h3 = document.createElement('h3');
        h3.className = 'product-name';
        h3.innerHTML = data[i].name;
        productCard.append(h3);

        const productImageContainer = document.createElement('div');
        productImageContainer.className = 'product-image-container';
        productCard.append(productImageContainer);

        const img = document.createElement('img');
        img.className = 'product-image';
        img.src = data[i].img;
        img.alt = data[i].name;
        productImageContainer.append(img);

        const ul = document.createElement('ul');
        ul.className = 'product-type';
        productCard.append(ul);

        for (let j = 0; j < 6; j++) {
            const li = document.createElement('li');
            li.className = liClassList[j];
            li.innerHTML = liInnerHtmlList[j];
            ul.append(li);

            const span = document.createElement('span');
            span.className = spanClassList[j];
            span.innerHTML = data[i][spanInnerHtmlList[j] as keyof Product];
            li.append(span);
        }
    }
}
