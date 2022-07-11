import './global.css';
import { createCards } from './components/card/card';
import { Product } from './components/types/types';
import * as productsBase from './components/json-files/product-catalog.json'; // declare module (d.ts)

const data: Array<Product> = productsBase;

createCards(data);
