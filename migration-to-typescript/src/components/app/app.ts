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

    start() {
        const documentSources = document.querySelector('.sources') as HTMLTemplateElement;
        documentSources.addEventListener('click', (e) =>
            this.controller.getNews(e, (data) => this.view.drawNews(data))
        );
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
