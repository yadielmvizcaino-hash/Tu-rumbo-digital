import { motion } from "motion/react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <>
      <Navigation />
      
      <motion.main 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="pt-[120px] pb-24 px-margin bg-background text-on-background min-h-screen antialiased"
      >
        <header className="mb-16">
          <motion.span variants={itemVariants} className="text-primary-fixed font-label-bold text-label-bold uppercase tracking-[0.2em] mb-4 block">OUR ARSENAL</motion.span>
          <motion.h1 variants={itemVariants} className="font-display-xl text-[50px] md:text-[80px] text-white uppercase leading-none tracking-tighter break-words w-full">SERVICIOS <br/><span className="text-primary-fixed italic">RADICALES</span></motion.h1>
          <motion.p variants={itemVariants} className="mt-8 text-on-surface-variant font-body-base max-w-lg">Transformamos marcas mediante ejecución visual agresiva y estrategia de alto impacto.</motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="bg-surface-container border-2 border-surface-variant p-lg hover:border-primary-fixed transition-colors hard-shadow w-full">
                <span className="material-symbols-outlined text-[48px] text-primary-fixed mb-8 block">photo_camera</span>
                <h2 className="font-headline-lg text-[40px] leading-tight font-black text-white uppercase tracking-tighter mb-4">FOTOGRAFÍA</h2>
                <p className="text-on-surface-variant font-body-base">Captura de producto con iluminación técnica agresiva.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="bg-surface-container border-2 border-surface-variant p-lg hover:border-primary-fixed transition-colors hard-shadow w-full">
                <span className="material-symbols-outlined text-[48px] text-primary-fixed mb-8 block">videocam</span>
                <h2 className="font-headline-lg text-[40px] leading-tight font-black text-white uppercase tracking-tighter mb-4">VIDEO REELS</h2>
                <p className="text-on-surface-variant font-body-base">Edición cinética y rítmica.</p>
            </motion.div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
