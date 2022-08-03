export interface item {
  author: string;
  categories: string[];
  content: string;
  pubDate: string;
  description: string;
  thumbnail: string;
  title: string;
  guid: string;
}
export interface returns {
  status: string;
  feed: object;
  items: item[];
}
export const url =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@oluwaborihamzat";
export {default as getArticles} from './getArticles'
export {default as fetcher} from './fetcher'