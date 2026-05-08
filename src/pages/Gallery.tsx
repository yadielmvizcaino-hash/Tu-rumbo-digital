import { motion } from "motion/react";
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
        className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white min-h-screen antialiased"
      >
        <motion.h1 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter mb-16"
        >
          GALERÍA <span className="text-[#d4ff00] italic">PROYECTOS</span>
        </motion.h1>
        
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
            <div className="aspect-square bg-zinc-800 border-2 border-[#d4ff00] hard-shadow-lime hover:scale-105 transition-transform duration-300"></div>
            <div className="aspect-square bg-zinc-800 border-2 border-[#d4ff00] hard-shadow-lime hover:scale-105 transition-transform duration-300"></div>
        </motion.div>
      </motion.main>

      <Footer />
    </>
  );
}
