import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center w-full px-4 md:px-10 py-4 z-50 sticky bg-black border-b-2 border-primary-fixed top-0 gap-4 md:gap-0">
      <Link to="/" className="text-xl md:text-2xl font-black italic tracking-tighter text-primary-fixed uppercase self-start md:self-auto shrink-0">TU RUMBO DIGITAL</Link>
      
      <div className="flex gap-6 md:gap-8 items-center overflow-x-auto w-full md:w-auto font-black tracking-tighter uppercase hide-scrollbar">
        <Link to="/proyectos" className="text-primary-fixed border-b-2 border-primary-fixed pb-1 whitespace-nowrap hover:bg-primary-fixed hover:text-black transition-all duration-100 shrink-0">PROYECTOS</Link>
        <Link to="/servicios" className="text-white hover:text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all duration-100 whitespace-nowrap shrink-0">SERVICIOS</Link>
        <Link to="/estudio" className="text-white hover:text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all duration-100 whitespace-nowrap shrink-0">ESTUDIO</Link>
        <Link to="/galeria" className="text-white hover:text-primary-fixed hover:bg-primary-fixed hover:text-black transition-all duration-100 whitespace-nowrap shrink-0">CONTACTO</Link>
        <button className="hidden md:flex ml-4 bg-primary-fixed text-black font-label-bold text-label-bold px-6 py-3 border-2 border-primary-fixed hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#ffffff] transition-all items-center gap-2 shrink-0">
            INICIAR PROYECTO <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </nav>
  );
}
