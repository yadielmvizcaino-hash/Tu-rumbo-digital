import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Studio() {
  return (
    <>
      <Navigation />
      
      <main className="pt-[120px] pb-24 px-10 bg-zinc-950 text-white min-h-screen antialiased">
        <header className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">SOMOS <br/><span className="text-[#d4ff00]">TU RUMBO.</span></h1>
          <p className="max-w-sm text-gray-400 font-bold uppercase tracking-widest text-right">Transformamos la visión comercial en realidad estética.</p>
        </header>

        <section className="bg-[#d4ff00] text-black p-12">
            <h2 className="text-sm font-bold uppercase tracking-widest mb-4">MANIFIESTO</h2>
            <p className="text-4xl font-black uppercase tracking-tighter leading-tight">El impacto no es un accidente. La belleza sin fuerza es solo decoración.</p>
        </section>
      </main>

      <Footer />
    </>
  );
}
