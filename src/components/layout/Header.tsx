import { Link } from 'react-router-dom';

export default function Header() {
  const currentDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date());

  return (
    <header className="border-b-[4px] border-[#111111] bg-[#F9F9F7] z-40 sticky top-0 relative">
      <div className="newsprint-texture" />
      <div className="max-w-screen-xl mx-auto px-4 relative z-10">
        
        {/* Top Metadata Bar */}
        <div className="flex justify-between items-center py-2 border-b border-[#111111] text-xs font-mono uppercase tracking-widest text-[#525252]">
          <span>Vol. 1.0</span>
          <span className="hidden sm:inline">{currentDate}</span>
          <span>Web Edition</span>
        </div>

        {/* Main Brand */}
        <div className="py-8 text-center flex flex-col items-center border-b border-[#111111]">
          <Link to="/" className="inline-block group">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-2 group-hover:text-[#CC0000] transition-colors duration-200 sharp-corners">
              Prooemium
            </h1>
          </Link>
          <p className="font-serif italic text-lg sm:text-xl text-[#404040]">
            "The quiet geometry of calming thoughts"
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex w-full divide-x divide-[#111111] text-sm font-sans uppercase tracking-widest font-bold box-border">
          <Link 
            to="/" 
            className="flex-1 text-center px-2 py-3 hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors duration-200 box-border"
          >
            Latest Dispatches
          </Link>
          <Link 
            to="/about" 
            className="flex-1 text-center px-2 py-3 hover:bg-[#111111] hover:text-[#F9F9F7] transition-colors duration-200 box-border"
          >
            About the Author
          </Link>
        </nav>

      </div>
    </header>
  );
}
