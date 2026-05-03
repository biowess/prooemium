import { Article } from '../types';

const articleModules = import.meta.glob('../content/articles/*.json');

let cachedArticles: Article[] | null = null;

export const getArticles = async (): Promise<Article[]> => {
  if (cachedArticles) return cachedArticles;

  const modules = await Promise.all(
    Object.values(articleModules).map((loader) => loader())
  );

  cachedArticles = modules
    .map((mod: any) => mod.default as Article)
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );

  return cachedArticles;
};

export const getArticleBySlug = async (slug: string) => {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug);
};
