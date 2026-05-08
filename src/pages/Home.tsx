import { Link } from 'react-router-dom';
import { Camera, Video, Share2, PenTool, Flame, Target, ArrowRight, Compass } from "lucide-react";
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />

      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 border-b-2 border-primary-container bg-grid-pattern overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img alt="Nightlife scene" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrHeB-r-Oxsi2S8SM8T_eMOgnUOuiTUE6bf1zL7YVMiq67yHXyUg8mtQSJQinxnZWZeZNR8l2a_4R-FI0jdsU9GW78RY5QHLHKyPrDERRPxYElc4mkCwGWItqMgNDG5Do8ZGfVEDu64j7EvIY-J-7sNxiFexHSe51M2zqGSJpoZUI3oaQnb7wpsLuEBlaMFFAtOS5MB6fR3bXeeQvlBcM6M30Q_IuZ1p1DuRzleZeEENnZ5z1OmyAGXRYCtEDzZAf6Gsy6Y_iaGo" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 w-full px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 pt-10">
          <div className="lg:col-span-11 pl-0 md:pl-4">
            <h1 className="text-6xl md:text-[120px] font-black text-white uppercase mb-8 leading-[0.9] md:leading-[0.85] tracking-tighter drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]">
                HACEMOS QUE<br />
                TU <span className="text-primary-container">NEGOCIO</span><br />
                BRILLE
            </h1>
            <div className="border-l-4 border-primary-container pl-6 mb-12">
              <p className="text-xl md:text-3xl font-bold text-gray-300 max-w-2xl leading-tight">
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
            <h2 className="text-4xl md:text-[80px] font-black text-white uppercase leading-none tracking-tighter">
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

      <Footer />
    </>
  );
}
