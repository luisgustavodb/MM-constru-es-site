import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="bg-[#0B1D3A]/50 backdrop-blur-md text-white fixed w-full top-0 z-50 shadow-md border-b border-white/10">
      {/* Top bar (Varejo style) */}
      <div className="bg-[#061225] text-xs py-1 px-4 text-center text-blue-200 font-medium tracking-wide">
        COMPRE ONLINE E RETIRE NA LOJA OU RECEBA EM CASA COM FRETE GRÁTIS*
      </div>
      
      <div className="container mx-auto px-4 py-2 flex items-center justify-between relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-10">
          <img 
            src="https://i.postimg.cc/QMzyyHYv/logo-transp.png" 
            alt="MM Construções" 
            className="h-9 w-auto"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 font-bold text-sm uppercase tracking-wide">
          <Link 
            to="/" 
            className={`transition-colors ${currentPath === '/' ? 'text-[#FFB300]' : 'hover:text-[#FFB300]'}`}
          >
            Início
          </Link>
          <Link 
            to="/produtos" 
            className={`transition-colors ${currentPath === '/produtos' ? 'text-[#FFB300]' : 'hover:text-[#FFB300]'}`}
          >
            Materiais
          </Link>
          <Link 
            to="/contato" 
            className={`transition-colors ${currentPath === '/contato' ? 'text-[#FFB300]' : 'hover:text-[#FFB300]'}`}
          >
            Contato
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4 z-10">
          <Link to="/contato" className="hidden sm:flex items-center gap-2 cursor-pointer bg-[#FFB300] text-[#0B1D3A] px-[24px] py-[8px] rounded-[9px] font-extrabold text-sm uppercase tracking-wide transition-all duration-[400ms] hover:shadow-[7px_5px_56px_-14px_#FFB300] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#FFB300]">
            Faça um Orçamento
          </Link>
          <button className="md:hidden text-white hover:text-[#FFB300] transition-colors">
            <Menu size={28} />
          </button>
        </div>
      </div>
    </header>
  );
}
