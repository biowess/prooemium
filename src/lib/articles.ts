import { Article } from '../types';

const articleModules = import.meta.glob('../content/articles/*.json');

let cachedArticles: Article[] | null = null;

const isArticle = (a: any): a is Article => {
  return (
    a &&
    typeof a.slug === 'string' &&
    typeof a.title === 'string' &&
    typeof a.date === 'string' &&
    typeof a.excerpt === 'string' &&
    typeof a.readTime === 'string' &&
    typeof a.author === 'string' &&
    Array.isArray(a.content)
  );
};

export const getArticles = async (): Promise<Article[]> => {
  if (cachedArticles) return cachedArticles;

  const modules = await Promise.all(
    Object.values(articleModules).map((loader) => loader())
  );

  const articles = modules
    .map((mod: any) => mod.default)
    .filter(isArticle);

  cachedArticles = articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return cachedArticles;
};

export const getArticleBySlug = async (slug: string) => {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug) || null;
};
