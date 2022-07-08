
export interface SourceResponse {
    status: string;
    sources: Array<SourceItem>;
}

export interface SourceItem {
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
    totalResults: number;
    articles: Array<ArticlesItem>;
}

export interface ArticlesItem {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

export interface Source {
    id: string;
    name: string;
}

export interface Options {
    [key: string]: string;
}