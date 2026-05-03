import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#CC0000] selection:text-white">
      <Header />
      <main className="flex-grow w-full max-w-screen-xl mx-auto">
        {/* Main newspaper grid container */}
        <div className="border-x border-[#111111] bg-[#F9F9F7] min-h-full">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
