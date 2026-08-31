'use client';

import React, { useState, useEffect } from 'react';import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { FaWhatsapp, FaSearch, FaCode, FaShieldAlt, FaArrowUp } from 'react-icons/fa';
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import styles from './page.module.css';
import './globals.css'

const BackgroundCanvas = dynamic(() => import('@/components/BackgroundCanvas'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className={styles.pageWrapper}>      
      <BackgroundCanvas />

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
                <p className="text-slate-500 text-sm leading-relaxed ">
                  Desde gestores dinámicos en WordPress para marketing, SEO, GEO y Business Intelligence con Google Analytics, hasta aplicaciones web robustas de alto rendimiento con Next.js.
                </p>
                <div className="flex justify-end">
                  <Link href="/websites" className={styles.btnSecondary}>
                    Ver Servicios
                  </Link>
                </div>
                
              </div>

              {/* Tarjeta 2 */}
              <div className={styles.glassCard}>
                <div className={styles.glassIcon}>02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Bases de Datos Sólidas</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Si todavía manejas tu información en Excel probablemente necesites una base de datos. Estructuras adaptables, seguras y diseñadas a la medida del volumen de tu información.
                </p>
                <div className="w-full flex justify-end mt-auto">
                  <Link href="/database" className={styles.btnSecondary}>
                    Ver Soluciones
                  </Link>
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className={styles.glassCard}>
                <div className={styles.glassIcon}>03</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Invitaciones Digitales</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Todo lo que necesitas para que una invitación sea perfecta, Temporizador, Sección de Fotos, Itinerarios, Conexión con Google Maps, Sección de Confirmación y Más! 
                </p>
                <div className="w-full flex justify-end mt-auto">
                  <Link href="/invitaciones" className={styles.btnSecondary}>
                    Ver Invitaciones
                  </Link>
                </div>
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
    </div>
  );
}