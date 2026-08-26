import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { PiMicrosoftOutlookLogoFill } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-white/95 backdrop-blur-xl border-t border-slate-200/80 py-12 shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Identidad de marca */}
        <div className="text-center md:text-left">
          <span className="text-slate-900 font-extrabold tracking-widest text-lg block">
            METAL BRAIN <span className="text-blue-500 font-light">SOLUTIONS</span>
          </span>
          <p className="text-slate-500 text-xs mt-1 font-medium">
            Optimizando el futuro de tu negocio.
          </p>
        </div>

        {/* Botones de contacto con estilos nativos */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          
          {/* Botón WhatsApp */}
          <a
            href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20una%20automatización"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-full shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:shadow-[0_6px_20px_rgba(139,92,246,0.4)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <FaWhatsapp className="text-xl" />
            <span>WhatsApp</span>
          </a>

          {/* Botón Outlook */}
          <a
            href="mailto:danielguilera@hotmail.com"
            className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md border border-slate-300 text-slate-800 font-semibold px-6 py-3 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:bg-white hover:border-orange-400/50 hover:text-orange-600 hover:-translate-y-0.5 transition-all duration-300"
          >
            <PiMicrosoftOutlookLogoFill className="text-xl text-blue-600" />
            <span>Outlook</span>
          </a>

        </div>
      </div>
    </footer>
  );
}