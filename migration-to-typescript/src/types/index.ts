
export interface SourceResponse {
    status: string;
    sources: Array<Source>;
}

export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface ArticlesResponse {
    status: string;
    totalResults: Readonly<number>;
    articles: Array<Article>;
}

export interface Article {
    source: Pick<Source, "id" | "name">
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export type Options = Record<string, string>;

export interface Callback<T> { (data: T): void };

export interface NewsInterface {
    draw(data: Array<Article>): void;
}

export interface SourcesInterface {
    draw(data: Array<Source>): void;
}

export interface AppViewInterface {
    drawNews(data: ArticlesResponse): void;
    drawSources(data: SourceResponse): void;
}

export interface LoaderInterface {
    baseLink: string;
    options: Options;
}

export interface AppControllerInterface extends LoaderInterface {
    getSources(callback: Callback<SourceResponse>): void;
    getNews(e: MouseEvent, callback: Callback<ArticlesResponse>): void;
}

export interface AppInterface {
    start(): void;
}
