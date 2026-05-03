import { Article } from '../types';

const articleModules = import.meta.glob('../content/articles/*.json');

let cachedArticles: Article[] | null = null;

export const getArticles = async (): Promise<Article[]> => {
  if (cachedArticles) return cachedArticles;

  const modules = await Promise.all(
    Object.values(articleModules).map((loader) => loader())
  );

  const articles: Article[] = modules
    .map((mod: any) => mod.default ?? mod)
    .filter((a: any) =>
      a &&
      typeof a.slug === 'string' &&
      typeof a.title === 'string' &&
      typeof a.date === 'string'
    );

  cachedArticles = articles.sort(
    (a, b) =>
      new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return cachedArticles;
};

export const getArticleBySlug = async (slug: string) => {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug);
};
