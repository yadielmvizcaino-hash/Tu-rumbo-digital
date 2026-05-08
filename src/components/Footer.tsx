import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16 w-full mt-20 bg-black border-t-2 border-primary-fixed">
      <div className="flex flex-col justify-between">
        <div className="text-xl font-black text-primary-fixed uppercase mb-lg">Tu Rumbo Digital</div>
        <div className="font-bold uppercase text-sm tracking-widest text-primary-fixed">© 2024 TU RUMBO DIGITAL. ALL RIGHTS RESERVED.</div>
      </div>
      <div className="flex flex-col items-start md:items-end gap-sm font-bold uppercase text-sm tracking-widest text-zinc-400">
        <Link className="hover:text-primary-fixed hover:underline decoration-2 underline-offset-4 transition-colors duration-200" to="#">INSTAGRAM</Link>
        <Link className="hover:text-primary-fixed hover:underline decoration-2 underline-offset-4 transition-colors duration-200" to="#">LINKEDIN</Link>
        <Link className="hover:text-primary-fixed hover:underline decoration-2 underline-offset-4 transition-colors duration-200" to="#">BEHANCE</Link>
        <Link className="hover:text-primary-fixed hover:underline decoration-2 underline-offset-4 transition-colors duration-200" to="#">NEWSLETTER</Link>
      </div>
    </footer>
  );
}
