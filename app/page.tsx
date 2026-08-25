'use client';

import React, { useState, useEffect } from 'react';import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaWhatsapp, FaSearch, FaCode, FaShieldAlt, FaArrowUp } from 'react-icons/fa';
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import styles from './page.module.css';

const BackgroundCanvas = dynamic(() => import('@/components/BackgroundCanvas'), {
  ssr: false,
});

export default function Home() {
  // -- SCROLL --
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar botón "Volver arriba" después de 400px
      setShowBackToTop(currentScrollY > 400);

      // Ocultar/Mostrar Header
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderVisible(false); // Scroll hacia abajo: Ocultar
      } else {
        setIsHeaderVisible(true);  // Scroll hacia arriba: Mostrar
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.pageWrapper}>
      
      {/* CAPA 0: EL FONDO 3D */}
      <BackgroundCanvas />

      {/* HEADER LIGHT GLASS */}
      <header className={`${styles.glassHeader} transition-transform duration-300 ease-in-out ${
        isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Logo_MBS.png"
              width={100}
              height={100}
              alt="Logo_MBS"
              className="h-auto w-auto" 
              priority
            />
          </div>
          <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-600">
            <Link href="#servicios" className="hover:text-blue-500 transition-colors">Servicios</Link>
            <Link href="#metodologia" className="hover:text-purple-500 transition-colors">Metodología</Link>
            <Link href="#contacto" className="hover:text-orange-500 transition-colors">Contacto</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="relative z-10 min-h-[calc(100vh-80px)] flex flex-col justify-center items-start max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6 tracking-tight">
            Sistemas Sólidos. <br />
            <span className={styles.textGradient}>
              Soluciones Inteligentes.
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-slate-500 mb-10 leading-relaxed font-medium">
            Páginas Web, Bases de Datos y Automatización de Procesos para pequeñas y medianas empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto z-10">
            <Link href="#contacto" className={styles.btnPrimary}>
              Agendar Análisis
            </Link>
            <Link href="#servicios" className={styles.btnGlass}>
              Ver Servicios
            </Link>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="servicios" className="relative z-20 py-24">          
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-wide">NUESTROS SERVICIOS</h2>
              <div className={styles.glowDivider}></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tarjeta 1 */}
              <div className={styles.glassCard}>
                <div className={styles.glassIcon}>01</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Páginas Web</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Desde gestores dinámicos en WordPress para marketing, SEO, GEO y Business Intelligence con Google Analytics, hasta aplicaciones web robustas de alto rendimiento con Next.js.
                </p>
                <div className="flex justify-end">
                  <button className={styles.btnSecondary}>Ver servicios</button>
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className={styles.glassCard}>
                <div className={styles.glassIcon}>02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Bases de Datos Sólidas</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Si todavía manejas tu información en Excel probablemente necesites una base de datos. Estructuras adaptables, seguras y diseñadas a la medida del volumen de tu información.
                </p>
              </div>

              {/* Tarjeta 3 */}
              <div className={styles.glassCard}>
                <div className={styles.glassIcon}>03</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Automatización</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Análisis de procesos para identificar cuáles se pueden automatizar eficientemente, implementando herramientas como Chat Bots, Alertas y Flujos de Trabajo automatizados.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METODOLOGÍA */}
        <section id="metodologia" className="relative z-10 py-24 px-6">            
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-wide">METODOLOGÍA DE TRABAJO</h2>
              <div className={styles.glowDivider}></div>
            </div>

            <div className={styles.timelineContainer}>
              
              {/* Paso 1 */}
              <div className={styles.timelineStep}>
                <div className={styles.timelineIconWrapper}>
                  <FaSearch />
                </div>
                <div className={styles.glassCard}>
                  <span className="text-orange-500 font-mono text-sm tracking-widest font-bold block mb-1">FASE 01</span>
                  <h4 className="text-xl text-slate-900 font-bold">Descubrimiento & Lógica</h4>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed font-medium">
                    Mapeo de necesidades y diseño de la arquitectura de la solución mano a mano con el cliente.
                  </p>
                </div>
              </div>

              {/* Paso 2 */}
              <div className={styles.timelineStep}>
                <div className={styles.timelineIconWrapper}>
                  <FaCode />
                </div>
                <div className={styles.glassCard}>
                  <span className="text-purple-500 font-mono text-sm tracking-widest font-bold block mb-1">FASE 02</span>
                  <h4 className="text-xl text-slate-900 font-bold">Desarrollo e Implementación</h4>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed font-medium">
                    Escritura de código limpio, modular y estructurado, listo para desarrollo continuo y altamente mantenible.
                  </p>
                </div>
              </div>

              {/* Paso 3 */}
              <div className={styles.timelineStep}>
                <div className={styles.timelineIconWrapper}>
                  <FaShieldAlt />
                </div>
                <div className={styles.glassCard}>
                  <span className="text-blue-500 font-mono text-sm tracking-widest font-bold block mb-1">FASE 03</span>
                  <h4 className="text-xl text-slate-900 font-bold">Aseguramiento de Calidad (QA)</h4>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed font-medium">
                    Pruebas exhaustivas de estrés, revisión de interfaz y bases de datos antes de salir a producción.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-20 bg-white/70 backdrop-blur-md border-t border-slate-200 py-12 mt-12 shadow-sm">        
        <div id="contacto" className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-slate-900 font-bold tracking-widest text-lg block">
              METAL BRAIN <span className="text-blue-500 font-light">SOLUTIONS</span>
            </span>
            <p className="text-slate-500 text-xs mt-2 font-medium">Optimizando el futuro de tu negocio.</p>
          </div>
          <div className="text-slate-600 text-sm flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20una%20automatización" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.btnPrimary}>
              <FaWhatsapp className="text-xl" />
              WhatsApp
            </a>
            <a 
              href="mailto:danielguilera@hotmail.com" 
              className={styles.btnGlass}>             
              <PiMicrosoftOutlookLogoFill className="text-xl text-blue-600" />
              Outlook
            </a>
          </div>
        </div>
      </footer>

      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 ease-in-out hover:bg-blue-600 hover:shadow-blue-500/50 hover:-translate-y-1 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Volver arriba"
      >
        <FaArrowUp />
      </button>
    </div>
  );
}