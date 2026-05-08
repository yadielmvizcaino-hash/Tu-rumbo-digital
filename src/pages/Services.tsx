import { Camera, Video } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Services() {
  return (
    <>
      <Navigation />
      
      <main className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white min-h-screen antialiased">
        <header className="mb-16">
          <span className="text-[#d4ff00] font-bold text-lg uppercase tracking-[0.2em] mb-4 block">OUR ARSENAL</span>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">SERVICIOS <br/><span className="text-[#d4ff00] italic">RADICALES</span></h1>
          <p className="mt-8 text-gray-300 text-xl max-w-lg">Transformamos marcas mediante ejecución visual agresiva y estrategia de alto impacto.</p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-zinc-700 p-10 hover:border-[#d4ff00] transition-colors">
                <Camera className="w-12 h-12 text-[#d4ff00] mb-8" />
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">FOTOGRAFÍA</h2>
                <p className="text-gray-400">Captura de producto con iluminación técnica agresiva.</p>
            </div>
            <div className="border border-zinc-700 p-10 hover:border-[#d4ff00] transition-colors">
                <Video className="w-12 h-12 text-[#d4ff00] mb-8" />
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">VIDEO REELS</h2>
                <p className="text-gray-400">Edición cinética y rítmica.</p>
            </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
