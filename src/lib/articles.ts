import { Article } from '../types';

// Use eager loading to load all JSON files synchronously during build
const articleModules = (import.meta as any).glob('../content/articles/*.json', { eager: true });

export const getArticles = (): Article[] => {
  const articles: Article[] = [];
  for (const path in articleModules) {
    const mod = articleModules[path] as Record<string, any>;
    articles.push((mod.default || mod) as Article);
  }
  // Sort descending by date
  return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return getArticles().find(a => a.slug === slug);
};
