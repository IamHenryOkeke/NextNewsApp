export interface TopHeadlinesSearchParamsProptypes {
  searchParams: {
    country: string,
    category: string
  }
}

export interface EverythingSearchParamsProptypes {
  searchParams: {
    q: string,
    sources: string
  }
}

export interface NewsProp {
  id: string,
  author: string,
  description: string,
  publishedAt: string,
  source: {
    id: string,
    name: string
  },
  title: string,
  url: string,
  urlToImage: string
}

export interface ArticlesProp {
  data: NewsProp[],
}

export interface LinksType {
  path: string,
  name: string
}