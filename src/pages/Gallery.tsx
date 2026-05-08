import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Gallery() {
  return (
    <>
      <Navigation />
      
      <main className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white min-h-screen antialiased">
        <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-16">GALERÍA <span className="text-[#d4ff00] italic">PROYECTOS</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="aspect-square bg-zinc-800 border-2 border-[#d4ff00]"></div>
            <div className="aspect-square bg-zinc-800 border-2 border-[#d4ff00]"></div>
        </div>
      </main>

      <Footer />
    </>
  );
}
