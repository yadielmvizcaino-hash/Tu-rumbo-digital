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
        className="pt-[120px] pb-24 px-margin bg-background text-on-background font-body-base antialiased min-h-screen"
      >
        <header className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6 border-b-2 border-primary-fixed pb-8">
          <div className="max-w-4xl w-full">
            <span className="text-primary-fixed font-label-bold text-label-bold uppercase tracking-[0.2em] mb-4 block">CASOS DE ÉXITO</span>
            <h1 className="font-display-xl text-[50px] md:text-[80px] text-white uppercase leading-none tracking-tighter break-words w-full">RESULTADOS QUE <span className="text-primary-fixed">GOLPEAN</span>.</h1>
          </div>
        </header>

        <section className="space-y-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex gap-8 overflow-x-auto pb-8 snap-x hide-scrollbar"
          >
            {[1, 2, 3].map((i) => (
              <motion.article 
                key={i}
                className="grid grid-cols-1 gap-12 items-start min-w-[85vw] md:min-w-[50vw] snap-center shrink-0"
              >
                <div className="bg-surface-container border-2 border-primary-fixed p-lg hard-shadow-yellow w-full">
                  <div className="text-primary-fixed font-label-bold text-label-bold mb-4 uppercase">0{i} / CASE STUDY</div>
                  <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter mb-6 break-words w-full">NEON OVERDRIVE</h2>
                  <p className="text-on-surface-variant font-body-base mb-8 max-w-xl">Rediseño integral de plataforma de streaming con estética brutalista refinada.</p>
                  <button className="text-primary-fixed font-label-bold text-label-bold uppercase flex items-center gap-2 border-b-2 border-primary-fixed pb-1 hover:text-white hover:border-white transition-all w-max w-full md:w-max">
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
