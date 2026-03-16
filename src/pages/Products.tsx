import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

export default function Products() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('categoria') || 'Básico';
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeFilters, setActiveFilters] = useState<Record<string, boolean>>({
    'Ofertas': true
  });

  // Update active category if URL changes
  useEffect(() => {
    const cat = searchParams.get('categoria');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const toggleFilter = (label: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="pt-32 md:pt-40 bg-gray-50 min-h-screen">
      {/* Catálogo de Produtos Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          
          <div className="mb-8 md:mb-10 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#0B1D3A] mb-4">Catálogo de Produtos</h1>
            <p className="text-gray-500 text-base md:text-lg">Encontre tudo o que você precisa para sua obra.</p>
          </div>

          {/* Categories Top Bar */}
          <div className="flex items-center gap-4 md:gap-8 overflow-x-auto pb-6 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
            {[
              { name: 'Básico', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.55 3.006h.59c2.784 1.012 5.567 2.024 8.328 3.053c.254.09.428.315.53.675v5.713L12.45 21h-.602l-8.334-3.048c-.225-.078-.393-.309-.511-.68V11.57L11.55 3z"/><path fill="currentColor" d="m19.872 6.97l-7.675 7.733a5 5 0 0 0-.32-.017a.9.9 0 0 1-.31-.057a536 536 0 0 1-6.934-2.513c-.224-.085-.32-.242-.303-.461l7.524-7.513a.2.2 0 0 1 .09-.05a.2.2 0 0 1 .1.005l7.828 2.868z"/><path fill="currentColor" d="M13.845 9.158c-1.136-.782-1.27-2.103-1.406-2.508a3.52 3.52 0 0 1 2.424.112c.91.366 1.158 1.266.365 1.918a2.05 2.05 0 0 1-1.383.478"/><path fill="currentColor" d="M12.434 6.65a3.7 3.7 0 0 0 1.704 2.13a.17.17 0 0 1 .084.147a.17.17 0 0 1-.079.14a.6.6 0 0 1-.292.09c-.928.102-3.003-.483-2.317-1.765c.158-.304.461-.546.9-.742m7.439.303v4.841c0 .17.017.327-.101.44L12 19.891v-5.19zm-8.716 5.218c-1.012-.691-1.642-1.495-1.9-2.406a3.06 3.06 0 0 1 2.277.056c.99.422 1.35 1.383.292 2.075c-.315.202-.54.298-.664.28z"/><path fill="currentColor" d="M9.256 9.765q.388 1.366 1.906 2.413q-1.382.337-2.4-.304c-1.058-.658-.524-1.766.494-2.109m-4.92 1.889q-.025.337.304.46a554 554 0 0 0 6.928 2.509q.142.058.309.056H12v5.213c-2.548-.94-5.252-1.89-7.766-2.784c-.146-.056-.107-.157-.107-.309v-4.802c0-.124.011-.236.208-.343"/></svg> },
              { name: 'Acabamento', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" fillRule="evenodd" d="M234.667 64H64v170.667h170.667zM448 64H277.333v170.667H448zM64 277.333h170.667V448H64zm384 0H277.333V448H448z" clipRule="evenodd"/></svg> },
              { name: 'Pintura', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 2H7c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" fill="currentColor"/><path d="M13 15v-2c0-1.103-.897-2-2-2H4V5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7v2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" fill="currentColor"/></svg> },
              { name: 'Hidráulica', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="currentColor" d="M2 8a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0zm24 0a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0zm-2 1H8v14h16z"/></svg> },
              { name: 'Elétrica', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z"/></svg> },
              { name: 'Ferramentas', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M6.75 10h4.5q.3 0 .525-.225T12 9.25t-.225-.525t-.525-.225h-4.5q-.3 0-.525.225T6 9.25t.225.525t.525.225m0-2.5h4.5q.3 0 .525-.225T12 6.75t-.225-.525T11.25 6h-4.5q-.3 0-.525.225T6 6.75t.225.525t.525.225M17 11V5h1q.825 0 1.413.588T20 7h2q.425 0 .713.288T23 8t-.288.713T22 9h-2q0 .825-.587 1.413T18 11zm-5 4.5H6V13q-1.65 0-2.825-1.175T2 9V7q0-1.65 1.175-2.825T6 3h8q.825 0 1.413.588T16 5v6q0 .825-.587 1.413T14 13h-2zM5.5 21q-.625 0-1.062-.437T4 19.5V18q0-.625.438-1.062T5.5 16.5h7q.625 0 1.063.438T14 18v1.5q0 .625-.437 1.063T12.5 21z"/></svg> },
              { name: 'Iluminação', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16"><path fill="currentColor" d="M10.618 10.26c-.361.223-.618.598-.618 1.022c0 .226-.142.43-.36.49A6 6 0 0 1 8 12c-.569 0-1.12-.08-1.64-.227a.504.504 0 0 1-.36-.491c0-.424-.257-.799-.618-1.021a5 5 0 1 1 5.235 0m-3.75 3.154a.75.75 0 1 0-.225 1.483a9 9 0 0 0 2.716 0a.75.75 0 1 0-.225-1.483a7.6 7.6 0 0 1-2.266 0"/></svg> },
              { name: 'Especiais', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"/></svg> }
            ].map((cat, idx) => (
              <button 
                key={idx} 
                onClick={() => setActiveCategory(cat.name)}
                className="flex flex-col items-center gap-2 min-w-[70px] md:min-w-[80px] group cursor-pointer"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border shadow-sm flex items-center justify-center transition-all p-2 ${
                  activeCategory === cat.name 
                    ? 'bg-[#0B1D3A] border-[#0B1D3A] text-white scale-110' 
                    : 'bg-white border-gray-200 text-gray-400 group-hover:border-[#FFB300] group-hover:text-[#FFB300]'
                }`}>
                  {cat.icon}
                </div>
                <span className={`text-[10px] md:text-sm font-bold transition-colors ${
                  activeCategory === cat.name ? 'text-[#0B1D3A]' : 'text-gray-500 group-hover:text-[#0B1D3A]'
                }`}>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mt-4">
            <button 
              onClick={() => setShowMobileFilters(!showMobileFilters)}
              className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 py-3 rounded-xl font-bold text-[#0B1D3A] shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>
              {showMobileFilters ? 'Ocultar Filtros' : 'Mostrar Filtros'}
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 mt-8 md:mt-12">
            
            {/* Sidebar Filters */}
            <div className={`w-full lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
              <div className="bg-white rounded-2xl border border-gray-200 p-6 lg:sticky lg:top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-extrabold text-[#0B1D3A] text-lg">Filtros</h3>
                  <button className="text-sm font-bold text-[#FFB300] hover:text-[#e5a100] cursor-pointer">Limpar tudo</button>
                </div>
                
                <div className="border-t border-gray-100 py-6">
                  <h4 className="font-bold text-[#0B1D3A] mb-4">Categorias</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Todos', count: 284 },
                      { label: 'Ofertas', count: 32 },
                      { label: 'Mais Vendidos', count: 16 },
                      { label: 'Lançamentos', count: 24 },
                      { label: 'Kits Obra', count: 58 }
                    ].map((filter, idx) => {
                      const isChecked = activeFilters[filter.label] || false;
                      return (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleFilter(filter.label); }}>
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-[#0B1D3A] border-[#0B1D3A]' : 'border-gray-300 group-hover:border-[#0B1D3A]'}`}>
                            </div>
                            <span className={`text-sm font-medium ${isChecked ? 'text-[#0B1D3A]' : 'text-gray-600'}`}>{filter.label}</span>
                          </div>
                          <span className="text-xs text-gray-400 font-medium">{filter.count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6">
                  <h4 className="font-bold text-[#0B1D3A] mb-4">Marcas</h4>
                  <div className="space-y-3">
                    {[
                      { label: 'Votorantim', count: 15 },
                      { label: 'Suvinil', count: 42 },
                      { label: 'Tigre', count: 86 },
                      { label: 'Amanco', count: 64 },
                      { label: 'Bosch', count: 31 }
                    ].map((filter, idx) => {
                      const isChecked = activeFilters[filter.label] || false;
                      return (
                        <label key={idx} className="flex items-center justify-between cursor-pointer group" onClick={(e) => { e.preventDefault(); toggleFilter(filter.label); }}>
                          <div className="flex items-center gap-3">
                            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-[#0B1D3A] border-[#0B1D3A]' : 'border-gray-300 group-hover:border-[#0B1D3A]'}`}>
                            </div>
                            <span className={`text-sm font-medium ${isChecked ? 'text-[#0B1D3A]' : 'text-gray-600'}`}>{filter.label}</span>
                          </div>
                          <span className="text-xs text-gray-400 font-medium">{filter.count}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full lg:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Cimento CP II 50kg', desc: 'Saco 50kg / Votorantim', price: '34,90', oldPrice: '39,90', img: 'https://i.postimg.cc/QdDpbh8h/imagem-cimento.jpg' },
                  { name: 'Tinta Acrílica Fosca Branca', desc: 'Lata 18L / Suvinil', price: '289,90', oldPrice: '329,90', img: 'https://i.postimg.cc/15wGwfQ1/lata-de-tinta.jpg' },
                  { name: 'Porcelanato Polido Calacata', desc: 'Caixa 2.5m² / 70x70cm', price: '89,90', oldPrice: '119,90', img: 'https://i.postimg.cc/wTLXL7pz/pisos.jpg' },
                  { name: 'Furadeira de Impacto 1/2"', desc: '500W 110V / Bosch', price: '199,90', oldPrice: '249,90', img: 'https://i.postimg.cc/K8bnNxGh/furadeira.jpg' },
                  { name: 'Tubo Soldável PVC 25mm', desc: 'Barra 6 Metros / Tigre', price: '24,90', oldPrice: '29,90', img: 'https://i.postimg.cc/4NV6VmTD/cano.jpg' },
                  { name: 'Fio Cabo Flexível 2.5mm', desc: 'Rolo 100m Azul / Sil', price: '145,90', oldPrice: '179,90', img: 'https://i.postimg.cc/Fs3y3744/fios.jpg' }
                ].map((prod, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 group cursor-pointer">
                    {/* Image */}
                    <div className="aspect-[4/3] bg-gray-100 relative overflow-hidden border-b border-gray-100">
                      <img 
                        src={prod.img} 
                        alt={prod.name} 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      {/* Hover overlay effect */}
                      <div className="absolute inset-0 bg-[#0B1D3A]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-extrabold text-[#0B1D3A] text-lg leading-tight mb-1 group-hover:text-[#FFB300] transition-colors">{prod.name}</h3>
                      <p className="text-xs font-medium text-gray-400 mb-4">{prod.desc}</p>
                      
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2 h-2 rounded-full bg-[#008a44]"></div>
                        <span className="text-[11px] font-bold text-[#008a44] uppercase tracking-wider">Disponível para entrega</span>
                      </div>
                      
                      <div className="flex items-end gap-2">
                        <span className="font-extrabold text-2xl text-[#0B1D3A]">R$ {prod.price}</span>
                        <span className="text-xs font-medium text-gray-400 mb-1">você economiza R$ {(parseFloat(prod.oldPrice.replace(',','.')) - parseFloat(prod.price.replace(',','.'))).toFixed(2).replace('.',',')}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-12 flex justify-center items-center gap-2">
                <button 
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#FFB300] hover:text-[#FFB300] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                
                {[1, 2, 3, 4, 5].map(page => (
                  <button 
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-bold text-sm transition-colors cursor-pointer ${
                      currentPage === page 
                        ? 'bg-[#0B1D3A] text-white border border-[#0B1D3A]' 
                        : 'border border-gray-200 text-gray-600 hover:border-[#FFB300] hover:text-[#FFB300]'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button 
                  onClick={() => setCurrentPage(Math.min(5, currentPage + 1))}
                  className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#FFB300] hover:text-[#FFB300] transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 5}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0B1D3A] text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Não encontrou o que queria?</h2>
          <p className="text-blue-100/80 text-lg mb-10">
            Nossa equipe está pronta para ajudar você a encontrar o material perfeito para a sua obra. Entre em contato conosco!
          </p>
          <Link to="/contato" className="inline-flex items-center gap-2 cursor-pointer bg-[#FFB300] text-[#0B1D3A] px-[32px] py-[14px] rounded-[9px] font-extrabold text-sm uppercase tracking-wide transition-all duration-[400ms] hover:shadow-[7px_5px_56px_-14px_#FFB300] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#FFB300]">
            Fale Conosco
          </Link>
        </div>
      </section>
    </div>
  );
}
