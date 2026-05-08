import { motion } from "motion/react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Navigation />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-[120px] pb-24 px-margin bg-background text-on-background min-h-screen antialiased"
      >
        <motion.h1 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="font-display-xl text-[50px] md:text-[80px] text-white uppercase leading-none tracking-tighter mb-16 break-words w-full"
        >
          GALERÍA <span className="text-primary-fixed italic">PROYECTOS</span>
        </motion.h1>
        
        <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
            <div className="aspect-square bg-surface-container border-2 border-primary-fixed hard-shadow-yellow hover:scale-105 transition-transform duration-300 w-full"></div>
            <div className="aspect-square bg-surface-container border-2 border-primary-fixed hard-shadow-yellow hover:scale-105 transition-transform duration-300 w-full"></div>
        </motion.div>
      </motion.main>

      <Footer />
    </>
  );
}
