import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Gallery() {
  return (
    <>
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white font-body-base antialiased"
      >
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-[#d4ff00] pb-8">
          <div className="max-w-4xl">
            <span className="text-[#d4ff00] font-bold text-sm uppercase tracking-[0.2em] mb-4 block">CASOS DE ÉXITO</span>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">RESULTADOS QUE <span className="text-[#d4ff00]">GOLPEAN</span>.</h1>
          </div>
        </header>

        <section className="space-y-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 overflow-x-auto pb-8 snap-x"
          >
            {[1, 2, 3].map((i) => (
              <motion.article 
                key={i}
                className="grid grid-cols-1 gap-12 items-start min-w-[80vw] md:min-w-[50vw] snap-center"
              >
                <div className="bg-zinc-800 border-2 border-[#d4ff00] p-8 hard-shadow-lime">
                  <div className="text-[#d4ff00] font-bold text-sm mb-4">0{i} / CASE STUDY</div>
                  <h2 className="text-5xl font-black uppercase tracking-tighter mb-6">NEON OVERDRIVE</h2>
                  <p className="text-gray-300 text-lg mb-8">Rediseño integral de plataforma de streaming con estética brutalista refinada.</p>
                  <button className="text-[#d4ff00] font-bold uppercase tracking-widest flex items-center gap-2 border-b-2 border-[#d4ff00] pb-1 hover:text-white hover:border-white transition-all">
                    VER PROYECTO <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
