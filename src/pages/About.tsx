import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function About() {

 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 min-h-[70vh]">
      <div className="md:col-span-4 lg:col-span-3 border-b md:border-b-0 md:border-r border-[#111111] p-6 lg:p-12 relative">
        <div className="newsprint-texture absolute inset-0 z-0 opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight tracking-tighter uppercase break-words">
            About<br/>The<br/>Author
          </h1>


<div className="w-full aspect-[3/4] border border-[#111111] bg-neutral-200 mb-8 grayscale relative overflow-hidden">
  <img 
    src="/public/assets/photo.png" 
    alt="Author" 
    className="w-full h-full object-cover"
  />
  {/* This maintains your cool newsprint dot effect over the photo */}
  <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] bg-[size:8px_8px] opacity-20 pointer-events-none"></div>
</div>


          <div className="text-xs font-mono uppercase tracking-widest border-t border-[#111111] pt-4 space-y-2 font-bold text-neutral-600">
             <p>Location: Node.js / V8</p>
             <p>Occupation: Medical Student</p>
             <p>Status: Compiling...</p>
          </div>
        </div>
      </div>
      
      <div className="md:col-span-8 lg:col-span-9 p-8 lg:p-16 xl:p-24 bg-white flex flex-col justify-center">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-black mb-12 tracking-tight">The Manifesto</h2>
          
          <div className="space-y-8 font-serif text-xl leading-relaxed text-[#111111] text-justify">
            <p className="drop-cap">
              We live in an age of infinite scroll and rounded corners. Everything is soft, bouncy, and begging for attention. The web has become a carnival of distractions.
            </p>
            <p>
              This space is an attempt at the opposite. It is an exercise in restraint. The constraints are simple: absolute geometry, strict typography, and zero superfluous decoration. If an element does not serve the text, it is removed.
            </p>
            <p>
              By limiting the visual vocabulary to black, white, and a single accent color, we force the content to carry the weight. The structure becomes visible. The hierarchy becomes undeniable.
            </p>
            <blockquote className="border-l-[4px] border-[#111111] pl-6 my-12 italic text-2xl text-neutral-700">
              "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
            </blockquote>
            <p>
              I write at the intersection of clinical precision, software systems, and the deliberate craft of design. This is a space for exploring how we build, how we heal, and the art found in between. Expect slow, deliberate dispatches.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t-[4px] border-[#111111] w-32"></div>
        </div>
      </div>
    </div>
  );
}
