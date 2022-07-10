import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppInterface } from '../../types/index';

class App implements AppInterface {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    addClickListenerToBurger(burger: HTMLDivElement, documentSources: HTMLDivElement) {
        function toggleMenu(): void {
            burger.classList.toggle('burger-open');
            documentSources.classList.toggle('menu-open');
        }
        burger.addEventListener('click', toggleMenu);
        documentSources.addEventListener('click', () => {
            burger.classList.remove('burger-open');
            documentSources.classList.remove('menu-open');
        });
    }

    start() {
        const burger = document.querySelector('.burger') as HTMLDivElement;
        const documentSources = document.querySelector('.sources') as HTMLDivElement;
        this.addClickListenerToBurger(burger, documentSources);
        documentSources.addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data));
        });
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
