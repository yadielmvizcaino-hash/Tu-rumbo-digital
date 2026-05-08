import { motion } from "motion/react";
import { Camera, Video } from "lucide-react";
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
        className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white min-h-screen antialiased"
      >
        <header className="mb-16">
          <motion.span variants={itemVariants} className="text-[#ffe600] font-bold text-lg uppercase tracking-[0.2em] mb-4 block">OUR ARSENAL</motion.span>
          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-black uppercase leading-none tracking-tighter">SERVICIOS <br/><span className="text-[#ffe600] italic">RADICALES</span></motion.h1>
          <motion.p variants={itemVariants} className="mt-8 text-gray-300 text-xl max-w-lg">Transformamos marcas mediante ejecución visual agresiva y estrategia de alto impacto.</motion.p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="border-2 border-zinc-700 p-10 hover:border-[#ffe600] transition-colors hard-shadow">
                <Camera className="w-12 h-12 text-[#ffe600] mb-8" />
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">FOTOGRAFÍA</h2>
                <p className="text-gray-400">Captura de producto con iluminación técnica agresiva.</p>
            </motion.div>
            <motion.div variants={itemVariants} className="border-2 border-zinc-700 p-10 hover:border-[#ffe600] transition-colors hard-shadow">
                <Video className="w-12 h-12 text-[#ffe600] mb-8" />
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-4">VIDEO REELS</h2>
                <p className="text-gray-400">Edición cinética y rítmica.</p>
            </motion.div>
        </section>
      </motion.main>

      <Footer />
    </>
  );
}
