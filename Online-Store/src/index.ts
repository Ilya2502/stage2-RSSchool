import './global.css';
import { loadProducts } from './components/load-products/load-products';
import { ProductType } from './components/types/types';
import productsBase from './components/json-files/product-catalog.json';
// import * as productsBase from './components/json-files/product-catalog.json'; // declare module (d.ts)

// const data: Array<Product> = productsBase;

loadProducts(<ProductType[]>productsBase);
