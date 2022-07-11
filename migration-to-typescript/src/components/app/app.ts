import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppInterface } from '../../types/index';

class App implements AppInterface {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    private addClickListenerToBurger(documentSources: HTMLDivElement) {
        const burger = document.querySelector('.burger') as HTMLDivElement;
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

    public start() {
        const documentSources = document.querySelector('.sources') as HTMLDivElement;
        this.addClickListenerToBurger(documentSources);
        documentSources.addEventListener('click', (e) => {
            this.controller.getNews(e, (data) => this.view.drawNews(data));
        });
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
