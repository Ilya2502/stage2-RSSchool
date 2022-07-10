import './sources.css';
import { Source, SourcesInterface } from '../../../types/index';

class Sources implements SourcesInterface {
    public draw(data: Array<Source>) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLElement;

            const sourceCloneItemName = sourceClone.querySelector('.source__item-name') as HTMLSpanElement;
            sourceCloneItemName.textContent = item.name;
            const sourceCloneItem = sourceClone.querySelector('.source__item') as HTMLDivElement;
            sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const documentSources = document.querySelector('.sources') as HTMLDivElement;
        documentSources.append(fragment);
    }
}

export default Sources;
