import './global.css';
import './components/card/card.css';
import './components/filter/filter.css';
import './components/cart/cart.css';
import Store from './components/store/store';

const store = new Store();
store.start();
