import { Link } from 'react-router-dom';
import { ArrowRight } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-[80px] bg-background text-on-background font-body-base antialiased">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center px-margin pt-xl pb-lg overflow-hidden border-b-2 border-primary-fixed">
          <div className="z-10">
            <p className="text-primary-fixed font-label-bold text-label-bold mb-xs uppercase tracking-[0.2em]">AGENCIA CREATIVA DE ALTO IMPACTO</p>
            <h1 className="font-display-xl text-display-xl leading-none text-white tracking-tighter mb-md break-words uppercase">
              HACEMOS QUE TU <br/><span className="text-primary-fixed italic underline decoration-4 underline-offset-8">NEGOCIO</span> BRILLE
            </h1>
            <div className="flex flex-col gap-4 mt-lg">
              <Link to="/proyectos" className="w-full md:w-fit bg-primary-fixed text-black py-md px-lg font-headline-md text-headline-md flex justify-between items-center hard-shadow active:translate-y-base transition-transform">
                EXPLORAR TRABAJOS
                <ArrowRight className="w-md h-md" />
              </Link>
            </div>
          </div>
        </section>

        {/* Kinetic Marquee */}
        <section className="bg-primary-fixed py-sm border-b-2 border-black rotate-[-2deg] scale-105 z-20 relative my-lg overflow-hidden">
          <div className="whitespace-nowrap">
            <div className="inline-block animate-marquee font-black text-black text-2xl tracking-tighter flex gap-lg items-center">
              <span>ESTRATEGIA VISUAL • DISEÑO RADICAL • DESARROLLO DE PRODUCTO • BRANDING DISRUPTIVO • MARKETING DE GUERRILLA</span>
            </div>
          </div>
        </section>

        {/* Services Stack */}
        <section className="px-margin py-xl bg-background">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-md text-center">SERVICIOS</h2>
          <div className="grid grid-cols-1 gap-md">
            {[
              { num: "01/", title: "IDENTIDAD VISUAL", desc: "Sistemas de marca que capturan la atención instantáneamente en mercados saturados." },
              { num: "02/", title: "DESARROLLO WEB", desc: "Experiencias digitales optimizadas para la conversión con un estilo técnico impecable." },
              { num: "03/", title: "PAUTA DIGITAL", desc: "Estrategias de crecimiento basadas en datos para maximizar el ROI de tu inversión publicitaria." }
            ].map((s, i) => (
              <div key={i} className="border-2 border-primary-fixed p-lg bg-black hover:bg-zinc-900 group transition-colors duration-300">
                <span className="text-4xl text-primary-fixed mb-md block font-black">{s.num}</span>
                <h3 className="text-3xl font-bold mb-xs text-white uppercase tracking-tighter">{s.title}</h3>
                <p className="text-zinc-400 font-body-base">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proyectos Recientes */}
        <section className="px-margin py-xl bg-white text-black">
          <h2 className="text-6xl font-black uppercase tracking-tighter mb-lg leading-none">PROYECTOS RECIENTES</h2>
          <article className="space-y-md">
            <div className="border-4 border-black p-2">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4ki4AsfGD82QtSaxcWfDWwDjoTGC9kbwEzh8-Zczr6Ctj4CpUAnZBsX91I1ixOxJD6nbhSG4jSEoZ8MkqQLTU3rFh53lD0H_zST1rrjyuk4HV12EGRn6GVzQLusxPPxGUFRzo5baCIvHdAV_7MdfEAO7CSlmVxKX9KH3ysGceqjT6xBpK2B3tQTVLrvBx3DX9FS0pSklS9WlQf-MD-v1XoLpdUn-mn6xCc29z-CJrrBl8UbBkRob5X5HXwubsb67KEDbCgbbZClk" alt="Proy" className="w-full aspect-[16/9] object-cover" />
            </div>
            <p className="font-bold text-zinc-500 uppercase">TECH RETAIL</p>
            <h4 className="text-4xl font-black uppercase tracking-tighter">NEON CORE V.1 ★</h4>
            <div className="bg-black text-white p-lg border-r-[12px] border-b-[12px] border-primary-fixed mt-md">
                <p className="text-primary-fixed font-bold uppercase mb-xs">CASE STUDY</p>
                <h4 className="text-2xl font-black mb-md uppercase">¿CÓMO ESCALAMOS UNA STARTUP FINTECH UN 300%?</h4>
                <Link to="/proyectos" className="text-primary-fixed font-black underline underline-offset-4 uppercase tracking-widest text-sm">LEER MÁS →</Link>
            </div>
          </article>
        </section>

        {/* Contact Form */}
        <section className="px-margin py-xl bg-background border-t-2 border-primary-fixed">
          <h2 className="text-6xl font-black text-white mb-lg uppercase tracking-tighter">¿LISTO PARA EL IMPACTO?</h2>
          <form className="space-y-md max-w-lg">
            <input className="w-full bg-transparent border-2 border-zinc-700 p-md text-white outline-none focus:border-primary-fixed" placeholder="TU NOMBRE" />
            <input className="w-full bg-transparent border-2 border-zinc-700 p-md text-white outline-none focus:border-primary-fixed" placeholder="EMAIL" type="email" />
            <textarea className="w-full bg-transparent border-2 border-zinc-700 p-md text-white outline-none focus:border-primary-fixed" placeholder="MENSAJE" rows={4} />
            <button className="w-full bg-primary-fixed text-black py-md font-black uppercase text-xl hover:bg-white transition-colors" type="submit">ENVIAR PROPUESTA</button>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
}