import { Link } from 'react-router-dom';
import { Camera, Video, Share2, PenTool, Flame, Target, ArrowRight, Compass } from "lucide-react";

export default function Home() {
  return (
    <>
      <nav className="flex justify-between items-center w-full px-10 h-[80px] z-50 fixed bg-[#121414] border-b-2 border-transparent top-0">
        <Link to="/" className="text-2xl font-black italic tracking-tighter text-primary-fixed uppercase">TU RUMBO DIGITAL</Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/proyectos" className="text-primary-fixed border-b-4 border-primary-fixed font-bold text-sm uppercase transition-all duration-75 pb-1">PROYECTOS</Link>
          <Link to="/servicios" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">SERVICIOS</Link>
          <Link to="/estudio" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">ESTUDIO</Link>
          <Link to="/galeria" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">CONTACTO</Link>
        </div>
        <button className="bg-primary-fixed text-black px-6 py-3 font-bold text-sm uppercase border-2 border-primary-fixed hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_#ffffff] transition-all flex items-center gap-2">
            INICIAR PROYECTO <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </nav>

      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 border-b-2 border-primary-container bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img alt="Nightlife scene" className="w-full h-full object-cover" data-alt="A high-contrast, kinetic brutalist style photo of a vibrant, packed nightclub dance floor bathed in intense neon lime and stark white strobe lighting. Deep, inky black shadows contrast sharply with explosive, glowing brights. The camera captures motion blur from energetic dancers, conveying raw power and nightlife dominance. The aesthetic is loud, unapologetic, and highly structured, fitting a professional creative agency portfolio." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrHeB-r-Oxsi2S8SM8T_eMOgnUOuiTUE6bf1zL7YVMiq67yHXyUg8mtQSJQinxnZWZeZNR8l2a_4R-FI0jdsU9GW78RY5QHLHKyPrDERRPxYElc4mkCwGWItqMgNDG5Do8ZGfVEDu64j7EvIY-J-7sNxiFexHSe51M2zqGSJpoZUI3oaQnb7wpsLuEBlaMFFAtOS5MB6fR3bXeeQvlBcM6M30Q_IuZ1p1DuRzleZeEENnZ5z1OmyAGXRYCtEDzZAf6Gsy6Y_iaGo" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 w-full px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          <div className="lg:col-span-11 pl-4">
            <h1 className="text-[120px] font-black text-white uppercase mb-8 leading-[0.85] tracking-tighter drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
                HACEMOS QUE<br />
                TU <span className="text-primary-container">NEGOCIO</span><br />
                BRILLE
            </h1>
            <div className="border-l-4 border-primary-container pl-6 mb-12">
              <p className="text-3xl font-bold text-gray-300 max-w-2xl leading-tight">
                  Estrategias visuales de alto impacto que dominan la noche.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/proyectos" className="bg-primary-container text-black font-bold text-sm px-8 py-4 uppercase border-2 border-primary-container hover:-translate-y-1 hover:translate-x-[-4px] hover:shadow-[4px_4px_0_0_#ffffff] transition-all flex items-center gap-3 w-fit">
                  VER PORTAFOLIO <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </Link>
              <Link to="/servicios" className="bg-transparent text-white font-bold text-sm px-8 py-4 uppercase border-2 border-white hover:bg-white hover:text-black transition-all flex items-center gap-3 w-fit">
                  NUESTROS SERVICIOS <Compass className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-1 justify-end items-end pb-10 relative">
            <div className="absolute right-0 bottom-0 text-[10px] font-bold text-primary-container tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 uppercase border-l border-primary-container pl-2 h-64">
              AGENCIA CREATIVA / EST. 2024 // TU RUMBO DIGITAL
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-10 border-b-2 border-primary-container bg-[#121414] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b-2 border-[#333535] pb-8">
            <h2 className="text-[80px] font-black text-white uppercase leading-none tracking-tighter">
              SERVICIOS <br/>
              <span className="text-[#0044FF]">NÚCLEO</span>
            </h2>
            <div className="font-bold text-sm text-gray-400 uppercase text-right tracking-widest leading-relaxed">
                LO QUE HACEMOS <br/> MEJOR QUE NADIE
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#1a1c1c] p-8 group relative overflow-hidden border border-[#333535]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0044FF] -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform duration-500"></div>
              <Camera className="w-10 h-10 text-primary-container mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white uppercase mb-4 relative z-10">Fotografía</h3>
              <p className="text-gray-400 relative z-10">Capturamos la esencia cruda y la energía de tus eventos con precisión técnica.</p>
            </div>
            <div className="bg-[#1a1c1c] p-8 group relative overflow-hidden border border-[#333535]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0044FF] -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform duration-500"></div>
              <Video className="w-10 h-10 text-primary-container mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white uppercase mb-4 relative z-10">Video</h3>
              <p className="text-gray-400 relative z-10">Producciones audiovisuales cinemáticas que cuentan historias inmersivas.</p>
            </div>
            <div className="bg-[#1a1c1c] p-8 group relative overflow-hidden border border-[#333535]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0044FF] -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform duration-500"></div>
              <Share2 className="w-10 h-10 text-primary-container mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white uppercase mb-4 relative z-10">Social Media</h3>
              <p className="text-gray-400 relative z-10">Gestión agresiva y estratégica de redes para dominar el feed.</p>
            </div>
            <div className="bg-[#1a1c1c] p-8 group relative overflow-hidden border border-[#333535]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0044FF] -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform duration-500"></div>
              <PenTool className="w-10 h-10 text-primary-container mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white uppercase mb-4 relative z-10">Graphic Design</h3>
              <p className="text-gray-400 relative z-10">Diseño visual brutalista y pulido que exige atención inmediata.</p>
            </div>
            <div className="bg-[#1a1c1c] p-8 group relative overflow-hidden border border-[#333535]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0044FF] -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform duration-500"></div>
              <Flame className="w-10 h-10 text-primary-container mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white uppercase mb-4 relative z-10">Branding</h3>
              <p className="text-gray-400 relative z-10">Construcción de identidades de marca sólidas e inconfundibles.</p>
            </div>
            <div className="bg-[#1a1c1c] p-8 group relative overflow-hidden border border-[#333535]">
              <div className="absolute top-0 right-0 w-16 h-16 bg-[#0044FF] -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform duration-500"></div>
              <Target className="w-10 h-10 text-primary-container mb-6 relative z-10" strokeWidth={1.5} />
              <h3 className="text-3xl font-bold text-white uppercase mb-4 relative z-10">Digital Ads</h3>
              <p className="text-gray-400 relative z-10">Campañas de conversión letales optimizadas para ROI máximo.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full pt-16 pb-8 bg-[#121414]">
        <div className="px-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-[#d4ff00] pt-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-black text-primary-fixed uppercase tracking-tighter">TU RUMBO DIGITAL</h2>
            <div className="font-bold text-[10px] text-primary-fixed tracking-[0.3em] uppercase">
              © 2024 TU RUMBO DIGITAL. ALL RIGHTS RESERVED.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-8 font-bold text-sm text-gray-500 tracking-[0.2em] uppercase">
            <Link to="/" className="hover:text-white transition-colors duration-200">INSTAGRAM</Link>
            <Link to="/" className="hover:text-white transition-colors duration-200">LINKEDIN</Link>
            <Link to="/" className="hover:text-white transition-colors duration-200">BEHANCE</Link>
            <Link to="/" className="hover:text-white transition-colors duration-200">NEWSLETTER</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
