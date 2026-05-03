import { Article } from '../types';

const articleModules = import.meta.glob('../content/articles/*.json', {
  eager: true,
}) as Record<string, { default: Article }>;

export const getArticles = (): Article[] => {
  return Object.values(articleModules)
    .map((mod) => mod.default)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string) => {
  return getArticles().find((a) => a.slug === slug);
};
