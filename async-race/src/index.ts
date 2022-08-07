import Garage from './components/garage/garage';
// import Car from './components/car/car';
import './global.css';
import './components/garage/style.css';
import './components/car/style.css';
import './components/winners/style.css';
import Winners from './components/winners/winners';

const garage = new Garage();
const winners = new Winners();
const init = async () => {
    await garage.init();
    winners.init();
    garage.addNavigationListener();
};
init();
