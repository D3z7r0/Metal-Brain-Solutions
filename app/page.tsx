import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import BackgroundCanvas from '@/components/BackgroundCanvas';
import { FaWhatsapp } from 'react-icons/fa'; 
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";



export default function Home() {
  return (
      <div className="relative min-h-screen bg-zinc-950 text-zinc-300">      
      <BackgroundCanvas />

      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo_MBS.png"
              width={100}
              height={100}
              alt="Logo_MBS"
              className="h-auto w-auto invert"
            />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            <Link href="#servicios" className="hover:text-emerald-400 transition-colors">Servicios</Link>
            <Link href="#metodologia" className="hover:text-emerald-400 transition-colors">Metodología</Link>
            <Link href="#contacto" className="hover:text-emerald-400 transition-colors">Contacto</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="min-h-[calc(100vh-80px)] flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Sistemas Sólidos. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
              Soluciones Inteligentes.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-zinc-400 mb-10 leading-relaxed">
            Páginas Web, Bases de Datos y Automatización de Procesos para pequeñas y medianas empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
            <Link href="#contacto" className="bg-emerald-500 text-zinc-950 font-bold px-8 py-4 rounded-sm text-center hover:bg-emerald-400 transition-colors">
              Agendar Análisis
            </Link>
            <Link href="#servicios" className="border border-zinc-700 text-white font-medium px-8 py-4 rounded-sm text-center hover:bg-zinc-800 transition-colors">
              Ver Servicios
            </Link>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicios" className="relative z-20 bg-zinc-950 border-t border-zinc-800 py-24">          
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-16 text-center tracking-wide">NUESTROS SERVICIOS 
              <div className="relative mx-auto mt-4 w-24">
                <div className="absolute inset-0 bg-emerald-500 blur-sm opacity-80"></div>
                <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
              </div>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              
              {/* Tarjeta 1 */}
              <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-emerald-500/50 transition-colors rounded-sm">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center mb-6 text-emerald-500 font-bold text-xl border rounded-sm">01</div>
                <h3 className="text-xl font-bold text-white mb-4">Páginas Web</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Desde gestores dinámicos en WordPress para marketing | SEO | GEO | Buisiness Inteligence con Google Analytics, hasta aplicaciones web robustas de alto rendimiento con Next.js preparadas para escala corporativa.
                </p>
              </div>

              {/* Tarjeta 2 */}
              <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-emerald-500/50 transition-colors rounded-sm">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center mb-6 text-emerald-500 font-bold text-xl border rounded-sm">02</div>
                <h3 className="text-xl font-bold text-white mb-4">Bases de Datos Sólidas</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Si todavìa manejas tu información en Excel probablemente necesites una base de datos. Estructuras adaptables, seguras y diseñadas a la medida del volumen de tu información.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className="bg-zinc-950 p-8 border border-zinc-800 hover:border-emerald-500/50 transition-colors rounded-sm">
                <div className="w-12 h-12 bg-zinc-900 flex items-center justify-center mb-6 text-emerald-500 font-bold text-xl border rounded-sm">03</div>
                <h3 className="text-xl font-bold text-white mb-4">Automatización</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Análisis de procesos para identificar cuales se pueden automatizar (Chat Bots, Alertas, Flujo de Trabajo)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* METODOLOGIA */}
        <section id="metodologia" className="relative z-10 bg-zinc-950/70 backdrop-blur-sm py-24 px-20 border-t border-zinc-800">            
          <h2 className="text-3xl font-bold text-white mb-12 tracking-wide">METODOLOGÍA DE TRABAJO</h2>
          <div className="relative mx-auto mt-4 w-24">
                <div className="absolute inset-0 bg-emerald-500 blur-sm opacity-80"></div>
                <div className="relative h-[2px] w-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
              </div>
            <div className="space-y-6">
              <div className="flex gap-6 items-start">
                <span className="text-emerald-500 font-mono">01.</span>
                <div>
                  <h4 className="text-white font-bold">Descubrimiento & Lógica</h4>
                  <p className="text-zinc-400 text-sm mt-1">Mapeo de necesidades y diseño de la arquitectura de la solución mano a mano del cliente</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-emerald-500 font-mono">02.</span>
                <div>
                  <h4 className="text-white font-bold">Desarrollo</h4>
                  <p className="text-zinc-400 text-sm mt-1">Escritura de código limpio, modular y estructurado listo para desarrollo continuo y mantenible.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <span className="text-emerald-500 font-mono">03.</span>
                <div>
                  <h4 className="text-white font-bold">Aseguramiento de Calidad (QA)</h4>
                  <p className="text-zinc-400 text-sm mt-1">Pruebas de estrés, interfaz y bases de datos antes de salir a producción.</p>
                </div>
              </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-20 bg-zinc-950 border-t border-zinc-900 py-12">        
        <div id="contacto" className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-white font-bold tracking-widest text-lg block">
              METAL BRAIN <span className="text-emerald-500 font-light">SOLUTIONS</span>
            </span>
            <p className="text-zinc-500 text-xs mt-2">Optimizando el futuro de tu negocio.</p>
          </div>
          <div className="text-zinc-400 text-sm flex gap-6">
            <a 
              href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20una%20automatización" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-zinc-950 font-bold px-8 py-4 rounded-sm hover:bg-emerald-400 transition-colors">
              <FaWhatsapp className="text-2xl" />
              Contactar por WhatsApp
            </a>
            <a 
              href="mailto:danielguilera@hotmail.com" 
              className="inline-flex items-center justify-center gap-2 bg-[#0078D4] hover:bg-[#106EBE] text-white font-bold px-6 py-3 rounded-sm transition-colors">             
              <PiMicrosoftOutlookLogoFill className="text-2xl" />
              danielguilera@hotmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}