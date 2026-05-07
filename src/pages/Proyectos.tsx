import { Link } from 'react-router-dom';

export default function Proyectos() {
  return (
    <>
      <nav className="flex justify-between items-center w-full px-margin h-[80px] z-50 fixed bg-background border-b-2 border-primary-fixed top-0">
        <Link to="/" className="text-headline-md font-headline-md font-black tracking-tighter text-primary-fixed">TU RUMBO DIGITAL</Link>
        <div className="hidden md:flex gap-md items-center">
          <Link to="/proyectos" className="text-primary-fixed border-b-4 border-primary-fixed font-label-bold text-label-bold uppercase transition-all duration-75">Proyectos</Link>
          <Link to="/servicios" className="text-on-surface font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 px-base py-xs">Servicios</Link>
          <Link to="/estudio" className="text-on-surface font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 px-base py-xs">Estudio</Link>
          <Link to="/galeria" className="text-on-surface font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 px-base py-xs">Contacto</Link>
        </div>
        <button className="bg-primary-fixed text-on-primary-fixed px-md py-xs font-label-bold text-label-bold uppercase border-2 border-black active:translate-x-1 active:translate-y-1 transition-all">
            START A PROJECT
        </button>
      </nav>

      <main className="pt-[80px]">
        <header className="px-margin py-xl flex flex-col md:flex-row items-end justify-between gap-lg border-b-2 border-primary-fixed bg-surface-container-lowest">
          <div className="max-w-4xl">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-sm block">CASOS DE ÉXITO</span>
            <h1 className="font-display-xl text-display-xl uppercase leading-none mb-md">RESULTADOS QUE <span className="text-primary-fixed">GOLPEAN</span>.</h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl">Diseño de alto impacto y estrategias agresivas para marcas que no temen dominar su mercado.</p>
          </div>
          <div className="hidden lg:block text-vertical font-vertical-caption text-vertical-caption text-primary-fixed uppercase tracking-widest pb-md">
              PORTFOLIO 2024 / SELECCIÓN CURADA
          </div>
        </header>

        <section className="bg-primary-fixed py-sm border-b-2 border-black overflow-hidden flex whitespace-nowrap">
          <div className="marquee font-label-bold text-label-bold text-on-primary-fixed uppercase">
              ROI +300% &bull; ESTRATEGIA VISUAL &bull; IDENTIDAD DE MARCA &bull; CREATIVE DIRECTION &bull; UI/UX DOMINATION &bull; ROI +300% &bull; ESTRATEGIA VISUAL &bull; IDENTIDAD DE MARCA &bull; CREATIVE DIRECTION &bull; UI/UX DOMINATION &bull; ROI +300% &bull; ESTRATEGIA VISUAL &bull; IDENTIDAD DE MARCA &bull; CREATIVE DIRECTION &bull; UI/UX DOMINATION &bull;
          </div>
        </section>

        <section className="px-margin py-xl space-y-xl">
          <article className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
            <div className="md:col-span-7 relative group">
              <div className="absolute -top-4 -left-4 bg-primary-fixed text-on-primary-fixed px-md py-xs font-label-bold text-label-bold z-10 border-2 border-black">
                  01 / CASE STUDY
              </div>
              <div className="border-2 border-primary-fixed overflow-hidden hard-shadow-primary">
                <img alt="Featured Project" className="w-full grayscale hover:grayscale-0 transition-all duration-500 object-cover aspect-[16/9]" data-alt="A high-contrast cinematic shot of a sleek, futuristic skyscraper facade reflecting a neon-lit urban environment at night. The lighting is dominated by deep blacks and electric lime green accents cutting through the darkness. The aesthetic is sharp, professional, and aggressive, representing modern architectural dominance and avant-garde corporate identity." src="https://lh3.googleusercontent.com/aida/ADBb0uiYbZkkQ4ZhRRNoCwKnz-NMnfnXyFjjAFWWr3yAKjjxv1ZFbjUm1syy8caEIZBVzp-YuNGmijPy2r8Ak8nf5P6va0bAeZdsjz7bVfzUL9sBaJIKmmdEHKujGy5C8aJHOOWL_ZDxfUHOxXYsvNldJRvDVTll5ZVlVjlQAaCowDXbe3UrVCcs8UYhIYokaqic02cN_pyjTg71SUwTGo0BHAZ4yOn2CQtKwf_yVgOPt-pjuDf2eXbj80gZq_PIcMe1N03_136kVRN2Og" />
              </div>
            </div>
            <div className="md:col-span-5 pt-md">
              <h2 className="font-headline-lg text-headline-lg uppercase mb-sm">NEON OVERDRIVE</h2>
              <p className="text-on-surface-variant font-body-base text-body-base mb-md">
                  Rediseño integral de la plataforma de streaming para el gigante tecnológico Giga-Core. Implementamos una interfaz ultra-rápida basada en el rendimiento bruto y una estética brutalista refinada.
              </p>
              <div className="grid grid-cols-2 gap-sm mb-lg">
                <div className="border-2 border-primary-fixed p-sm">
                  <span className="block font-label-bold text-label-bold text-primary-fixed">ROI ANUAL</span>
                  <span className="font-headline-md text-headline-md">+215%</span>
                </div>
                <div className="border-2 border-primary-fixed p-sm">
                  <span className="block font-label-bold text-label-bold text-primary-fixed">ENGAGEMENT</span>
                  <span className="font-headline-md text-headline-md">+88%</span>
                </div>
              </div>
              <button className="group flex items-center gap-sm font-label-bold text-label-bold uppercase border-b-2 border-primary-fixed pb-xs hover:text-primary-fixed transition-colors">
                  VER PROYECTO COMPLETO
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
            <div className="md:col-span-5 order-2 md:order-1 pt-md">
              <h2 className="font-headline-lg text-headline-lg uppercase mb-sm">KINETIC LABS</h2>
              <p className="text-on-surface-variant font-body-base text-body-base mb-md">
                  Desarrollo de marca y presencia digital para una incubadora de startups biotecnológicas. El objetivo era romper con la pulcritud aburrida del sector para inyectar urgencia y poder.
              </p>
              <div className="grid grid-cols-2 gap-sm mb-lg">
                <div className="border-2 border-primary-fixed p-sm bg-surface-container-high">
                  <span className="block font-label-bold text-label-bold text-primary-fixed">CONVERSIONES</span>
                  <span className="font-headline-md text-headline-md">+140%</span>
                </div>
                <div className="border-2 border-primary-fixed p-sm bg-surface-container-high">
                  <span className="block font-label-bold text-label-bold text-primary-fixed">TIEMPO CARGA</span>
                  <span className="font-headline-md text-headline-md">-60%</span>
                </div>
              </div>
              <button className="group flex items-center gap-sm font-label-bold text-label-bold uppercase border-b-2 border-primary-fixed pb-xs hover:text-primary-fixed transition-colors">
                  VER PROYECTO COMPLETO
                  <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
            <div className="md:col-span-7 order-1 md:order-2 relative">
              <div className="absolute -top-4 -right-4 bg-primary-fixed text-on-primary-fixed px-md py-xs font-label-bold text-label-bold z-10 border-2 border-black">
                  02 / CASE STUDY
              </div>
              <div className="border-2 border-primary-fixed overflow-hidden hard-shadow-primary">
                <div className="bg-surface-container w-full aspect-[16/9] flex items-center justify-center relative">
                  <img alt="Client Image" className="w-full h-full object-cover mix-blend-overlay opacity-40" data-alt="Abstract microscopic visualization of kinetic energy, featuring sharp geometric shards and organic molecular structures colliding in a void. The color palette is dark charcoal, slate grey, and intense electric lime green highlights that suggest movement and innovation. The visual style is technical, cold, and high-impact." src="https://lh3.googleusercontent.com/aida/ADBb0uiYbZkkQ4ZhRRNoCwKnz-NMnfnXyFjjAFWWr3yAKjjxv1ZFbjUm1syy8caEIZBVzp-YuNGmijPy2r8Ak8nf5P6va0bAeZdsjz7bVfzUL9sBaJIKmmdEHKujGy5C8aJHOOWL_ZDxfUHOxXYsvNldJRvDVTll5ZVlVjlQAaCowDXbe3UrVCcs8UYhIYokaqic02cN_pyjTg71SUwTGo0BHAZ4yOn2CQtKwf_yVgOPt-pjuDf2eXbj80gZq_PIcMe1N03_136kVRN2Og" />
                  <span className="absolute font-display-xl text-display-xl text-primary-fixed opacity-10">KINETIC</span>
                </div>
              </div>
            </div>
          </article>

          <article className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">
            <div className="md:col-span-12 lg:col-span-8 bg-surface-container p-lg border-2 border-primary-fixed hard-shadow-primary">
              <div className="flex flex-col md:flex-row gap-lg">
                <div className="flex-shrink-0 w-32 h-32 bg-primary-fixed border-2 border-black flex items-center justify-center">
                  <span className="material-symbols-outlined text-[64px] text-on-primary-fixed">bolt</span>
                </div>
                <div>
                  <span className="font-label-bold text-label-bold text-primary-fixed uppercase block mb-xs">03 / SPECIAL FEATURE</span>
                  <h2 className="font-headline-lg text-headline-lg uppercase mb-md">CYBER-MALL REDUX</h2>
                  <p className="text-on-surface-variant font-body-base text-body-base mb-md max-w-xl">
                      Transformación de una plataforma e-commerce de moda urbana. Eliminamos la fricción visual y creamos un sistema de compra de alta intensidad que incrementó el ticket promedio en un 45%.
                  </p>
                  <div className="flex gap-lg">
                    <div>
                      <span className="block font-label-bold text-label-bold text-primary-fixed">TICKET PROMEDIO</span>
                      <span className="font-headline-md text-headline-md">+$85.00</span>
                    </div>
                    <div>
                      <span className="block font-label-bold text-label-bold text-primary-fixed">RETENCIÓN</span>
                      <span className="font-headline-md text-headline-md">92%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </section>

        <section className="px-margin py-xl border-t-2 border-primary-fixed bg-primary-fixed text-on-primary-fixed">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto py-lg">
            <h2 className="font-display-xl text-display-xl uppercase mb-md">¿TU MARCA ES LO SUFICIENTEMENTE <span className="bg-black text-primary-fixed px-sm">FUERTE</span>?</h2>
            <p className="font-headline-md text-headline-md mb-lg">No hacemos cosas "bonitas". Hacemos cosas que funcionan y dominan. Hablemos de tu próximo gran impacto.</p>
            <button className="bg-black text-primary-fixed px-xl py-md font-label-bold text-label-bold text-[24px] uppercase border-4 border-black hover:bg-transparent hover:text-black transition-all active:translate-x-2 active:translate-y-2">
                EMPEZAR PROYECTO →
            </button>
          </div>
        </section>
      </main>

      <footer className="grid grid-cols-1 md:grid-cols-2 gap-md w-full px-margin py-lg bg-surface-container-highest border-t-2 border-primary-fixed">
        <div className="flex flex-col justify-between gap-md">
          <div className="text-headline-lg font-headline-lg font-black text-primary-fixed">TU RUMBO DIGITAL</div>
          <div className="font-label-bold text-label-bold text-on-surface-variant uppercase">©2024 TU RUMBO DIGITAL KINETIC ADVERTISING</div>
        </div>
        <div className="grid grid-cols-2 gap-md">
          <div className="flex flex-col gap-xs">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-xs">CONTACTO</span>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Instagram</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">LinkedIn</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Vimeo</Link>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-xs">ESTUDIO</span>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Newsletter</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Carreras</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Manifesto</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
