import { Link } from 'react-router-dom';

export default function Galeria() {
  return (
    <>
      <nav className="bg-background dark:bg-background border-b-2 border-primary-fixed dark:border-primary-fixed flex justify-between items-center w-full px-margin h-[80px] z-50 fixed top-0">
        <Link to="/" className="text-headline-md font-headline-md font-black tracking-tighter text-primary-fixed dark:text-primary-fixed">TU RUMBO DIGITAL</Link>
        <div className="hidden md:flex gap-md">
          <Link to="/proyectos" className="font-label-bold text-label-bold uppercase text-on-surface dark:text-on-surface transition-all duration-75 hover:bg-primary-fixed hover:text-on-primary-fixed px-sm py-base">Proyectos</Link>
          <Link to="/servicios" className="font-label-bold text-label-bold uppercase text-on-surface dark:text-on-surface transition-all duration-75 hover:bg-primary-fixed hover:text-on-primary-fixed px-sm py-base">Servicios</Link>
          <Link to="/estudio" className="font-label-bold text-label-bold uppercase text-on-surface dark:text-on-surface transition-all duration-75 hover:bg-primary-fixed hover:text-on-primary-fixed px-sm py-base">Estudio</Link>
          <Link to="/galeria" className="font-label-bold text-label-bold uppercase text-primary-fixed dark:text-primary-fixed border-b-4 border-primary-fixed transition-all duration-75 hover:bg-primary-fixed hover:text-on-primary-fixed px-sm py-base">Contacto</Link>
        </div>
        <button className="font-label-bold text-label-bold uppercase bg-primary-fixed text-on-primary-fixed px-md py-sm border-2 border-black active:translate-x-1 active:translate-y-1 transition-all">
            START A PROJECT
        </button>
      </nav>

      <main className="pt-[120px] pb-xl px-margin">
        <section className="mb-xl flex flex-col md:flex-row justify-between items-end gap-md">
          <div className="max-w-4xl">
            <span className="font-label-bold text-label-bold text-primary-fixed mb-sm block">GALERÍA TU RUMBO DIGITAL</span>
            <h1 className="font-display-xl text-display-xl uppercase leading-none">Visual<br/>Kinetic</h1>
          </div>
          <div className="vertical-text font-vertical-caption text-vertical-caption text-surface-variant border-l-2 border-surface-variant pl-base">
              EST. 2024 / MADRID / TOKIO / NYC
          </div>
        </section>

        <div className="flex flex-wrap gap-sm mb-lg border-y-2 border-primary-fixed py-md">
          <button className="px-md py-sm font-label-bold text-label-bold uppercase bg-primary-fixed text-on-primary-fixed border-2 border-black active:scale-95 transition-transform">Todos</button>
          <button className="px-md py-sm font-label-bold text-label-bold uppercase text-on-surface border-2 border-transparent hover:border-primary-fixed active:scale-95 transition-all">Restaurantes</button>
          <button className="px-md py-sm font-label-bold text-label-bold uppercase text-on-surface border-2 border-transparent hover:border-primary-fixed active:scale-95 transition-all">Discotecas</button>
          <button className="px-md py-sm font-label-bold text-label-bold uppercase text-on-surface border-2 border-transparent hover:border-primary-fixed active:scale-95 transition-all">Eventos</button>
        </div>

        <div className="masonry-grid w-full">
          <div className="masonry-item group relative overflow-hidden border-2 border-primary-fixed bg-surface-container">
            <div className="aspect-[3/4] overflow-hidden">
              <img alt="Interior de discoteca de alto impacto" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" data-alt="A high-energy photograph of a futuristic nightclub interior filled with geometric neon lasers and thick artificial fog. The color palette is dominated by deep blacks and vibrant neon electric lime highlights. The composition is dynamic and chaotic, reflecting a brutalist architectural aesthetic with sharp angles and metallic surfaces under strobe lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe1aJreqtWqS8yOOAHKFep3S1ePxXS8lypIV6C_aXdGzmEf1GyOKAr3HT3P0P5KyhLv8n-lA8Hxy6JkMAB16Vgn0fBSydZbtQLz7lpkBdXrX1vabGXBv2hyUj5_VcWnTS6bN2ufwI6mJBSOigVJUYsrR5JzmSOn41TMHft6XZYZvM0VDDJBoxjlzePyq4YHsOj64qG-7OUy-Xt6yQUg6vCpEU5_ST5KqEKt5eJSxVfXtwo4-lqcWb5J4KWL7shlJHJ-RMCDcXD5eY" />
              <div className="lime-hover-overlay absolute inset-0 z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-sm bg-primary-fixed text-on-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="font-label-bold text-label-bold">DISCOTECA KINETIC / 01</p>
            </div>
          </div>

          <div className="masonry-item group relative overflow-hidden border-2 border-primary-fixed bg-surface-container">
            <div className="aspect-[0.67] overflow-hidden">
              <img alt="Canvas Image" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida/ADBb0uiYbZkkQ4ZhRRNoCwKnz-NMnfnXyFjjAFWWr3yAKjjxv1ZFbjUm1syy8caEIZBVzp-YuNGmijPy2r8Ak8nf5P6va0bAeZdsjz7bVfzUL9sBaJIKmmdEHKujGy5C8aJHOOWL_ZDxfUHOxXYsvNldJRvDVTll5ZVlVjlQAaCowDXbe3UrVCcs8UYhIYokaqic02cN_pyjTg71SUwTGo0BHAZ4yOn2CQtKwf_yVgOPt-pjuDf2eXbj80gZq_PIcMe1N03_136kVRN2Og" />
              <div className="lime-hover-overlay absolute inset-0 z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-sm bg-primary-fixed text-on-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="font-label-bold text-label-bold">PROYECTO CANVAS / 02</p>
            </div>
          </div>

          <div className="masonry-item group relative overflow-hidden border-2 border-primary-fixed bg-surface-container">
            <div className="aspect-[4/5] overflow-hidden">
              <img alt="Restaurante Moderno" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" data-alt="An ultra-modern restaurant dining room featuring heavy brutalist concrete pillars and exposed industrial piping. The furniture is minimalist and sharp, with electric lime LED strips accenting the floor perimeters. The scene is captured at night with dramatic shadows and high-contrast lighting, emphasizing the raw architectural power and avant-garde atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa5DRIzG-pICcfM7-PdGPKBSQvehOjYtnKMmhnPspqxXS-XXAoOqWaCddseQN83kBPMl1gFsvrYw07qlLG98cvu7jL8uDz10m8FS41LSm6maBIfUZlADQESdsqEzhmrxk-Yy9RUxGcp70GRiLYmmJ6U05c4cTWUBXe3fEDCEGiHSTkc-SJS-3zW5klOQtHTWYPO5CIr0kHdWS8KdBMTxnoqV9TpMvWbFqQx8et7eZ68sjknU6c5W_6XXUmSSBW90fx8L3xPSlpiCA" />
              <div className="lime-hover-overlay absolute inset-0 z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-sm bg-primary-fixed text-on-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="font-label-bold text-label-bold">RESTAURANTE BRUT / 03</p>
            </div>
          </div>

          <div className="masonry-item group relative overflow-hidden border-2 border-primary-fixed bg-surface-container">
            <div className="aspect-[16/9] overflow-hidden">
              <img alt="Evento a gran escala" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" data-alt="A large scale outdoor music festival event at dusk featuring massive scaffolding towers and an array of high-intensity laser projectors. The light show creates complex geometric patterns in the sky using only electric lime and white beams. The atmosphere is cinematic and epic, with a crowd silhouetted against the intense technological display in a raw, industrial setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCcU8_CvH2_xe3lTrXVEMbsSekGgjjYiKyC8_DeGTrfD7yRT6F2nze6hUfxclV9uy-9Xsd9NSJwr2Xgbg9votJm1fF0wr8-YQInHDfla0dJNKfqbrmpWkzCLmjXkaaLELd_g1vBwduodDytDuX1_oaw_pJt04IMXTxFv4gZObYuLRqT3Y_qdpSpYaTDl0iJRVZsym6ESgT6Et12O_xPgVIFvSRo7o-zoli_odTtAPntxAXZUff-Sprkxeri0BxyTL8ypxfYUDdmNM" />
              <div className="lime-hover-overlay absolute inset-0 z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-sm bg-primary-fixed text-on-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="font-label-bold text-label-bold">GLOBAL EVENT / 04</p>
            </div>
          </div>

          <div className="masonry-item group relative overflow-hidden border-2 border-primary-fixed bg-surface-container">
            <div className="aspect-square overflow-hidden">
              <img alt="Detalle tecnológico" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" data-alt="A close-up macro shot of a sophisticated control panel for a kinetic lighting system. The panel is matte black with heavy metal switches and glowing electric lime digital readouts. The aesthetic is purely technical and industrial-chic, showcasing high-precision engineering and a polished brutalist design language with sharp focus on the tactile textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD87yPjVY1uCL90omPM4yS_p8nLJh0hshpzQVTz1JBGH0VlXCZrsqtCkAhMSOqsMvFOcojxcrkBJaL6iCIJ2f_HrUixRO1Z3lNE3dC1HjHfPwDJzZbEjiCsYNJWXF_hysQhjGDf3ANqUA13m5ZpCzYzts0RtWpyty5oeyyxfsY9Hn-weK7HNfnNUcuh0SauyRMCcu8ZIpex9oJJTP_tL3NNi_b_ycRv8eyIBf6WqSI49iz9GK8nrmZkte-Y47UGyQ_pcSNwuEEwTCQ" />
              <div className="lime-hover-overlay absolute inset-0 z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-sm bg-primary-fixed text-on-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="font-label-bold text-label-bold">SYSTEMS CORE / 05</p>
            </div>
          </div>

          <div className="masonry-item group relative overflow-hidden border-2 border-primary-fixed bg-surface-container">
            <div className="aspect-[9/16] overflow-hidden">
              <img alt="Arquitectura nocturna" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-110" data-alt="A vertical composition showing a towering brutalist skyscraper at night, illuminated by vertical streaks of electric lime light. The building's raw concrete texture is highlighted by harsh, upward-facing floodlights. The dark sky contrasts sharply with the luminous green accents, creating a powerful, imposing presence that defines cutting-edge urban kinetic advertising." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaGPCIvtGAB-BNS5IgUdtZiZL3oNXj8E1elB_Fg3S8SVNPvdslmmLf1iT26LBs8hCXHNT54gl4S6ccJ1GXZPfxl6VqyhBppDv85MD9yP_g-eLtJ8_mRkkUfzUN-wQCr2PoXRlMl5wjEUBdM058jyzSQtXwm911-rCPDmwXNsPrbBwLBnbWVmLGo18tFkz9yzp5sbK_r2OHFYYZFAb87jDJBie4hC58EHMYs46lNjkCQnPGDBKUq-jQj2M9cKSeUtmNUw9bDfVa1fQ" />
              <div className="lime-hover-overlay absolute inset-0 z-10"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-sm bg-primary-fixed text-on-primary-fixed translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
              <p className="font-label-bold text-label-bold">TOWER KINETIC / 06</p>
            </div>
          </div>
        </div>

        <div className="mt-lg flex justify-center">
          <button className="group flex items-center gap-sm bg-background border-2 border-primary-fixed px-xl py-md font-label-bold text-label-bold uppercase text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all">
              Cargar Más Proyectos
              <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>

      <div className="bg-primary-fixed py-sm overflow-hidden whitespace-nowrap border-y-2 border-black mb-0">
        <div className="flex animate-marquee">
          <span className="font-label-bold text-label-bold text-black px-md">TRANSFORMANDO ESPACIOS // KINETIC ADVERTISING // TU RUMBO DIGITAL // EST. 2024 // BREAK THE GRID // TRANSFORMANDO ESPACIOS // KINETIC ADVERTISING // TU RUMBO DIGITAL // EST. 2024 // BREAK THE GRID //</span>
          <span className="font-label-bold text-label-bold text-black px-md">TRANSFORMANDO ESPACIOS // KINETIC ADVERTISING // TU RUMBO DIGITAL // EST. 2024 // BREAK THE GRID // TRANSFORMANDO ESPACIOS // KINETIC ADVERTISING // TU RUMBO DIGITAL // EST. 2024 // BREAK THE GRID //</span>
        </div>
      </div>

      <footer className="bg-surface-container-highest dark:bg-surface-container-highest border-t-2 border-primary-fixed grid grid-cols-1 md:grid-cols-2 gap-md w-full px-margin py-lg">
        <div className="flex flex-col justify-between">
          <h2 className="text-headline-lg font-headline-lg font-black text-primary-fixed leading-none mb-md">TU RUMBO<br/>DIGITAL</h2>
          <p className="font-label-bold text-label-bold text-on-surface-variant max-w-sm">
              Diseño radical para experiencias inolvidables. Brutalismo, luz y movimiento.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-md">
          <div className="flex flex-col gap-sm">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase underline">Social</span>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Instagram</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">LinkedIn</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Vimeo</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase underline">Info</span>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Newsletter</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Privacidad</Link>
            <Link to="/" className="font-label-bold text-label-bold text-on-surface-variant hover:text-primary-fixed hover:skew-x-2 transition-transform">Aviso Legal</Link>
          </div>
        </div>
        <div className="md:col-span-2 pt-lg border-t border-surface-variant">
          <p className="font-label-bold text-label-bold text-on-surface-variant opacity-50 uppercase">©2024 TU RUMBO DIGITAL KINETIC ADVERTISING</p>
        </div>
      </footer>
    </>
  );
}
