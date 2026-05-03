export interface ArticleContent {
  type: 'paragraph' | 'heading' | 'quote' | 'image' | 'separator';
  text?: string;
  url?: string;
  alt?: string;
  citation?: string;
}

export interface Article {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  author: string;
  content: ArticleContent[];
}
