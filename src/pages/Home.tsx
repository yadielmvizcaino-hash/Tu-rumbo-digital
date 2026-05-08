import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-[80px] bg-zinc-950 text-white font-body-base antialiased">
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex flex-col justify-center px-10 pt-12 pb-6 overflow-hidden">
          <div className="z-10">
            <p className="text-[#d4ff00] font-label-bold text-sm uppercase tracking-[0.2em] mb-4">AGENCIA CREATIVA DE ALTO IMPACTO</p>
            <h1 className="text-6xl md:text-[120px] font-black leading-none text-white tracking-tighter mb-8 break-words">
              HACEMOS QUE TU <br/><span className="text-[#d4ff00] italic underline decoration-4 underline-offset-8">NEGOCIO</span> BRILLE
            </h1>
            <div className="flex flex-col gap-4 mt-8">
              <Link to="/proyectos" className="w-full md:w-fit bg-[#d4ff00] text-black py-6 px-8 font-black text-xl flex justify-between items-center hard-shadow hover:translate-y-1 transition-transform">
                EXPLORAR TRABAJOS
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
          {/* Background Image Integration */}
          <div className="absolute right-[-10%] top-[10%] opacity-20 z-0">
            <div className="w-[300px] h-[500px] bg-zinc-800 border-2 border-[#d4ff00]"></div>
          </div>
        </section>

        {/* Kinetic Marquee */}
        <section className="bg-[#d4ff00] py-4 border-y-2 border-black rotate-[-2deg] scale-105 z-20 relative my-12">
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee font-black text-black text-2xl tracking-tighter flex gap-12 items-center">
              <span>ESTRATEGIA VISUAL • DISEÑO RADICAL • DESARROLLO DE PRODUCTO • BRANDING DISRUPTIVO • MARKETING DE GUERRILLA</span>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-10 py-24 bg-zinc-950">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-[2px] flex-grow bg-[#d4ff00]"></div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">SERVICIOS</h2>
            <div className="h-[2px] w-12 bg-[#d4ff00]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-[#d4ff00] p-8 bg-black hover:bg-[#d4ff00] group transition-colors duration-300">
              <span className="text-4xl text-[#d4ff00] group-hover:text-black mb-6 block font-black">01/</span>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-black uppercase">IDENTIDAD VISUAL</h3>
              <p className="text-zinc-400 group-hover:text-black">Sistemas de marca que capturan la atención instantáneamente.</p>
            </div>
            <div className="border-2 border-[#d4ff00] p-8 bg-zinc-900 group transition-colors duration-300">
              <span className="text-4xl text-[#d4ff00] mb-6 block font-black">02/</span>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase">DESARROLLO WEB</h3>
              <p className="text-zinc-400">Experiencias digitales optimizadas para la conversión.</p>
            </div>
            <div className="border-2 border-white p-8 bg-black hover:border-[#d4ff00] transition-colors">
              <span className="text-4xl text-[#d4ff00] mb-6 block font-black">03/</span>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase">PAUTA DIGITAL</h3>
              <p className="text-zinc-400">Estrategias basadas en datos para maximizar el ROI.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
