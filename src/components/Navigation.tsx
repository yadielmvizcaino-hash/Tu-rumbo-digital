import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full px-6 md:px-10 h-[80px] z-50 fixed bg-[#121414] border-b-2 border-transparent top-0">
      <Link to="/" className="text-xl md:text-2xl font-black italic tracking-tighter text-primary-fixed uppercase">TU RUMBO DIGITAL</Link>
      
      <div className="hidden md:flex gap-8 items-center">
        <Link to="/proyectos" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">PROYECTOS</Link>
        <Link to="/servicios" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">SERVICIOS</Link>
        <Link to="/estudio" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">ESTUDIO</Link>
        <Link to="/galeria" className="text-white font-bold text-sm uppercase hover:text-primary-fixed transition-all duration-75">CONTACTO</Link>
        <button className="bg-primary-fixed text-black px-4 md:px-6 py-2 md:py-3 font-bold text-xs md:text-sm uppercase border-2 border-primary-fixed hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_0_#ffffff] transition-all flex items-center gap-2">
            INICIAR PROYECTO <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
        </button>
      </div>

      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
      </button>

      {isOpen && (
        <div className="absolute top-[80px] left-0 w-full bg-[#121414] border-b-2 border-primary-fixed flex flex-col items-center gap-6 py-8 md:hidden">
          <Link to="/proyectos" className="text-white font-bold text-lg uppercase" onClick={() => setIsOpen(false)}>PROYECTOS</Link>
          <Link to="/servicios" className="text-white font-bold text-lg uppercase" onClick={() => setIsOpen(false)}>SERVICIOS</Link>
          <Link to="/estudio" className="text-white font-bold text-lg uppercase" onClick={() => setIsOpen(false)}>ESTUDIO</Link>
          <Link to="/galeria" className="text-white font-bold text-lg uppercase" onClick={() => setIsOpen(false)}>CONTACTO</Link>
        </div>
      )}
    </nav>
  );
}
