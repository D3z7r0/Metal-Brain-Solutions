'use client';

import React from 'react';
import Image from 'next/image';
import { FaWordpress, FaReact, FaCode, FaWhatsapp, FaServer, FaInfoCircle } from 'react-icons/fa';
import styles from './websites.module.css';

export default function DesarrolloWebPage() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.heroBadge}>
          <FaCode className="text-lg" />
          "Pensar antes de crear"
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Ingeniería Digital <br />
          <span className={styles.textGradient}>a la Medida</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10">
          Diseñamos plataformas rápidas, seguras y escalables. Ya sea que busques autogestión con WordPress o rendimiento extremo con Next.js.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#precios" className="btnPrimary">Ver Planes y Precios</a>
          <a href="#portafolio" className={styles.btnGlass}>Explorar Proyectos</a>
        </div>
      </section>

      {/* PORTAFOLIO */}
      <section id="portafolio" className={styles.portfolioSection}>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Proyectos Recientes</h2>
          <p className="text-slate-500 mt-2 font-medium">Una muestra de lo que podemos construir juntos.</p>
        </div>

        <div className={styles.portfolioGrid}>
          {/* Proyecto 1 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagePlaceholder}>
              <Image 
                src={'/kim.png'} 
                alt={'kim Image'} 
                fill style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTags}>
                <span className={styles.tag}>WordPress</span>
                <span className={styles.tag}>SEO</span>
                <span className={styles.tag}>JS</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Sake Bar</h3>
              <p className="text-slate-500 text-sm mt-2">Menú de restaurante, realizado para la visibilización del lugar y con toda la información de precios.</p>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagePlaceholder}>
              <Image 
                src={'/Daxa.png'} 
                alt={'Daxa Image'} 
                fill style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTags}>
                <span className={styles.tag}>WordPress</span>
                <span className={styles.tag}>SEO</span>
                <span className={styles.tag}>Elementor</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">DaxaMobile</h3>
              <p className="text-slate-500 text-sm mt-2">Sitio web de visualización de marca, SEO optimizado y captura de datos para potenciales clientes.</p>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className={styles.projectCard}>
            <div className={styles.projectImagePlaceholder}>
              <Image 
                src={'/dash.png'} 
                alt={'dash Image'} 
                fill style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.projectContent}>
              <div className={styles.projectTags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>API Rest</span>
                <span className={styles.tag}>PostgreSQL</span>
              </div>
              <h3 className="text-xl font-bold text-slate-800">Sistema de Gestión</h3>
              <p className="text-slate-500 text-sm mt-2">Aplicación web a la medida para control de inventarios y usuarios con roles administrativos.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="precios" className="max-w-7xl mx-auto mt-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900">Inversión Tecnológica</h2>
          <p className="text-slate-500 mt-3 font-medium text-lg">Transparencia total. Elige el ecosistema que tu negocio necesita.</p>
        </div>

        {/* ECOSISTEMA WORDPRESS */}
        <h3 className={styles.pricingCategoryTitle}>
          <FaWordpress className="text-blue-600 text-2xl" /> 
          Ecosistema WordPress
        </h3>
        <div className={styles.pricingGrid}>
          {/* WP Básico */}
          <div className={styles.crystalCard}>
            <div>
              <h3 className={styles.crystalHeader}>Starter / UX-UI</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Presencia digital rápida e impactante. Ideal para landing pages estáticas y validación de negocios.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>Diseño UX/UI responsivo (Móvil/Desktop).</li>
                <li className={styles.featureItem}>Hasta 5 secciones informativas.</li>
                <li className={styles.featureItem}>Formularios de contacto básicos.</li>
                <li className={styles.featureItem}>Setup de Dominio y Hosting.</li>
              </ul>
            </div>
            <div className={styles.crystalPriceContainer}>
              <div className={styles.crystalPrice}>
                <span className={styles.crystalCurrency}>$</span>3,800<span className={styles.crystalSuffix}>MXN</span>
              </div>
              <a 
                href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20cotizar%20el%20plan%20Starter%20UX-UI."
                className="block text-center w-full mt-6 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm cursor-pointer"
              >
                Elegir Starter
              </a>
              <details className="mt-4 group">
                <summary className="text-xs text-slate-500 font-medium list-none [&::-webkit-details-marker]:hidden cursor-pointer hover:text-slate-700 transition-colors">
                  <span className="text-blue-500 font-bold mr-1">*</span>
                  <span className="underline decoration-slate-300 underline-offset-2">Precios sujetos a evaluación</span>
                </summary>
                <p className="mt-2 text-slate-400 text-xs font-medium leading-relaxed bg-white/30 p-3 rounded-lg border border-white/50 cursor-text">
                  El precio mostrado es una estimación base. La inversión final puede variar dependiendo de los requerimientos específicos, integraciones y escala de tu proyecto.
                </p>
              </details>
            </div>
          </div>

          {/* WP Avanzado */}
          <div className={`${styles.crystalCard} border-blue-400/30 shadow-[0_10px_40px_rgba(59,130,246,0.1)]`}>
            <div>
              <h3 className={styles.crystalHeader}>Business SEO</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Sitios autoadministrables con registro de usuarios y optimización técnica profunda para buscadores.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>Sistema de registro y roles de usuario.</li>
                <li className={styles.featureItem}>Optimización SEO On-Page técnica.</li>
                <li className={styles.featureItem}>Caché avanzada y optimización de imágenes.</li>
                <li className={styles.featureItem}>Panel administrativo seguro.</li>
              </ul>
            </div>
            <div className={styles.crystalPriceContainer}>
              <div className={styles.crystalPrice}>
                <span className={styles.crystalCurrency}>$</span>8,500<span className={styles.crystalSuffix}>MXN</span>
              </div>
              <a 
                href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20cotizar%20el%20plan%20Business%20SEO."
                className="block text-center w-full mt-6 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-md"
              >
                Elegir Business
              </a>
              <details className="mt-4 group">
                <summary className="text-xs text-slate-500 font-medium list-none [&::-webkit-details-marker]:hidden cursor-pointer hover:text-slate-700 transition-colors">
                  <span className="text-blue-500 font-bold mr-1">*</span>
                  <span className="underline decoration-slate-300 underline-offset-2">Precios sujetos a evaluación</span>
                </summary>
                <p className="mt-2 text-slate-400 text-xs font-medium leading-relaxed bg-white/30 p-3 rounded-lg border border-white/50 cursor-text">
                  El precio mostrado es una estimación base. La inversión final puede variar dependiendo de los requerimientos específicos, integraciones y escala de tu proyecto.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* ECOSISTEMA NEXT.JS */}
        <h3 className={styles.pricingCategoryTitle}>
          <FaReact className="text-cyan-500 text-2xl" /> 
          Desarrollo a la Medida (Next.js)
        </h3>
        <div className={styles.pricingGrid}>
          {/* Next.js Landing */}
          <div className={styles.crystalCard}>
            <div>
              <h3 className={styles.crystalHeader}>Performance Landing</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Sitios estáticos ultra rápidos codificados desde cero. Máxima puntuación en rendimiento web.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>Código puro con Next.js y Tailwind CSS.</li>
                <li className={styles.featureItem}>Tiempos de carga casi instantáneos (SSG).</li>
                <li className={styles.featureItem}>Métricas Lighthouse perfectas (Google).</li>
                <li className={styles.featureItem}>Máxima seguridad (Sin plugins vulnerables).</li>
              </ul>
            </div>
            <div className={styles.crystalPriceContainer}>
              <div className={styles.crystalPrice}>
                <span className={styles.crystalCurrency}>$</span>7,500<span className={styles.crystalSuffix}>MXN</span>
              </div>
              <a 
                href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20cotizar%20la%20Performance%20Landing%20en%20Next.js."                
                className="block text-center w-full mt-6 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm cursor-pointer"
              >
                Cotizar Landing
              </a>
              <details className="mt-4 group">
                <summary className="text-xs text-slate-500 font-medium list-none [&::-webkit-details-marker]:hidden cursor-pointer hover:text-slate-700 transition-colors">
                  <span className="text-blue-500 font-bold mr-1">*</span>
                  <span className="underline decoration-slate-300 underline-offset-2">Precios sujetos a evaluación</span>
                </summary>
                <p className="mt-2 text-slate-400 text-xs font-medium leading-relaxed bg-white/30 p-3 rounded-lg border border-white/50 cursor-text">
                  El precio mostrado es una estimación base. La inversión final puede variar dependiendo de los requerimientos específicos, integraciones y escala de tu proyecto.
                </p>
              </details>
            </div>
          </div>

          {/* Next.js VIP */}
          <div className={`${styles.crystalCard} border-slate-800 shadow-[0_10px_40px_rgba(15,23,42,0.15)] bg-slate-900/5`}>
            <div>
              <h3 className={styles.crystalHeader}>Web App & 3D</h3>
              <p className="text-slate-500 text-sm mt-2 leading-relaxed">
                Aplicaciones empresariales con arquitecturas complejas, bases de datos y experiencias inmersivas.
              </p>
              <ul className={styles.featureList}>
                <li className={styles.featureItem}>Arquitectura Full-Stack y APIs privadas.</li>
                <li className={styles.featureItem}>Base de Datos y Autenticación robusta.</li>
                <li className={styles.featureItem}>Integración de animaciones 3D (Three.js).</li>
                <li className={styles.featureItem}>Renderizado del lado del servidor (SSR).</li>
              </ul>
            </div>
            <div className={styles.crystalPriceContainer}>
              <div className={styles.crystalPrice}>
                <span className={styles.crystalCurrency}>$</span>18,500<span className={styles.crystalSuffix}>MXN</span>
              </div>
              <a 
                href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20desarrollar%20una%20App%20Custom%20con%20experiencia%203D."                
                className="block text-center w-full mt-6 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-md"
              >
                Desarrollar App Custom
              </a>
              <details className="mt-4 group">
                <summary className="text-xs text-slate-500 font-medium list-none [&::-webkit-details-marker]:hidden cursor-pointer hover:text-slate-700 transition-colors">
                  <span className="text-blue-500 font-bold mr-1">*</span>
                  <span className="underline decoration-slate-300 underline-offset-2">Precios sujetos a evaluación</span>
                </summary>
                <p className="mt-2 text-slate-400 text-xs font-medium leading-relaxed bg-white/30 p-3 rounded-lg border border-white/50 cursor-text">
                  El precio mostrado es una estimación base. La inversión final puede variar dependiendo de los requerimientos específicos, integraciones y escala de tu proyecto.
                </p>
              </details>
            </div>
          </div>
        </div>

        {/* EXTRA CARD: DUDAS Y PROYECTOS ESPECIALES */}
        <div className={`${styles.contactBanner} flex-col md:flex-row`}>
          <div className="max-w-xl text-center md:text-left">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">¿No estás seguro de qué necesitas?</h3>
            <p className="text-slate-600 font-medium">
              Cada negocio es único. Si tienes un proyecto especial en mente, una idea que requiere integración con APIs, o simplemente tienes dudas sobre qué tecnología es mejor para tu caso, hablemos sin compromiso.
            </p>
          </div>
          <div className="shrink-0 mt-6 md:mt-0">
            <a 
              href="https://wa.me/525543079745?text=Hola%20MBS,%20tengo%20dudas%20sobre%20un%20proyecto%20web" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] transition-all"
            >
              <FaWhatsapp className="text-2xl" />
              Asesoría Gratuita
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}