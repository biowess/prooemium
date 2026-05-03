import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getArticleBySlug } from '../lib/articles';

type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'quote'; text: string; citation?: string }
  | { type: 'image'; url?: string; alt?: string }
  | { type: 'separator' };

type ArticleType = {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  content: ContentBlock[];
};

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);

    const loadArticle = async () => {
      setLoading(true);

      if (!slug) {
        setArticle(null);
        setLoading(false);
        return;
      }

      const result = await getArticleBySlug(slug);
      setArticle(result ?? null);
      setLoading(false);
    };

    loadArticle();
  }, [slug]);

  if (loading) {
    return (
      <div className="p-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Loading...</h1>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="p-16 text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Article Not Found</h1>
        <Link
          to="/"
          className="text-sm font-mono uppercase tracking-widest border-b border-[#111111] hover:text-[#CC0000] hover:border-[#CC0000]"
        >
          Return to Index
        </Link>
      </div>
    );
  }

  return (
    <article className="grid grid-cols-1 md:grid-cols-12 min-h-screen">
      {/* Left Sidebar Metadata */}
      <aside className="md:col-span-3 border-b md:border-b-0 md:border-r border-[#111111] p-6 lg:p-10 flex flex-col pt-12">
        <div className="sticky top-32">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest font-bold mb-12 hover:text-[#CC0000] transition-colors"
          >
            &larr; Back to Index
          </Link>

          <div className="space-y-6 text-sm font-mono uppercase tracking-widest">
            <div>
              <span className="block text-neutral-400 mb-1">Published</span>
              <span className="font-bold">{article.date}</span>
            </div>
            <div>
              <span className="block text-neutral-400 mb-1">Author</span>
              <span className="font-bold">{article.author}</span>
            </div>
            <div>
              <span className="block text-neutral-400 mb-1">Read Time</span>
              <span className="font-bold">{article.readTime}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="md:col-span-9 p-6 sm:p-10 lg:p-16 xl:p-24 bg-white relative">
        <div className="max-w-2xl mx-auto">
          <header className="mb-16 border-b-4 border-[#111111] pb-12">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-8">
              {article.title}
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-neutral-600 italic leading-relaxed">
              {article.excerpt}
            </p>
          </header>

          <div className="space-y-8 font-serif text-lg sm:text-xl leading-relaxed text-[#111111] article-content">
            {article.content.map((block, idx) => {
              const isFirstParagraph = idx === 0 && block.type === 'paragraph';

              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={idx} className={`text-justify ${isFirstParagraph ? 'drop-cap' : ''}`}>
                      {block.text}
                    </p>
                  );

                case 'heading':
                  return (
                    <h2 key={idx} className="text-3xl font-black mt-16 mb-6 tracking-tight">
                      {block.text}
                    </h2>
                  );

                case 'quote':
                  return (
                    <blockquote
                      key={idx}
                      className="border-l-[4px] border-[#111111] pl-6 my-12 italic text-2xl text-neutral-700 bg-neutral-50 p-6 hard-shadow-hover"
                    >
                      <p>&quot;{block.text}&quot;</p>
                      {block.citation && (
                        <footer className="text-sm font-mono uppercase tracking-widest not-italic mt-4 text-[#111111] font-bold">
                          — {block.citation}
                        </footer>
                      )}
                    </blockquote>
                  );

                case 'image':
                  return (
                    <figure key={idx} className="my-12 border border-[#111111] p-2 bg-[#F9F9F7]">
                      {block.url ? (
                        <div className="grayscale hover:sepia-[50%] transition-all duration-500">
                          <img
                            src={block.url}
                            alt={block.alt ?? ''}
                            className="w-full h-auto border border-[#111111]"
                          />
                        </div>
                      ) : (
                        <div className="relative min-h-[300px] flex items-center justify-center border border-[#111111]">
                          <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] opacity-10 bg-[size:16px_16px]" />
                          <span className="relative z-10 font-mono text-xs uppercase tracking-widest bg-white px-2 py-1 border border-black">
                            Image Unavailable
                          </span>
                        </div>
                      )}
                      {block.alt && (
                        <figcaption className="mt-4 text-xs font-mono uppercase tracking-widest text-neutral-500 border-t border-[#111111] pt-2">
                          Fig {idx + 1}. {block.alt}
                        </figcaption>
                      )}
                    </figure>
                  );

                case 'separator':
                  return (
                    <div key={idx} className="py-8 text-center font-serif text-2xl text-neutral-400 tracking-[1em]">
                      &#x2727; &#x2727; &#x2727;
                    </div>
                  );

                default:
                  return null;
              }
            })}
          </div>

          <footer className="mt-24 pt-8 border-t border-[#111111] flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-widest font-bold">End of Article</span>
            <span className="w-8 h-8 bg-black flex relative">
              {/* Small decorative black square */}
            </span>
          </footer>
        </div>
      </div>
    </article>
  );
}
