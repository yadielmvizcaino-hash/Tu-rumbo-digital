import { Link } from 'react-router-dom';

export default function Estudio() {
  return (
    <>
      <nav className="flex justify-between items-center w-full px-margin h-[80px] z-50 bg-background dark:bg-background border-b-2 border-primary-fixed dark:border-primary-fixed docked full-width top-0 sticky">
        <Link to="/" className="text-headline-md font-headline-md font-black tracking-tighter text-primary-fixed dark:text-primary-fixed">TU RUMBO DIGITAL</Link>
        <div className="hidden md:flex gap-md items-center">
          <Link to="/proyectos" className="text-on-surface dark:text-on-surface font-label-bold font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Proyectos</Link>
          <Link to="/servicios" className="text-on-surface dark:text-on-surface font-label-bold font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Servicios</Link>
          <Link to="/estudio" className="text-primary-fixed dark:text-primary-fixed border-b-4 border-primary-fixed font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Estudio</Link>
          <Link to="/galeria" className="text-on-surface dark:text-on-surface font-label-bold font-label-bold text-label-bold uppercase hover:bg-primary-fixed hover:text-on-primary-fixed transition-all duration-75 active:translate-x-1 active:translate-y-1">Contacto</Link>
        </div>
        <button className="bg-primary-fixed text-on-primary-fixed px-sm py-xs font-label-bold text-label-bold uppercase border-2 border-primary-fixed hover:bg-transparent hover:text-primary-fixed transition-all duration-75 active:scale-95">
            START A PROJECT
        </button>
      </nav>

      <main>
        <section className="relative min-h-[80vh] flex flex-col justify-center px-margin pt-xl pb-lg border-b-2 border-primary-fixed">
          <div className="absolute right-margin top-lg hidden lg:block">
            <span className="text-vertical font-label-bold text-label-bold text-primary-fixed uppercase tracking-widest">SINCE 2018 &mdash; BUENOS AIRES &mdash; KINETIC ADVERTISING</span>
          </div>
          <h1 className="font-display-xl text-display-xl text-primary-fixed leading-none">
              ESTUDIO <br/>
              <span className="text-on-background">VISUAL</span>
          </h1>
          <div className="mt-md flex flex-col md:flex-row items-end gap-md">
            <div className="md:w-1/2">
              <p className="font-headline-md text-headline-md max-w-2xl">
                  UNA FUERZA CREATIVA QUE OPERA EN LA INTERSECCIÓN DEL <span className="text-primary-fixed">RUIDO</span> Y EL <span className="text-primary-fixed">ORDEN</span>.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <div className="w-full h-2 bg-primary-fixed"></div>
            </div>
          </div>
        </section>

        <section className="bg-primary-fixed text-on-primary-fixed py-xl px-margin relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full opacity-10 pointer-events-none">
            <div className="marquee font-display-xl text-display-xl font-black uppercase">
                NACIDOS EN LA NOCHE NACIDOS EN LA NOCHE NACIDOS EN LA NOCHE NACIDOS EN LA NOCHE NACIDOS EN LA NOCHE
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
            <div className="md:col-span-12 lg:col-span-8">
              <span className="font-label-bold text-label-bold bg-on-primary-fixed text-primary-fixed px-sm py-base inline-block mb-md">MANIFIESTO 001</span>
              <h2 className="font-headline-lg text-headline-lg mb-lg uppercase">Nacidos en la noche.</h2>
              <div className="space-y-md font-headline-md text-headline-md leading-tight">
                <p>No creemos en la inspiración de oficina. Creemos en la energía cruda de la ciudad cuando se apagan las luces.</p>
                <p>El impacto no es un accidente; es una construcción geométrica, brutal y precisa. Operamos bajo la premisa de que la belleza sin fuerza es solo decoración.</p>
                <p>Nacimos en el underground, diseñamos para el futuro. Sin miedo al contraste, sin miedo al negro absoluto, sin miedo a ser demasiado ruidosos.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl px-margin grid grid-cols-1 md:grid-cols-12 gap-xl items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <div className="border-2 border-primary-fixed p-base">
              <img alt="Impacto Visual Studio Atmosphere" className="w-full grayscale contrast-125 brightness-75 border-2 border-primary-fixed" src="https://lh3.googleusercontent.com/aida/ADBb0uiYbZkkQ4ZhRRNoCwKnz-NMnfnXyFjjAFWWr3yAKjjxv1ZFbjUm1syy8caEIZBVzp-YuNGmijPy2r8Ak8nf5P6va0bAeZdsjz7bVfzUL9sBaJIKmmdEHKujGy5C8aJHOOWL_ZDxfUHOxXYsvNldJRvDVTll5ZVlVjlQAaCowDXbe3UrVCcs8UYhIYokaqic02cN_pyjTg71SUwTGo0BHAZ4yOn2CQtKwf_yVgOPt-pjuDf2eXbj80gZq_PIcMe1N03_136kVRN2Og" />
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2">
            <span className="font-label-bold text-label-bold text-primary-fixed block mb-sm uppercase tracking-widest">// NUESTRA HISTORIA</span>
            <h3 className="font-headline-lg text-headline-lg mb-md">EVOLUCIÓN KINÉTICA.</h3>
            <div className="font-body-base text-body-base space-y-sm max-w-xl text-on-surface-variant">
              <p>Fundada en 2018 como un colectivo de diseño radical, Tu Rumbo Digital se transformó rápidamente en una agencia de publicidad cinética. Rompimos los moldes tradicionales del branding corporativo para inyectar una estética industrial y tecnológica en cada pixel.</p>
              <p>Nuestra trayectoria está marcada por la colaboración con marcas que no temen al riesgo. Hemos construido identidades que sobreviven al caos visual del siglo XXI, utilizando la tipografía como arma y el color lima como nuestra señal de identidad.</p>
            </div>
            <div className="mt-lg grid grid-cols-2 gap-md border-t-2 border-surface-variant pt-md">
              <div>
                <div className="font-display-xl text-headline-lg text-primary-fixed">+150</div>
                <div className="font-label-bold text-label-bold uppercase">PROYECTOS ENTREGADOS</div>
              </div>
              <div>
                <div className="font-display-xl text-headline-lg text-primary-fixed">06</div>
                <div className="font-label-bold text-label-bold uppercase">AÑOS DE IMPACTO</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl px-margin bg-surface-container-lowest">
          <div className="flex flex-col md:flex-row justify-between items-end mb-xl border-b-2 border-primary-fixed pb-md">
            <h2 className="font-headline-lg text-headline-lg uppercase">El Equipo.</h2>
            <p className="font-label-bold text-label-bold text-primary-fixed md:mb-xs">MENTES DETRÁS DEL RUIDO</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
            <div className="group relative bg-surface-container border-2 border-transparent hover:border-primary-fixed transition-all">
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="A striking black and white studio portrait of a male creative director with sharp features. He is wearing a dark minimalist turtleneck, and the lighting is harsh, creating high contrast. Small electric lime geometric accents are superimposed on the image corners to maintain the brand's polished brutalist aesthetic. The mood is professional and intense." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAO65OyFuKCjxVpUSI1RW7k8LVqg__lL3N3seNcXitDJ9lnoUb7y25_6mQ0xdb1Eo-YHel2zNxLdt7q9kti7gyGDor_MyWPLJ2_7rpNmOEmU0s0QMfHYPXToPZ_GFUMUPM5inKmId7fcL6fmj4VHr_mHvTAAUQ9vG8CwVF90l-6tTzMwPITOImmS3yNJugS-0UMTG6YzNoFIGKHqI2xlHSqCVPKJXu9Ct4Qfly_56tYWklO-QL3kJRech6G9LpPNJmLL4Zlt4M9_Hw" />
              </div>
              <div className="p-md relative">
                <div className="absolute -top-md left-md bg-primary-fixed text-on-primary-fixed px-sm py-base font-label-bold text-label-bold uppercase">FOUNDER</div>
                <h4 className="font-headline-md text-headline-md uppercase mt-sm">ALEXIS RIVERA</h4>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase mt-xs">CREATIVE DIRECTOR</p>
                <div className="mt-md flex gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary-fixed">share</span>
                  <span className="material-symbols-outlined text-primary-fixed">add</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-surface-container border-2 border-transparent hover:border-primary-fixed transition-all">
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="A cinematic black and white portrait of a female lead designer in a high-tech studio environment. She has a confident, direct gaze, and the lighting is moody with deep shadows. Minimalist electric lime graphic lines are drawn across the background of the image. The aesthetic is avant-garde and sophisticated, fitting a high-end creative agency profile." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJN9WvO6h3oqGS6-kQ1AyR15tiwDEEPiN-bKecKVFwsFF2nNX5A2HqIcJmbfd5m5yUB3SxQxM9N8yTjW7_Vy_BAp6gGLrFTc9K-y8tgNFf8JAxMdAty5Lg0kKL91_WleC_7QsI5C5ePawZ0NMjGnI_Af3R8glzJs0CY0oyV82gPXawwFViELv9J3_D6ErauFnx47hRHfp1RTK2zzynR76db8kBxMa_bFJMTdBwGWxLCOgLBP62j0Lq21_V6TEcw0L5w-jtkR_Hx0s" />
              </div>
              <div className="p-md relative">
                <div className="absolute -top-md left-md bg-primary-fixed text-on-primary-fixed px-sm py-base font-label-bold text-label-bold uppercase">PARTNER</div>
                <h4 className="font-headline-md text-headline-md uppercase mt-sm">MIA VAZQUEZ</h4>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase mt-xs">HEAD OF DESIGN</p>
                <div className="mt-md flex gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary-fixed">share</span>
                  <span className="material-symbols-outlined text-primary-fixed">add</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-surface-container border-2 border-transparent hover:border-primary-fixed transition-all">
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="A professional black and white portrait of a male technical lead with a modern architectural background. The lighting is dramatic and low-key, highlighting the subject's expression. Subtle electric lime color blocks appear in the margins of the photograph, creating a polished brutalist visual style. The image feels technologically advanced and rock-solid." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB4kPf3pttWJCbrMYp5mDH0xVkk3pzI1ISclrU4NATDN3-X2CQfSKyhS2EKaWeGyQL9O7jVBhsVv2Ug0HWdCYL2uJBiXxDw9Vpei-e_cz47_bLaugx8f95d4kXf7UjnGv4cAvDX7Qq2YOEXcQQL7Yd3hP4ligN9nJocARL7_d1IRDKfgoeVzxpIGwQ20ZSiw9BY1K8NIx1VBWHFt9FuPkRfIIEBQED2oACeGwbMJblWyHxEljmjgJY6dk5NWA_X6bp8ZvVQVIBFjFM" />
              </div>
              <div className="p-md relative">
                <div className="absolute -top-md left-md bg-primary-fixed text-on-primary-fixed px-sm py-base font-label-bold text-label-bold uppercase">TECH</div>
                <h4 className="font-headline-md text-headline-md uppercase mt-sm">JULIÁN MESTRE</h4>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase mt-xs">KINETIC ENGINEER</p>
                <div className="mt-md flex gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary-fixed">share</span>
                  <span className="material-symbols-outlined text-primary-fixed">add</span>
                </div>
              </div>
            </div>

            <div className="group relative bg-surface-container border-2 border-transparent hover:border-primary-fixed transition-all">
              <div className="aspect-[3/4] overflow-hidden bg-black">
                <img className="w-full h-full object-cover grayscale transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" data-alt="A sharp black and white studio headshot of a female brand strategist. The composition is off-center and bold, with strong directional lighting that creates a sense of professional creative power. High-energy electric lime accents are placed strategically near the eyes, signaling innovation and uncompromising clarity. The overall look is polished and dominant." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsEOyy8gyXQDdNLvy0Uqz4sHWlek99aknmGWnHlZftXJ_SsJdaVStvbeNfZhIBPx6x966hLDrFB9BbJjE3bMwGLoK4aUPzGf-KcxurVcNctgS0phbwjMYSkZN49CC-YUhv2ZKjwABJWKD7nKXHY-6TRPEtAkn1oX433M20sasR7WXCkqWBh90aJxBFSkBpv6kjo29S-XpmOTz5_sVwLN4w-XWd7mqYnx8ZTXon2YZAMQMPfpJ6RpG__x4Q2TdLgIrJz9quIPIcb3g" />
              </div>
              <div className="p-md relative">
                <div className="absolute -top-md left-md bg-primary-fixed text-on-primary-fixed px-sm py-base font-label-bold text-label-bold uppercase">STRATEGY</div>
                <h4 className="font-headline-md text-headline-md uppercase mt-sm">SARA COHEN</h4>
                <p className="font-label-bold text-label-bold text-on-surface-variant uppercase mt-xs">BRAND ARCHITECT</p>
                <div className="mt-md flex gap-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-primary-fixed">share</span>
                  <span className="material-symbols-outlined text-primary-fixed">add</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-xl px-margin text-center border-t-2 border-primary-fixed">
          <h2 className="font-display-xl text-display-xl text-primary-fixed uppercase mb-md">¿HACEMOS RUIDO?</h2>
          <p className="font-headline-md text-headline-md mb-lg uppercase">SI BUSCAS LO CONVENCIONAL, ESTÁS EN EL LUGAR EQUIVOCADO.</p>
          <div className="flex justify-center">
            <button className="bg-primary-fixed text-on-primary-fixed text-headline-md px-lg py-md border-4 border-primary-fixed hover:bg-transparent hover:text-primary-fixed transition-all flex items-center gap-sm active:translate-x-2 active:translate-y-2">
                START A PROJECT <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>

      <footer className="grid grid-cols-1 md:grid-cols-2 gap-md w-full px-margin py-lg bg-surface-container-highest dark:bg-surface-container-highest border-t-2 border-primary-fixed">
        <div className="flex flex-col justify-between">
          <div className="text-headline-lg font-headline-lg font-black text-primary-fixed uppercase">TU RUMBO DIGITAL</div>
          <p className="font-label-bold text-label-bold text-on-surface-variant dark:text-on-surface-variant mt-lg">©2024 TU RUMBO DIGITAL KINETIC ADVERTISING</p>
        </div>
        <div className="grid grid-cols-2 gap-md">
          <div className="flex flex-col gap-sm">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-xs">Social</span>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Instagram</Link>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">LinkedIn</Link>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Vimeo</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <span className="font-label-bold text-label-bold text-primary-fixed uppercase mb-xs">Contacto</span>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Newsletter</Link>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Legal</Link>
            <Link to="/" className="text-on-surface-variant dark:text-on-surface-variant font-label-bold text-label-bold hover:text-primary-fixed hover:skew-x-2 transition-transform active:scale-95">Careers</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
