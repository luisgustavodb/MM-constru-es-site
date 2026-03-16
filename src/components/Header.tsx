import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fecha o menu ao mudar de rota
  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPath]);

  // Bloqueia o scroll do corpo quando o menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Materiais', path: '/produtos' },
    { name: 'Contato', path: '/contato' },
  ];

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="fixed top-0 left-0 w-full z-[60] bg-[#0B1D3A] shadow-xl border-b border-white/5">
        {/* Faixa Superior */}
        <div className="bg-[#061225] py-1.5 px-4 text-center">
          <p className="text-[9px] md:text-xs font-bold text-blue-200 uppercase tracking-[0.2em]">
            Entregas rápidas para toda a região • MM Construções
          </p>
        </div>

        {/* Barra de Navegação */}
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="relative z-[70]">
            <img 
              src="https://i.postimg.cc/QMzyyHYv/logo-transp.png" 
              alt="MM Construções" 
              className="h-8 md:h-10 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-widest transition-all hover:text-[#FFB300] ${
                  currentPath === link.path ? 'text-[#FFB300]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Botão Orçamento (Desktop) */}
          <div className="hidden md:block relative z-[70]">
            <Link 
              to="/contato" 
              className="bg-[#FFB300] text-[#0B1D3A] px-6 py-2.5 rounded-lg font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
            >
              Orçamento
            </Link>
          </div>

          {/* Botão Hamburguer (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative z-[70] p-2 text-white hover:text-[#FFB300] transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </header>

      {/* MENU MOBILE (OVERLAY) */}
      <div 
        className={`fixed inset-0 z-[55] bg-[#0B1D3A] transition-all duration-500 ease-in-out md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Conteúdo do Menu */}
        <div className="flex flex-col h-full pt-32 pb-10 px-8">
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-4xl font-black uppercase tracking-tighter transition-colors ${
                  currentPath === link.path ? 'text-[#FFB300]' : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-12">
            <Link
              to="/contato"
              className="inline-block w-full bg-[#FFB300] text-[#0B1D3A] text-center py-5 rounded-2xl font-black text-xl uppercase tracking-widest shadow-2xl active:scale-95 transition-transform"
            >
              Faça um Orçamento
            </Link>
          </div>

          {/* Redes Sociais no Menu */}
          <div className="mt-auto flex items-center justify-center gap-6">
            <a 
              href="https://www.instagram.com/luis_gustavo_del_bianco/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full text-white hover:bg-[#FFB300] hover:text-[#0B1D3A] transition-all"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=100088704596772" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full text-white hover:bg-[#FFB300] hover:text-[#0B1D3A] transition-all"
            >
              <Facebook size={24} />
            </a>
            <a 
              href="https://wa.me/5514997660914" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/5 rounded-full text-white hover:bg-[#25D366] hover:text-white transition-all"
            >
              <MessageCircle size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Espaçador para o Header Fixo */}
      <div className="h-[76px] md:h-[96px]"></div>
    </>
  );
}
