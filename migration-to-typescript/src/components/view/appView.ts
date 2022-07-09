import News from './news/news';
import Sources from './sources/sources';
import { ArticlesResponse, SourceResponse, AppViewInterface } from '../../types/index';

export class AppView implements AppViewInterface {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ArticlesResponse) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: SourceResponse) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
