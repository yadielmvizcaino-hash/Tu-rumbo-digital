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
        className="pt-[120px] pb-24 px-margin bg-background text-on-background min-h-screen antialiased"
      >
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="font-display-xl text-[50px] md:text-[80px] text-white uppercase leading-[0.9] tracking-tighter break-words w-full"
          >
            SOMOS <br/><span className="text-primary-fixed">TU RUMBO.</span>
          </motion.h1>
          <motion.p 
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="max-w-sm text-on-surface-variant font-label-bold text-label-bold uppercase text-left md:text-right w-full"
          >
            Transformamos la visión comercial en realidad estética.
          </motion.p>
        </header>

        <motion.section 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-primary-fixed text-black p-lg hard-shadow w-full"
        >
            <h2 className="font-label-bold text-label-bold uppercase mb-4">MANIFIESTO</h2>
            <p className="font-headline-md text-headline-md font-black uppercase tracking-tighter leading-tight">El impacto no es un accidente. La belleza sin fuerza es solo decoración.</p>
        </motion.section>
      </motion.main>

      <Footer />
    </>
  );
}
