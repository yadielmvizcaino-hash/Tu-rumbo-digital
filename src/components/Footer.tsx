import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-8 bg-[#121414]">
      <div className="px-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-[#d4ff00] pt-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-black text-primary-fixed uppercase tracking-tighter">TU RUMBO DIGITAL</h2>
          <div className="font-bold text-[10px] text-primary-fixed tracking-[0.3em] uppercase">
            © 2024 TU RUMBO DIGITAL. ALL RIGHTS RESERVED.
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 font-bold text-sm text-gray-500 tracking-[0.2em] uppercase">
          <Link to="/" className="hover:text-white transition-colors duration-200">INSTAGRAM</Link>
          <Link to="/" className="hover:text-white transition-colors duration-200">LINKEDIN</Link>
          <Link to="/" className="hover:text-white transition-colors duration-200">BEHANCE</Link>
          <Link to="/" className="hover:text-white transition-colors duration-200">NEWSLETTER</Link>
        </div>
      </div>
    </footer>
  );
}
