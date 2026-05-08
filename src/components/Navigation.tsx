import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-10 py-4 z-50 sticky bg-black border-b-2 border-primary-fixed top-0">
      <Link to="/" className="text-xl md:text-2xl font-black italic tracking-tighter text-primary-fixed uppercase shrink-0">TU RUMBO DIGITAL</Link>
      
      <div className="hidden md:flex gap-6 md:gap-8 items-center font-black tracking-tighter uppercase">
        <Link to="/proyectos" className="text-primary-fixed border-b-2 border-primary-fixed pb-1 whitespace-nowrap hover:bg-primary-fixed hover:text-black transition-all duration-100 shrink-0">PROYECTOS</Link>
        <Link to="/servicios" className="text-white hover:text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all duration-100 whitespace-nowrap shrink-0">SERVICIOS</Link>
        <Link to="/estudio" className="text-white hover:text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all duration-100 whitespace-nowrap shrink-0">ESTUDIO</Link>
        <Link to="/galeria" className="text-white hover:text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all duration-100 whitespace-nowrap shrink-0">CONTACTO</Link>
        <button className="ml-4 bg-primary-fixed text-black font-label-bold text-label-bold px-6 py-3 border-2 border-primary-fixed hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#ffffff] transition-all flex items-center gap-2 shrink-0">
            INICIAR PROYECTO <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>

      <button className="md:hidden text-primary-fixed" onClick={() => setIsOpen(!isOpen)}>
        <span className="material-symbols-outlined text-3xl">{isOpen ? 'close' : 'menu'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-black border-b-2 border-primary-fixed flex flex-col items-center gap-6 py-8 md:hidden font-black tracking-tighter uppercase z-50 shadow-2xl">
          <Link to="/proyectos" className="text-primary-fixed text-xl" onClick={() => setIsOpen(false)}>PROYECTOS</Link>
          <Link to="/servicios" className="text-white text-xl hover:text-primary-fixed transition-colors" onClick={() => setIsOpen(false)}>SERVICIOS</Link>
          <Link to="/estudio" className="text-white text-xl hover:text-primary-fixed transition-colors" onClick={() => setIsOpen(false)}>ESTUDIO</Link>
          <Link to="/galeria" className="text-white text-xl hover:text-primary-fixed transition-colors" onClick={() => setIsOpen(false)}>CONTACTO</Link>
          <button className="mt-4 bg-primary-fixed text-black font-label-bold text-label-bold px-8 py-4 border-2 border-primary-fixed flex items-center gap-2 shadow-[4px_4px_0_0_#ffffff]">
            INICIAR PROYECTO <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>
      )}
    </nav>
  );
}
