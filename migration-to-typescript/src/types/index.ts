
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
    totalResults: number;
    articles: Array<ArticlesItem>;
}

export interface ArticlesItem {
    source: Pick<Source, "id" | "name">
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

// export interface Source {
//     id: string;
//     name: string;
// }

export interface Options {
    [key: string]: string;
}