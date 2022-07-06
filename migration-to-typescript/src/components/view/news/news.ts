import './news.css';
import { ArticlesItem } from '../../../types/index';

class News {
    draw(data: Array<ArticlesItem>) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;
            const newsCloneItem = newsClone.querySelector('.news__item') as HTMLDivElement;

            if (idx % 2) newsCloneItem.classList.add('alt');

            const newsCloneMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLDivElement;
            newsCloneMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            const newsCloneMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLLIElement;
            newsCloneMetaAuthor.textContent = item.author || item.source.name;
            const newsCloneMetaDate = newsClone.querySelector('.news__meta-date') as HTMLLIElement;
            newsCloneMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsCloneDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLTitleElement;
            newsCloneDescriptionTitle.textContent = item.title;
            const newsCloneDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLTitleElement;
            newsCloneDescriptionSource.textContent = item.source.name;
            const newsCloneDescriptionContent = newsClone.querySelector(
                '.news__description-content'
            ) as HTMLParagraphElement;
            newsCloneDescriptionContent.textContent = item.description;
            const newsCloneReadMore = newsClone.querySelector('.news__read-more a') as HTMLLinkElement;
            newsCloneReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const documentNews = document.querySelector('.news') as HTMLDivElement;
        documentNews.innerHTML = '';
        documentNews.appendChild(fragment);
    }
}

export default News;
