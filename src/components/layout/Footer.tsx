export default function Footer() {
  return (
    <footer className="border-t-[4px] border-[#111111] bg-[#F9F9F7] mt-16 lg:mt-32">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#111111] pb-8">
          
          <div className="md:col-span-8 md:border-r border-[#111111] pr-8">
            <h2 className="font-serif text-3xl font-black uppercase mb-4 tracking-tighter">Prooemium</h2>
            <p className="font-serif text-neutral-600 leading-relaxed max-w-lg">
              A public journal dedicated to the craft of software, design, and thoughtful engineering. 
              Built with severe constraints and sharp edges.
            </p>
          </div>
          
          <div className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-4 border-b border-[#111111] pb-2 inline-block">Directories</h3>
            <ul className="space-y-2 font-sans text-sm uppercase tracking-wider">
              <li>
                <a href="/" className="hover:text-[#CC0000] underline-offset-4 decoration-2 hover:underline transition-all duration-200">Archives</a>
              </li>
              <li>
                <a href="/about" className="hover:text-[#CC0000] underline-offset-4 decoration-2 hover:underline transition-all duration-200">Manifesto</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#CC0000] underline-offset-4 decoration-2 hover:underline transition-all duration-200">RSS Feed</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono uppercase tracking-widest text-neutral-500">
          <span>&copy; {new Date().getFullYear()} Biowess. All rights reserved.</span>
          <span className="mt-4 md:mt-0">Typeset in Playfair & Garamond</span>
        </div>
      </div>
    </footer>
  );
}
