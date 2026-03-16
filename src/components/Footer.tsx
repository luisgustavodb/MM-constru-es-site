import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ChevronUp, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1D3A] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          {/* Column 1: Logo, Description, Socials */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link to="/" className="mb-6 inline-block" onClick={scrollToTop}>
              <img 
                src="https://i.postimg.cc/QMzyyHYv/logo-transp.png" 
                alt="MM Construções" 
                className="h-12 w-auto"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-blue-100/80 text-sm leading-relaxed mb-8 max-w-sm font-medium">
              A base forte para sua obra. Materiais de alta qualidade e resistência para construir seus sonhos com segurança, do alicerce ao acabamento.
            </p>
            
            <div className="flex items-center gap-5 mb-6">
              <a href="https://wa.me/5514997660914" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFB300] transition-colors" aria-label="WhatsApp">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/luis-gustavo-del-bianco-b7ba233a7/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFB300] transition-colors" aria-label="LinkedIn">
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
              <a href="https://www.instagram.com/luis_gustavo_del_bianco/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFB300] transition-colors" aria-label="Instagram">
                <Instagram size={22} strokeWidth={1.5} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100088704596772" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFB300] transition-colors" aria-label="Facebook">
                <Facebook size={22} strokeWidth={1.5} />
              </a>
            </div>

            <div className="flex flex-col gap-3 mb-12">
              <a href="mailto:luisgustavogu2008@gmail.com" className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                <Mail size={18} />
                luisgustavogu2008@gmail.com
              </a>
              <a href="tel:+5514997660914" className="flex items-center gap-3 text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                <Phone size={18} />
                +55 (14) 99766-0914
              </a>
            </div>

            <button 
              onClick={scrollToTop}
              className="flex items-center gap-2 text-xs font-bold tracking-widest uppercase border border-white/20 px-6 py-3 rounded hover:bg-white/5 transition-colors"
            >
              <ChevronUp size={16} />
              Voltar ao Topo
            </button>
          </div>

          {/* Column 2: Início (Site Map) */}
          <div className="md:col-span-3">
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Início</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                  Página Inicial
                </Link>
              </li>
              <li>
                <a href="/#sobre" className="text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/#categorias" className="text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                  Categorias
                </a>
              </li>
              <li>
                <a href="/#depoimentos" className="text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                  Depoimentos
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Materiais */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Materiais</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/produtos" onClick={scrollToTop} className="text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                  Catálogo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato */}
          <div className="md:col-span-2">
            <h3 className="text-white font-bold mb-6 text-sm tracking-widest uppercase">Contato</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/contato" onClick={scrollToTop} className="text-blue-100/80 hover:text-white transition-colors text-sm font-medium">
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-blue-100/60 text-xs font-medium">
            &copy; {new Date().getFullYear()} MM Construções. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 text-xs font-medium text-blue-100/60">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
