import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppInterface } from '../../types/index';

// function toggleMenu() {
//     burger.classList.toggle('burger-open');
// }

class App implements AppInterface {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const burger = document.querySelector('.burger') as HTMLDivElement;
        function toggleMenu(): void {
            burger.classList.toggle('burger-open');
            documentSources.classList.toggle('menu-open');
        }
        burger.addEventListener('click', toggleMenu);
        const documentSources = document.querySelector('.sources') as HTMLDivElement;
        documentSources.addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data));
            burger.classList.remove('burger-open');
            documentSources.classList.remove('menu-open');
        });
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
