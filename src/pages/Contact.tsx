import React, { useState, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EmailJS Configuration
const EMAILJS_SERVICE_ID = "service_vwxepe6";
const EMAILJS_TEMPLATE_ID = "template_d3odvv7";
const EMAILJS_PUBLIC_KEY = "eh93ikbAbZ6S4VKAx";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formRef.current) return;

    // Basic validation
    const formData = new FormData(formRef.current);
    const name = formData.get('user_name') as string;
    const email = formData.get('user_email') as string;
    const message = formData.get('message') as string;
    const terms = formData.get('terms') as string;

    if (!name || !email || !message) {
      setSubmitStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!terms) {
      setSubmitStatus('error');
      setErrorMessage('Você precisa aceitar os termos e condições.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setErrorMessage('Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente mais tarde ou entre em contato via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3 block">
            Fale Conosco
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B1D3A] mb-4 tracking-tight">
            Entre em contato conosco
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium">
            Preencha o formulário abaixo ou entre em contato diretamente pelos nossos canais de atendimento.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="flex flex-col gap-16">
          
          {/* Top Row: Form and Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Form */}
            <div className="bg-white">
              {submitStatus === 'success' ? (
                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1D3A] mb-3">Mensagem Enviada!</h3>
                  <p className="text-slate-600 mb-8 font-medium">
                    Obrigado pelo contato. Nossa equipe retornará sua mensagem o mais breve possível.
                  </p>
                  <button 
                    onClick={() => setSubmitStatus('idle')}
                    className="text-[#0B1D3A] font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-lg flex items-center gap-3 text-sm font-medium animate-in slide-in-from-top-2">
                      <AlertCircle size={18} />
                      {errorMessage}
                    </div>
                  )}

                  <div>
                    <label htmlFor="user_name" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                      Nome
                    </label>
                    <input 
                      type="text" 
                      id="user_name" 
                      name="user_name"
                      required
                      placeholder="Seu nome" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] outline-none transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="user_email" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                      E-mail
                    </label>
                    <input 
                      type="email" 
                      id="user_email" 
                      name="user_email"
                      required
                      placeholder="Seu e-mail" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-2 block">
                      Mensagem
                    </label>
                    <textarea 
                      id="message" 
                      name="message"
                      required
                      rows={4}
                      placeholder="Sua mensagem" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#0B1D3A] focus:ring-1 focus:ring-[#0B1D3A] outline-none transition-colors resize-none"
                    ></textarea>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                    <input 
                      type="checkbox" 
                      id="terms" 
                      name="terms"
                      className="w-4 h-4 rounded border-gray-300 text-[#0B1D3A] focus:ring-[#0B1D3A] cursor-pointer"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-500 cursor-pointer">
                      Eu concordo com os <a href="#" className="underline hover:text-[#0B1D3A]">Termos e Condições</a>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#0B1D3A] text-white font-bold py-4 rounded-lg hover:bg-[#061225] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        Enviar Mensagem
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

          {/* Right Column: Contact Info */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-[#0B1D3A] mb-2">Nossos canais de atendimento</h3>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/5514997660914" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 cursor-pointer text-[#0B1D3A]"
            >
              <div className="flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold mb-1">WhatsApp</h4>
                <p className="font-medium">+55 (14) 99766-0914</p>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:luisgustavogu2008@gmail.com" 
              className="flex items-center gap-4 cursor-pointer text-[#0B1D3A]"
            >
              <div className="flex items-center justify-center flex-shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">E-mail</h4>
                <p className="font-medium">luisgustavogu2008@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+5514997660914" 
              className="flex items-center gap-4 cursor-pointer text-[#0B1D3A]"
            >
              <div className="flex items-center justify-center flex-shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold mb-1">Telefone</h4>
                <p className="font-medium">+55 (14) 99766-0914</p>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Row: Map and FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8 pt-16 border-t border-gray-100">
          
          {/* Left Column: Map */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1D3A] mb-6">Nossa Localização</h3>
            <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 h-[350px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8515.268746604646!2d-49.882496483868174!3d-22.96124994605552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c019b7a5d7cfa3%3A0x833b5a36b6140f48!2sMM%20materiais%20para%20constru%C3%A7%C3%A3o!5e1!3m2!1spt-BR!2sbr!4v1773682042046!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div>
            <h3 className="text-xl font-bold text-[#0B1D3A] mb-6">Perguntas Frequentes</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-[#0B1D3A] mb-2">Vocês fazem entregas?</h4>
                <p className="text-gray-600 text-sm">Sim, realizamos entregas em toda a região. Consulte as taxas e prazos para o seu endereço entrando em contato conosco.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B1D3A] mb-2">Quais são as formas de pagamento?</h4>
                <p className="text-gray-600 text-sm">Aceitamos cartões de crédito, débito, PIX e boleto bancário (sujeito a análise). Parcelamos suas compras em até 10x sem juros.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#0B1D3A] mb-2">Posso fazer um orçamento sem compromisso?</h4>
                <p className="text-gray-600 text-sm">Com certeza! Você pode nos enviar sua lista de materiais pelo WhatsApp ou formulário e retornaremos com o orçamento completo.</p>
              </div>
            </div>
          </div>
          
        </div>

        </div>
      </div>
    </div>
  );
}
