import { url } from ".";

const getArticles = async <T>(): Promise<T> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}; 

export default getArticles
