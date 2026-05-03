import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { getArticles } from '../lib/articles';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 


  const articles = getArticles();

  if (articles.length === 0) {
    return (
      <div className="p-8 text-center font-serif">
        <p className="text-xl">No dispatches found.</p>
      </div>
    );
  }

  // Feature the first article
  const featured = articles[0];
  const list = articles.slice(1);

  return (
    <div>
      {/* Featured Article - Full Width on mobile, spanning cols on desktop */}
      <section className="grid grid-cols-1 md:grid-cols-12 border-b border-[#111111]">
        <div className="md:col-span-8 p-6 lg:p-12 md:border-r border-[#111111] group">
          <Link to={`/article/${featured.slug}`} className="block">
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-[#111111] text-white px-2 py-1 text-xs font-mono uppercase tracking-widest font-bold">Front Page</span>
              <span className="text-sm font-mono uppercase tracking-widest text-neutral-500">{featured.date}</span>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter mb-6 group-hover:underline decoration-4 underline-offset-8 decoration-[#CC0000]">
              {featured.title}
            </h2>
            
            <p className="font-serif text-lg lg:text-2xl text-neutral-700 leading-relaxed max-w-3xl mb-8">
              {featured.excerpt}
            </p>
            
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest border-t border-[#111111] pt-4 inline-flex">
              <span className="font-bold">By {featured.author}</span>
              <span className="text-neutral-400">|</span>
              <span>{featured.readTime}</span>
            </div>
          </Link>
        </div>

        {/* Sidebar for other stuff or top picks if any. We'll use it for a manifesto snippet for now */}
        <div className="md:col-span-4 p-6 lg:p-12 relative overflow-hidden hidden md:block">
          <div className="newsprint-texture absolute inset-0 z-0"></div>
          <div className="relative z-10">
            <h3 className="font-mono text-sm font-bold tracking-widest uppercase mb-4 border-b-2 border-[#111111] pb-2 inline-block">
              Notice to Readers
            </h3>
            <p className="font-serif text-base leading-relaxed text-justify mt-4">
              This publication is bound by severe constraints. Sharp edges. No rounded corners. Black ink on paper. 
              We believe that structure provides the greatest freedom for expression. 
            </p>
            <div className="mt-8 text-center font-serif text-2xl text-neutral-400 tracking-[0.5em]">
              &#x2727; &#x2727; &#x2727;
            </div>
          </div>
        </div>
      </section>

      {/* Grid of older articles */}
      {list.length > 0 && (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {list.map((article, idx) => {
            // Calculate borders to ensure a tight grid without double lines
            // On mobile, just border-b. On desktop, border-r on all but the last in a row.
            const isLastInRowMd = (idx + 1) % 2 === 0;
            const isLastInRowLg = (idx + 1) % 3 === 0;
            
            return (
              <article 
                key={article.slug} 
                className={`p-6 md:p-8 border-b border-[#111111] group hover:bg-neutral-100 transition-colors duration-200 block border-r-[#111111]
                  ${!isLastInRowMd ? 'md:border-r' : 'md:border-r-0'}
                  ${!isLastInRowLg ? 'lg:border-r' : 'lg:border-r-0'}
                `}
              >
                <Link to={`/article/${article.slug}`} className="block h-full flex flex-col">
                  <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 pb-2 border-b border-neutral-300">
                    {article.date}
                  </div>
                  <h3 className="text-3xl font-black mb-3 leading-tight tracking-tight group-hover:text-[#CC0000] transition-colors">
                    {article.title}
                  </h3>
                  <p className="font-serif text-neutral-700 leading-relaxed flex-grow mb-6">
                    {article.excerpt}
                  </p>
                  <div className="text-xs font-mono uppercase tracking-widest mt-auto mt-4 pt-4 border-t border-neutral-300">
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              </article>
            );
          })}
        </section>
      )}
    </div>
  );
}
