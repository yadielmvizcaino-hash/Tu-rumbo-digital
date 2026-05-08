import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="bg-background text-on-background font-body-base antialiased">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center px-margin pt-20 pb-32 border-b-2 border-primary-fixed bg-grid-pattern min-h-[921px]">
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
            <img alt="Nightlife scene" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjrHeB-r-Oxsi2S8SM8T_eMOgnUOuiTUE6bf1zL7YVMiq67yHXyUg8mtQSJQinxnZWZeZNR8l2a_4R-FI0jdsU9GW78RY5QHLHKyPrDERRPxYElc4mkCwGWItqMgNDG5Do8ZGfVEDu64j7EvIY-J-7sNxiFexHSe51M2zqGSJpoZUI3oaQnb7wpsLuEBlaMFFAtOS5MB6fR3bXeeQvlBcM6M30Q_IuZ1p1DuRzleZeEENnZ5z1OmyAGXRYCtEDzZAf6Gsy6Y_iaGo" />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            <h1 className="font-display-xl text-[50px] md:text-display-xl leading-none text-white tracking-tighter mb-md break-words uppercase">
              HACEMOS QUE TU <br/><span className="text-primary-fixed">NEGOCIO</span> BRILLE
            </h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant max-w-3xl mb-lg border-l-4 border-primary-fixed pl-sm">
                Estrategias visuales de alto impacto que dominan la noche.
            </p>
            <div className="flex flex-wrap gap-sm mt-lg">
              <Link to="/proyectos" className="bg-primary-fixed text-black py-4 px-8 font-label-bold text-label-bold uppercase border-2 border-primary-fixed hard-shadow hover:translate-y-base transition-transform flex items-center gap-xs">
                VER PORTAFOLIO <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/servicios" className="bg-transparent border-2 border-white text-white py-4 px-8 font-label-bold text-label-bold uppercase hover:bg-white hover:text-black transition-all flex items-center gap-xs">
                NUESTROS SERVICIOS <span className="material-symbols-outlined">explore</span>
              </Link>
            </div>
          </div>
          {/* Vertical Text */}
          <div className="hidden lg:flex justify-end items-end absolute right-10 top-0 bottom-10 pb-10">
            <div className="border-l-2 border-primary-fixed pl-xs text-primary-fixed font-vertical-caption text-vertical-caption uppercase [writing-mode:vertical-rl] rotate-180">
              AGENCIA CREATIVA // EST. 2024 // TU RUMBO DIGITAL
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="px-margin py-xl bg-surface border-b-2 border-primary-fixed">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-lg border-b-2 border-surface-variant pb-md">
                <h2 className="font-headline-lg text-headline-lg text-primary uppercase">SERVICIOS <br/><span className="text-primary-fixed">NÚCLEO</span></h2>
                <div className="hidden md:block font-label-bold text-label-bold text-on-surface-variant uppercase text-right">
                    LO QUE HACEMOS <br/> MEJOR QUE NADIE
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {[
                    { icon: "photo_camera", title: "FOTOGRAFÍA", desc: "Capturamos la esencia cruda y la energía de tus eventos con precisión técnica." },
                    { icon: "videocam", title: "VIDEO", desc: "Producciones audiovisuales cinemáticas que cuentan historias inmersivas." },
                    { icon: "share", title: "SOCIAL MEDIA", desc: "Gestión agresiva y estratégica de redes para dominar el feed." },
                    { icon: "brush", title: "GRAPHIC DESIGN", desc: "Diseño visual brutalista y pulido que exige atención inmediata." },
                    { icon: "local_fire_department", title: "BRANDING", desc: "Construcción de identidades de marca sólidas e inconfundibles." },
                    { icon: "ads_click", title: "DIGITAL ADS", desc: "Campañas de conversión letales optimizadas para ROI máximo." }
                ].map((s, i) => (
                    <div key={i} className="bg-surface-container p-md brutal-border group hover:-translate-y-2 transition-transform relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-primary-fixed -mr-8 -mt-8 rotate-45 transform group-hover:scale-150 transition-transform"></div>
                        <span className="material-symbols-outlined text-4xl text-primary-fixed mb-sm relative z-10">{s.icon}</span>
                        <h3 className="font-headline-md text-headline-md text-primary uppercase mb-xs relative z-10">{s.title}</h3>
                        <p className="font-body-base text-on-surface-variant relative z-10">{s.desc}</p>
                    </div>
                ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}