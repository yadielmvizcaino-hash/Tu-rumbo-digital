import { Link } from 'react-router-dom';

export default function Servicios() {
  return (
    <>
      <header className="bg-background dark:bg-background border-b-2 border-primary-fixed dark:border-primary-fixed flex justify-between items-center w-full px-margin h-[80px] z-50 fixed top-0">
        <Link to="/" className="text-headline-md font-headline-md font-black tracking-tighter text-primary-fixed dark:text-primary-fixed uppercase">TU RUMBO DIGITAL</Link>
        <nav className="hidden md:flex gap-md">
          <Link to="/proyectos" className="text-on-surface dark:text-on-surface font-label-bold font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Proyectos</Link>
          <Link to="/servicios" className="text-primary-fixed dark:text-primary-fixed border-b-4 border-primary-fixed font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Servicios</Link>
          <Link to="/estudio" className="text-on-surface dark:text-on-surface font-label-bold font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Estudio</Link>
          <Link to="/galeria" className="text-on-surface dark:text-on-surface font-label-bold font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Contacto</Link>
        </nav>
        <button className="bg-primary-fixed text-on-primary-fixed px-md py-xs font-label-bold text-label-bold uppercase hover:bg-on-background hover:text-background transition-all duration-75 active:scale-95">
            START A PROJECT
        </button>
      </header>

      <main className="pt-[80px]">
        <section className="relative min-h-[80vh] flex items-center px-margin py-xl overflow-hidden">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 opacity-20 vertical-text font-display-xl text-primary-fixed uppercase select-none pointer-events-none">
              SERVICIOS KINETIC
          </div>
          <div className="z-10 w-full md:w-3/4">
            <div className="inline-block bg-primary-fixed text-on-primary-fixed px-sm py-xs font-label-bold text-label-bold uppercase mb-md">
                Capabilities 2024
            </div>
            <h1 className="font-display-xl text-display-xl text-white uppercase leading-none mb-lg">
                ESTRATEGIA <br/>
                <span className="text-primary-fixed">VISUAL</span> <br/>
                RADICAL
            </h1>
            <p className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl">
                No hacemos publicidad. Creamos impacto cinético que domina el mercado digital a través de estética bruta y tecnología de punta.
            </p>
          </div>
        </section>

        <div className="bg-primary-fixed py-sm border-y-2 border-black overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-[marquee_20s_linear_infinite]">
            <span className="font-label-bold text-headline-md text-black uppercase mx-md italic">PHOTOGRAPHY &mdash; VIDEO &mdash; SOCIAL MEDIA &mdash; BRANDING &mdash; ADS &mdash; PHOTOGRAPHY &mdash; VIDEO &mdash; SOCIAL MEDIA &mdash; BRANDING &mdash; ADS &mdash; </span>
          </div>
        </div>

        <section className="px-margin py-xl grid grid-cols-1 md:grid-cols-12 gap-gutter">
          <div className="md:col-span-7 bg-surface-container border-2 border-primary-fixed p-lg flex flex-col justify-between group hover:bg-primary-fixed transition-colors duration-300 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-symbols-outlined text-[200px]" data-icon="auto_awesome">auto_awesome</span>
            </div>
            <div>
              <span className="font-label-bold text-label-bold text-primary-fixed uppercase group-hover:text-black mb-sm block">01 / BRANDING</span>
              <h2 className="font-headline-lg text-headline-lg uppercase mb-md group-hover:text-black">IDENTIDAD QUE GOLPEA</h2>
              <p className="font-body-base text-body-base text-on-surface-variant group-hover:text-black mb-lg max-w-lg">
                  Diseñamos sistemas visuales agresivos que no piden permiso. Desde logotipos crudos hasta guías de estilo mutantes para la era digital.
              </p>
            </div>
            <button className="flex items-center gap-xs font-label-bold text-label-bold uppercase border-2 border-primary-fixed w-fit px-md py-sm group-hover:border-black group-hover:bg-black group-hover:text-primary-fixed">
                EXPLORAR BRANDING <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </div>

          <div className="md:col-span-5 relative group border-2 border-white overflow-hidden aspect-square md:aspect-auto h-full">
            <img alt="Cinematic Studio Photography" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida/ADBb0uiYbZkkQ4ZhRRNoCwKnz-NMnfnXyFjjAFWWr3yAKjjxv1ZFbjUm1syy8caEIZBVzp-YuNGmijPy2r8Ak8nf5P6va0bAeZdsjz7bVfzUL9sBaJIKmmdEHKujGy5C8aJHOOWL_ZDxfUHOxXYsvNldJRvDVTll5ZVlVjlQAaCowDXbe3UrVCcs8UYhIYokaqic02cN_pyjTg71SUwTGo0BHAZ4yOn2CQtKwf_yVgOPt-pjuDf2eXbj80gZq_PIcMe1N03_136kVRN2Og" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            <div className="absolute bottom-md left-md">
              <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-xs block">02 / FOTOGRAFÍA</span>
              <h3 className="font-headline-md text-headline-md uppercase text-white">ÓPTICA HIGH-END</h3>
            </div>
          </div>

          <div className="md:col-span-12 bg-white border-2 border-black p-lg flex flex-col md:flex-row items-center gap-lg group">
            <div className="w-full md:w-1/2">
              <div className="bg-black text-white w-20 h-20 flex items-center justify-center mb-md group-hover:bg-primary-fixed group-hover:text-black transition-colors">
                <span className="material-symbols-outlined text-4xl" data-icon="videocam">videocam</span>
              </div>
              <span className="font-label-bold text-label-bold text-black opacity-60 uppercase mb-xs block">03 / VIDEO PRODUCTION</span>
              <h2 className="font-headline-lg text-headline-lg text-black uppercase mb-md">NARRATIVA KINÉTICA</h2>
              <p className="font-body-base text-body-base text-black mb-md">
                  Contenido dinámico para marcas que no se detienen. Comerciales, Reels y producciones experimentales que capturan la atención en 1.5 segundos.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-64 bg-surface-container-highest border-4 border-black relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="material-symbols-outlined text-display-xl opacity-20" data-icon="play_circle">play_circle</span>
              </div>
              <div className="absolute inset-0 bg-black opacity-10"></div>
            </div>
          </div>

          <div className="md:col-span-6 bg-secondary-container p-lg border-2 border-white group relative">
            <span className="font-label-bold text-label-bold text-white uppercase mb-sm block">04 / SOCIAL MEDIA</span>
            <h2 className="font-headline-md text-headline-md text-white uppercase mb-lg">DOMINACIÓN DE FEED</h2>
            <ul className="space-y-sm mb-xl">
              <li className="flex items-center gap-sm border-b border-white/20 pb-xs">
                <span className="material-symbols-outlined text-primary-fixed" data-icon="trending_up">trending_up</span>
                <span className="font-label-bold uppercase">Growth Strategy</span>
              </li>
              <li className="flex items-center gap-sm border-b border-white/20 pb-xs">
                <span className="material-symbols-outlined text-primary-fixed" data-icon="content_copy">content_copy</span>
                <span className="font-label-bold uppercase">Viral Content</span>
              </li>
              <li className="flex items-center gap-sm border-b border-white/20 pb-xs">
                <span className="material-symbols-outlined text-primary-fixed" data-icon="chat_bubble">chat_bubble</span>
                <span className="font-label-bold uppercase">Community Management</span>
              </li>
            </ul>
            <button className="bg-white text-black font-label-bold text-label-bold uppercase px-md py-sm hover:translate-x-2 transition-transform">
                GET THE CLOUT
            </button>
          </div>

          <div className="md:col-span-6 bg-surface-dim border-2 border-primary-fixed p-lg hard-shadow-lime flex flex-col justify-center items-center text-center">
            <span className="material-symbols-outlined text-[100px] text-primary-fixed mb-md" data-icon="ads_click">ads_click</span>
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-sm block">05 / PAID ADS</span>
            <h2 className="font-headline-md text-headline-md text-white uppercase mb-md">RESULTADOS SIN FILTRO</h2>
            <p className="font-body-base text-body-base text-on-surface-variant mb-lg">
                Inversión inteligente en Meta y Google Ads. Maximizamos el ROAS con creativos que detienen el scroll.
            </p>
            <div className="w-full h-1 bg-surface-container-highest mb-lg overflow-hidden">
              <div className="bg-primary-fixed h-full w-4/5"></div>
            </div>
            <Link to="/galeria" className="font-label-bold text-label-bold uppercase text-primary-fixed underline hover:no-underline">SOLICITAR AUDITORÍA →</Link>
          </div>
        </section>

        <section className="bg-primary-fixed px-margin py-xl flex flex-col items-center justify-center text-center">
          <h2 className="font-display-xl text-display-xl text-black uppercase leading-none mb-lg">
              ¿LISTO PARA <br/> EL IMPACTO?
          </h2>
          <div className="flex flex-col md:flex-row gap-md">
            <button className="bg-black text-white px-[64px] py-md font-headline-md uppercase border-4 border-black hover:bg-transparent hover:text-black transition-colors active:scale-95">
                HABLEMOS AHORA
            </button>
            <button className="bg-transparent text-black px-[64px] py-md font-headline-md uppercase border-4 border-black hover:bg-black hover:text-white transition-colors active:scale-95">
                VER PORTFOLIO
            </button>
          </div>
        </section>
      </main>

      <footer className="bg-surface-container-highest dark:bg-surface-container-highest border-t-2 border-primary-fixed grid grid-cols-1 md:grid-cols-2 gap-md w-full px-margin py-lg">
        <div className="flex flex-col justify-between gap-md">
          <div className="text-headline-lg font-headline-lg font-black text-primary-fixed uppercase leading-none">TU RUMBO<br/>DIGITAL</div>
          <p className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold">©2024 TU RUMBO DIGITAL KINETIC ADVERTISING</p>
        </div>
        <div className="grid grid-cols-2 gap-md">
          <div className="flex flex-col gap-sm">
            <h4 className="text-primary-fixed font-label-bold text-label-bold uppercase">Connect</h4>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Instagram</Link>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">LinkedIn</Link>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Vimeo</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="text-primary-fixed font-label-bold text-label-bold uppercase">Newsletter</h4>
            <p className="text-on-surface-variant dark:text-on-surface-variant text-sm mb-xs">Subscríbete al caos creativo.</p>
            <div className="flex border-b-2 border-primary-fixed">
              <input className="bg-transparent border-none outline-none focus:ring-0 text-white w-full placeholder:text-on-surface-variant/50" placeholder="EMAIL" type="email" />
              <button className="text-primary-fixed p-xs"><span className="material-symbols-outlined" data-icon="send">send</span></button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
