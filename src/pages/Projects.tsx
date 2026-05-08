import { ArrowRight } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Navigation />
      
      <main className="pt-[120px] pb-xl px-10 bg-zinc-950 text-white font-body-base antialiased">
        {/* Header Section */}
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-[#d4ff00] pb-8">
          <div className="max-w-4xl">
            <span className="text-[#d4ff00] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">CASOS DE ÉXITO</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">RESULTADOS QUE <span className="text-[#d4ff00]">GOLPEAN</span>.</h1>
          </div>
        </header>

        {/* Projects Grid */}
        <section className="space-y-24">
          {/* Project 1 */}
          <article className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7 bg-zinc-800 border-2 border-[#d4ff00] p-8">
              <div className="text-[#d4ff00] font-bold text-sm mb-4">01 / CASE STUDY</div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">NEON OVERDRIVE</h2>
              <p className="text-gray-300 text-lg mb-8">Rediseño integral de plataforma de streaming con estética brutalista refinada.</p>
              <button className="text-[#d4ff00] font-bold uppercase tracking-widest flex items-center gap-2 border-b-2 border-[#d4ff00] pb-1 hover:text-white hover:border-white transition-all">
                VER PROYECTO <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="md:col-span-5 aspect-square bg-zinc-900 border-2 border-white"></div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}
