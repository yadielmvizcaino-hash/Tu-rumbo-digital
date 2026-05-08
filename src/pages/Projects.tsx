import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Projects() {
  return (
    <>
      <Navigation />
      <div className="pt-32 pb-24 px-10 text-white min-h-screen">
        <h1 className="text-4xl font-black uppercase tracking-tighter">Proyectos</h1>
        <p className="mt-4">Contenido de Proyectos en construcción.</p>
      </div>
      <Footer />
    </>
  );
}
