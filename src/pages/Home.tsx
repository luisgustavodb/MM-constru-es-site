import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Mestre de Obras",
    text: "A MM Construções sempre me salva. Encontro tudo que preciso com rapidez e o atendimento é nota 10. Recomendo para todos os meus clientes.",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Mariana Costa",
    role: "Arquiteta",
    text: "Parceria de anos! Os materiais são de primeira linha e a entrega nunca atrasa, o que é fundamental para o cronograma das minhas obras.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "João Pedro",
    role: "Cliente",
    text: "Fiz a reforma da minha casa inteira com eles. O preço é muito competitivo e os vendedores dão ótimas dicas sobre os produtos.",
    avatar: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Fernanda Lima",
    role: "Engenheira Civil",
    text: "A variedade de marcas e o estoque sempre cheio facilitam muito o meu trabalho. A MM é, sem dúvida, a melhor da região.",
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    name: "Roberto Alves",
    role: "Cliente",
    text: "Comprei os pisos e revestimentos aqui. Além da qualidade excelente, a entrega foi super cuidadosa. Muito satisfeito com a compra.",
    avatar: "https://i.pravatar.cc/150?img=15"
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-[#0B1D3A] text-white overflow-hidden bg-cover bg-center bg-[url('https://i.postimg.cc/5yd5jk36/Gemini-Generated-Image-mfcqgmmfcqgmmfcq.png')] md:bg-[url('https://i.postimg.cc/gJvnT6k4/fundo.jpg')]"
      >
        <div className="container mx-auto px-4 pt-32 pb-24 md:pt-48 md:pb-56 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Text Content */}
            <div className="max-w-xl text-center md:text-left">
              <div className="inline-block bg-[#061225]/60 backdrop-blur-md border border-white/20 text-white text-[10px] md:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
                A base forte para sua obra
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] mb-6 uppercase tracking-tight">
                Construímos <br className="hidden sm:block"/>
                <span className="text-[#FFB300]">seus sonhos</span> <br className="hidden sm:block"/>
                com segurança.
              </h1>
              <p className="text-blue-100 text-base md:text-lg mb-8 max-w-md mx-auto md:mx-0 font-medium leading-relaxed">
                Materiais de alta qualidade e resistência. Do alicerce ao acabamento, a MM Construções é a sua parceira de confiança para obras e reformas.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link to="/produtos" className="w-full sm:w-auto cursor-pointer bg-[#FFB300] text-[#0B1D3A] px-[33px] py-[16px] rounded-[9px] font-extrabold text-lg uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-[400ms] hover:shadow-[7px_5px_56px_-14px_#FFB300] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#FFB300]">
                  Ver Ofertas <ArrowRight size={20} />
                </Link>
                <Link to="/contato" className="relative inline-block cursor-pointer outline-none border-0 align-middle bg-transparent p-0 w-full sm:w-[15rem] h-[3.5rem] group">
                  <span className="transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] relative block m-0 w-[3.5rem] h-[3.5rem] bg-[#FFB300] rounded-full group-hover:w-full" aria-hidden="true">
                    <span className="transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] absolute top-0 bottom-0 m-auto left-[1.15rem] w-[1.125rem] h-[0.125rem] bg-transparent group-hover:bg-[#0B1D3A] group-hover:translate-x-4">
                      <span className="absolute top-[-0.29rem] right-[0.0625rem] w-[0.625rem] h-[0.625rem] border-t-[0.125rem] border-r-[0.125rem] border-[#0B1D3A] rotate-45"></span>
                    </span>
                  </span>
                  <span className="transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ml-8 text-white font-extrabold text-lg tracking-wide uppercase group-hover:text-[#0B1D3A]">
                    Fale Conosco
                  </span>
                </Link>
              </div>
            </div>

            {/* Right: Image Area */}
            <div className="relative flex justify-center items-center mt-8 md:mt-0">
              {/* Decorative glow */}
              <div className="absolute w-3/4 h-3/4 bg-[#00E5FF] rounded-full blur-[120px] opacity-20"></div>
              
              {/* Image Container - Add your image here */}
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                {/* Descomente a linha abaixo e coloque o caminho da sua imagem */}
                {/* <img src="/sua-imagem-aqui.png" alt="Hero MM Construções" className="w-full h-full object-contain drop-shadow-2xl" /> */}
              </div>
            </div>

          </div>
        </div>

        {/* Diagonal cut at the bottom (Layout from Image 2) */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-[40px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 120 0 0 1200 120z" className="fill-gray-50"></path>
          </svg>
        </div>
      </section>

      {/* Sobre Nós Section */}
      <section id="sobre" className="bg-white pt-24 pb-32">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Our Mission Block */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-24 md:mb-32">
            {/* Images Left */}
            <div className="w-full md:w-1/2 relative flex justify-start drop-shadow-2xl">
              <div className="w-full md:w-[85%] aspect-[4/5] rounded-3xl md:rounded-l-3xl md:rounded-r-none overflow-hidden relative md:[clip-path:polygon(0_0,100%_0,85%_100%,0_100%)]">
                <img 
                  src="https://i.postimg.cc/kgYysLB2/imagem-sobre-nos-1.jpg" 
                  alt="Nossa Missão" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Text Right */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1D3A] mb-6 tracking-tight">Nossa Missão</h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Fornecer os melhores materiais de construção com excelência no atendimento, garantindo que cada cliente encontre tudo o que precisa para sua obra ou reforma. Nosso objetivo é ser a base de confiança para projetos duradouros, oferecendo qualidade, variedade e preços justos.
              </p>
              <ul className="space-y-4 inline-block md:block text-left">
                {[
                  'Variedade e Qualidade Garantida',
                  'Atendimento Especializado',
                  'Agilidade e Segurança na Entrega',
                  'Parceria com as Melhores Marcas'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="text-[#008a44] flex-shrink-0" size={20} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Vision Block */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-24">
            {/* Text Left */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1D3A] mb-6 tracking-tight">Nossa Visão</h2>
              <p className="text-slate-600 text-base md:text-lg mb-8 leading-relaxed font-medium">
                Na MM Construções, nossa visão é ser a loja de referência em materiais de construção da região, reconhecida pela inovação no varejo e pelo compromisso com o sucesso de cada obra. Queremos facilitar o processo de construir e reformar, entregando valor e praticidade do alicerce ao acabamento.
              </p>
              <ul className="space-y-4 inline-block md:block text-left">
                {[
                  'Referência em Varejo da Construção',
                  'Soluções Práticas para sua Obra',
                  'Inovação no Atendimento ao Cliente',
                  'Crescimento Sustentável e Responsável'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-bold">
                    <CheckCircle2 className="text-[#008a44] flex-shrink-0" size={20} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Images Right */}
            <div className="w-full md:w-1/2 relative flex justify-end drop-shadow-2xl">
              <div className="w-full md:w-[85%] aspect-[4/5] rounded-3xl md:rounded-r-3xl md:rounded-l-none overflow-hidden relative md:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]">
                <img 
                  src="https://i.postimg.cc/Njn1mTzx/imagem-sobre-nos-2.jpg" 
                  alt="Nossa Visão" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Explore by Category Section */}
      <section id="categorias" className="bg-[#f8f9fa] py-20 relative overflow-hidden">
        {/* Decorative dots background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(#e5e7eb_2px,transparent_2px)] [background-size:16px_16px] opacity-50"></div>
        
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1D3A] leading-tight">
              Explore por <br />
              <span className="relative inline-block">
                categoria
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#008a44]/20 -z-10 rounded-sm"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Básico', 
                desc: 'Cimento, areia, pedra, tijolos e tudo para a fundação da sua obra.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M11.55 3.006h.59c2.784 1.012 5.567 2.024 8.328 3.053c.254.09.428.315.53.675v5.713L12.45 21h-.602l-8.334-3.048c-.225-.078-.393-.309-.511-.68V11.57L11.55 3z"/><path fill="currentColor" d="m19.872 6.97l-7.675 7.733a5 5 0 0 0-.32-.017a.9.9 0 0 1-.31-.057a536 536 0 0 1-6.934-2.513c-.224-.085-.32-.242-.303-.461l7.524-7.513a.2.2 0 0 1 .09-.05a.2.2 0 0 1 .1.005l7.828 2.868z"/><path fill="currentColor" d="M13.845 9.158c-1.136-.782-1.27-2.103-1.406-2.508a3.52 3.52 0 0 1 2.424.112c.91.366 1.158 1.266.365 1.918a2.05 2.05 0 0 1-1.383.478"/><path fill="currentColor" d="M12.434 6.65a3.7 3.7 0 0 0 1.704 2.13a.17.17 0 0 1 .084.147a.17.17 0 0 1-.079.14a.6.6 0 0 1-.292.09c-.928.102-3.003-.483-2.317-1.765c.158-.304.461-.546.9-.742m7.439.303v4.841c0 .17.017.327-.101.44L12 19.891v-5.19zm-8.716 5.218c-1.012-.691-1.642-1.495-1.9-2.406a3.06 3.06 0 0 1 2.277.056c.99.422 1.35 1.383.292 2.075c-.315.202-.54.298-.664.28z"/><path fill="currentColor" d="M9.256 9.765q.388 1.366 1.906 2.413q-1.382.337-2.4-.304c-1.058-.658-.524-1.766.494-2.109m-4.92 1.889q-.025.337.304.46a554 554 0 0 0 6.928 2.509q.142.058.309.056H12v5.213c-2.548-.94-5.252-1.89-7.766-2.784c-.146-.056-.107-.157-.107-.309v-4.802c0-.124.011-.236.208-.343"/></svg>,
                color: 'bg-indigo-100 text-indigo-600'
              },
              { 
                name: 'Acabamento', 
                desc: 'Pisos, porcelanatos, revestimentos e detalhes que fazem a diferença.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="currentColor" fillRule="evenodd" d="M234.667 64H64v170.667h170.667zM448 64H277.333v170.667H448zM64 277.333h170.667V448H64zm384 0H277.333V448H448z" clipRule="evenodd"/></svg>,
                color: 'bg-teal-100 text-teal-600'
              },
              { 
                name: 'Pintura', 
                desc: 'Tintas, pincéis, rolos e acessórios para renovar seus ambientes.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M18 2H7c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z" fill="currentColor"/><path d="M13 15v-2c0-1.103-.897-2-2-2H4V5c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7v2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" fill="currentColor"/></svg>,
                color: 'bg-orange-100 text-orange-600'
              },
              { 
                name: 'Hidráulica', 
                desc: 'Tubos, conexões, torneiras e soluções completas para água e esgoto.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="currentColor" d="M2 8a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0zm24 0a2 2 0 1 1 4 0v16a2 2 0 1 1-4 0zm-2 1H8v14h16z"/></svg>,
                color: 'bg-blue-100 text-blue-600'
              },
              { 
                name: 'Elétrica', 
                desc: 'Fios, cabos, disjuntores, tomadas e tudo para a segurança da sua rede.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z"/></svg>,
                color: 'bg-sky-100 text-sky-600'
              },
              { 
                name: 'Ferramentas', 
                desc: 'Furadeiras, serras, martelos e equipamentos para profissionais e amadores.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M6.75 10h4.5q.3 0 .525-.225T12 9.25t-.225-.525t-.525-.225h-4.5q-.3 0-.525.225T6 9.25t.225.525t.525.225m0-2.5h4.5q.3 0 .525-.225T12 6.75t-.225-.525T11.25 6h-4.5q-.3 0-.525.225T6 6.75t.225.525t.525.225M17 11V5h1q.825 0 1.413.588T20 7h2q.425 0 .713.288T23 8t-.288.713T22 9h-2q0 .825-.587 1.413T18 11zm-5 4.5H6V13q-1.65 0-2.825-1.175T2 9V7q0-1.65 1.175-2.825T6 3h8q.825 0 1.413.588T16 5v6q0 .825-.587 1.413T14 13h-2zM5.5 21q-.625 0-1.062-.437T4 19.5V18q0-.625.438-1.062T5.5 16.5h7q.625 0 1.063.438T14 18v1.5q0 .625-.437 1.063T12.5 21z"/></svg>,
                color: 'bg-red-100 text-red-600'
              },
              { 
                name: 'Iluminação', 
                desc: 'Lâmpadas, luminárias, pendentes e spots para valorizar cada espaço.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16"><path fill="currentColor" d="M10.618 10.26c-.361.223-.618.598-.618 1.022c0 .226-.142.43-.36.49A6 6 0 0 1 8 12c-.569 0-1.12-.08-1.64-.227a.504.504 0 0 1-.36-.491c0-.424-.257-.799-.618-1.021a5 5 0 1 1 5.235 0m-3.75 3.154a.75.75 0 1 0-.225 1.483a9 9 0 0 0 2.716 0a.75.75 0 1 0-.225-1.483a7.6 7.6 0 0 1-2.266 0"/></svg>,
                color: 'bg-purple-100 text-purple-600'
              },
              { 
                name: 'Especiais', 
                desc: 'Itens exclusivos, lançamentos e produtos selecionados para sua obra.',
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M7.625 6.4L12 .725L16.375 6.4l6.85 2.3l-4.325 6.125l.175 6.825L12 19.675L4.925 21.65L5.1 14.8L.8 8.7z"/></svg>,
                color: 'bg-emerald-100 text-emerald-600'
              }
            ].map((cat, idx) => (
              <div 
                key={idx} 
                onClick={() => navigate(`/produtos?categoria=${encodeURIComponent(cat.name)}`)}
                className="bg-white rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col h-full cursor-pointer group"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${cat.color}`}>
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1D3A] mb-3 group-hover:text-[#FFB300] transition-colors">{cat.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow mb-6">
                  {cat.desc}
                </p>
                <div className="flex justify-end mt-auto">
                  <ArrowRight className="text-[#008a44] opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all" size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que a MM Section */}
      <section className="bg-[#f4f7fb] py-16 md:py-24 border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0B1D3A] mb-6 tracking-tight">
            Por que a MM Construções?
          </h2>
          <p className="text-slate-600 text-base md:text-xl mb-12 md:mb-20 max-w-3xl mx-auto leading-relaxed font-medium">
            Unimos tradição, qualidade e os melhores preços para ser a sua parceira ideal. Nossa estrutura garante que sua obra não pare, com materiais de ponta e entrega ágil.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-8 mb-16 md:mb-20">
            {/* Stat 1 */}
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black mb-3 tracking-tighter text-[#0B1D3A]">
                15 Anos
              </span>
              <span className="text-slate-600 font-medium text-base md:text-lg">de experiência no mercado</span>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black mb-3 tracking-tighter text-[#0B1D3A]">
                +10 Mil
              </span>
              <span className="text-slate-600 font-medium text-base md:text-lg">clientes satisfeitos atendidos</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black mb-3 tracking-tighter text-[#0B1D3A]">
                +5.000
              </span>
              <span className="text-slate-600 font-medium text-base md:text-lg">itens disponíveis em estoque</span>
            </div>
          </div>

          <Link to="/contato" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 cursor-pointer bg-[#FFB300] text-[#0B1D3A] px-[32px] py-[14px] rounded-[9px] font-extrabold text-sm uppercase tracking-wide transition-all duration-[400ms] hover:shadow-[7px_5px_56px_-14px_#FFB300] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#FFB300]">
            Faça um Orçamento
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-24 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B1D3A] tracking-tight mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            A satisfação de quem confia na MM Construções para realizar seus projetos.
          </p>
        </div>

        {/* Marquee Container */}
        <div className="relative w-full flex overflow-hidden group">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute top-0 left-0 w-16 md:w-40 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-16 md:w-40 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Track */}
          <div className="flex w-max animate-marquee gap-6 px-3">
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <div 
                key={idx} 
                className="w-[350px] md:w-[420px] bg-[#f8fafc] rounded-2xl p-8 flex flex-col justify-between flex-shrink-0 border border-slate-100 shadow-sm"
              >
                <div>
                  <div className="text-[#008a44] mb-6 opacity-80">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                    </svg>
                  </div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-8 font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="font-bold text-[#0B1D3A]">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500 font-medium">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="relative bg-[#0B1D3A] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden shadow-2xl">
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center opacity-20 pointer-events-none"
              style={{ backgroundImage: 'url("https://i.postimg.cc/KjSHDj0M/Uma-foto-de-uma-reforma-em-uma-cozinha-2k-delpmaspu.jpg")' }}
            ></div>

            <div className="relative z-10 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center md:text-left">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                  Pronto para começar sua obra?
                </h2>
                <p className="text-blue-100 text-base md:text-xl font-medium leading-relaxed mb-10">
                  Temos tudo o que você precisa, do alicerce ao acabamento. Fale com nossos especialistas e garanta os melhores materiais com entrega rápida.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                  <Link to="/produtos" className="w-full sm:w-auto cursor-pointer bg-[#FFB300] text-[#0B1D3A] px-[33px] py-[16px] rounded-[9px] font-extrabold text-lg uppercase tracking-wide flex items-center justify-center gap-2 transition-all duration-[400ms] hover:shadow-[7px_5px_56px_-14px_#FFB300] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#FFB300]">
                    Ver Ofertas <ArrowRight size={20} />
                  </Link>
                  <Link to="/contato" className="relative inline-block cursor-pointer outline-none border-0 align-middle bg-transparent p-0 w-full sm:w-[15rem] h-[3.5rem] group">
                    <span className="transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] relative block m-0 w-[3.5rem] h-[3.5rem] bg-[#FFB300] rounded-full group-hover:w-full" aria-hidden="true">
                      <span className="transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] absolute top-0 bottom-0 m-auto left-[1.15rem] w-[1.125rem] h-[0.125rem] bg-transparent group-hover:bg-[#0B1D3A] group-hover:translate-x-4">
                        <span className="absolute top-[-0.29rem] right-[0.0625rem] w-[0.625rem] h-[0.625rem] border-t-[0.125rem] border-r-[0.125rem] border-[#0B1D3A] rotate-45"></span>
                      </span>
                    </span>
                    <span className="transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center ml-8 text-white font-extrabold text-lg tracking-wide uppercase group-hover:text-[#0B1D3A]">
                      Fale Conosco
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
