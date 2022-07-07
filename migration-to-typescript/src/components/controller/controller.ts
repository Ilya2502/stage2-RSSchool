import AppLoader from './appLoader';
import { SourceResp, ArticlesResp } from '../../types/index';
interface ICallbackSource<SourceResp> {
    (data: SourceResp): void;
}

interface ICallbackEverything<ArticlesResp> {
    (data: ArticlesResp): void;
}

class AppController extends AppLoader {
    getSources(callback: ICallbackSource<SourceResp>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: PointerEvent, callback: ICallbackEverything<ArticlesResp>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = <HTMLElement>target.parentNode;
        }
    }
}

export default AppController;
