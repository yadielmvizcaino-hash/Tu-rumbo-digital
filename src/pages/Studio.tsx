import { motion } from "motion/react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Studio() {
  return (
    <>
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white min-h-screen antialiased"
      >
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter"
          >
            SOMOS <br/><span className="text-[#ffe600]">TU RUMBO.</span>
          </motion.h1>
          <motion.p 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-sm text-gray-400 font-bold uppercase tracking-widest text-right"
          >
            Transformamos la visión comercial en realidad estética.
          </motion.p>
        </header>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-[#ffe600] text-black p-12 hard-shadow"
        >
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4">MANIFIESTO</h2>
            <p className="text-4xl font-black uppercase tracking-tighter leading-tight">El impacto no es un accidente. La belleza sin fuerza es solo decoración.</p>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  );
}
