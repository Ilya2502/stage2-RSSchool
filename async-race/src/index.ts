import Garage from './components/garage/garage';
import Winners from './components/winners/winners';
import './global.css';
import './components/garage/style.css';
import './components/car/style.css';
import './components/winners/style.css';

const garage = new Garage();
const winners = new Winners();
const init = async () => {
    garage.init();
    winners.init();
    garage.addNavigationListener();
};
init();
