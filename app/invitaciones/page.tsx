'use client';

import React from 'react';
import Image from 'next/image';
import {FaRegClock, FaCameraRetro, FaMapMarkedAlt, FaCheckCircle, FaClipboardList, FaWhatsapp,FaMusic}  from 'react-icons/fa';
import { MdAnimation } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import styles from './invitaciones.module.css';

export default function InvitacionesPage() {
  const carouselImages = [
    '/1_slide.png',
    '/2_slide.png',
    '/03_slide.png',
    '/04_slide.png',
    '/05_slide.png',
    '/06_slide.png'
  ];

  return (
    <div className={styles.pageWrapper}>
      
      {/* ENCABEZADO */}
      <div className="max-w-4xl mx-auto text-center mt-12">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Invitaciones <span className={styles.textGradient}>Digitales</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-3xl mx-auto">
          Todo lo que necesitas para una invitación interactiva e inolvidable.
        </p>
      </div>

      {/* GRID DE CARACTERÍSTICAS */}
      <div className={styles.featuresGrid}>
        
        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaRegClock /></div>
          <h3 className="font-bold text-slate-800 text-lg">Temporizador</h3>
          <p className="text-slate-500 text-sm mt-2">Cuenta regresiva en vivo hasta el momento exacto del gran evento.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaCameraRetro className="text-purple-500" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Sección de Fotos</h3>
          <p className="text-slate-500 text-sm mt-2">Galería elegante y optimizada para contar tu historia en imágenes.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaClipboardList className="text-orange-500" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Itinerario</h3>
          <p className="text-slate-500 text-sm mt-2">Cronograma detallado del evento para que ningún invitado se pierda.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaMapMarkedAlt className="text-green-500" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Conexión Maps</h3>
          <p className="text-slate-500 text-sm mt-2">Ubicación precisa con redirección automática a Google Maps o Waze.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaCheckCircle className="text-blue-500" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Confirmación (RSVP)</h3>
          <p className="text-slate-500 text-sm mt-2">Formulario directo para confirmar asistencia, alergias o mensajes especiales.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaMusic className="text-pink-500" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Música de Fondo</h3>
          <p className="text-slate-500 text-sm mt-2">Reproductor integrado para que tu canción favorita ambiente la invitación.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><MdAnimation className="text-red-800" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Animaciones</h3>
          <p className="text-slate-500 text-sm mt-2">Invitación interactiva dando una experiencia elegante y de calidad.</p>
        </div>

        <div className={styles.featureCard}>
          <div className={styles.iconWrapper}><FaRegMessage className="text-orange-500" /></div>
          <h3 className="font-bold text-slate-800 text-lg">Extras</h3>
          <p className="text-slate-500 text-sm mt-2">Si tienes una idea manda un mensaje y con gusto se desarrolla!.</p>
        </div>

      </div>

      {/* CARRUSEL DE MUESTRAS (Auto-slide) */}
      <div className={styles.carouselContainer}>
        {/* Renderizamos las imágenes 2 veces seguidas para lograr el ciclo infinito en CSS */}
        <div className={styles.carouselTrack}>
          {[...carouselImages, ...carouselImages].map((imgSrc, index) => (
            <div key={index} className={styles.carouselSlide}>
              <Image 
                src={imgSrc} 
                alt={`Muestra de invitación digital ${index + 1}`} 
                fill 
                style={{ objectFit: 'cover' }}
                /* Asegúrate de tener imágenes de prueba en tu carpeta /public */
              />
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN DE PLANES Y PRECIOS */}
      <div className="text-center mt-20 mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Nuestros Planes</h2>
        <p className="text-slate-500 mt-3 font-medium">Soluciones a la medida para cada tipo de celebración.</p>
      </div>

      <div className={styles.pricingGrid}>
        
        {/* PLAN 1: ESENCIAL */}
        <div className={styles.crystalCard}>
          <div>
            <h3 className={styles.crystalHeader}>Esencial</h3>
            <p className={styles.crystalText}>
              Ideal para eventos rápidos, cumpleaños o clientes que quieren dar el salto a lo digital con lo necesario.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Diseño responsivo optimizado para móviles.</li>
              <li className={styles.featureItem}>Temporizador en vivo con cuenta regresiva.</li>
              <li className={styles.featureItem}>Itinerario cronológico sencillo del evento.</li>
              <li className={styles.featureItem}>Conexión directa con Google Maps y Waze.</li>
              <li className={styles.featureItem}>Confirmación básica por mensaje a WhatsApp.</li>
            </ul>
          </div>
          <div className={styles.crystalPriceContainer}>
            <div className={styles.crystalPrice}>
              <span className={styles.crystalCurrency}>$</span>850<span className={styles.crystalSuffix}>MXN</span>
            </div>
            <a
            href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20la%20invitación%20Esencial"
            target="_blank"
            rel="noopener noreferrer">
            <button className="w-full mt-6 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm">
              Elegir Esencial
            </button>
          </a>
          </div>
        </div>

        {/* PLAN 2: PREMIUM (El más vendido) */}
        <div className={`${styles.crystalCard} border-blue-400/40 shadow-[0_20px_50px_rgba(59,130,246,0.1)] scale-105 z-10`}>
          <div className={styles.popularBadge}>Más Solicitado</div>
          <div>
            <h3 className={styles.crystalHeader}>Premium</h3>
            <p className={styles.crystalText}>
              Perfecto para bodas y XV años. Una experiencia completa y atractiva para lucir tu evento.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Todas las características del Plan Esencial.</li>
              <li className={styles.featureItem}>Galería de fotos interactiva con carrusel.</li>
              <li className={styles.featureItem}>Reproductor de música de fondo integrado.</li>
              <li className={styles.featureItem}>Conteo de confirmaciones para un estimado de personas que asistirán.</li>
              <li className={styles.featureItem}>Sección de Mesa de Regalos (Link Amazon, Liverpool, etc) y Código de Vestimenta.</li>
            </ul>
          </div>
          <div className={styles.crystalPriceContainer}>
            <div className={styles.crystalPrice}>
              <span className={styles.crystalCurrency}>$</span>1,300<span className={styles.crystalSuffix}>MXN</span>
            </div>
            <a
            href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20la%20invitación%20Premium"
            target="_blank"
            rel="noopener noreferrer">
            <button className="w-full mt-6 bg-white border border-slate-200 text-slate-700 font-bold py-3 rounded-xl hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm">
              Elegir Premium
            </button>
          </a>
          </div>
        </div>

        {/* PLAN 3: VIP */}
        <div className={styles.crystalCard}>
          <div>
            <h3 className={styles.crystalHeader}>VIP / Personalizado</h3>
            <p className={styles.crystalText}>
              Orientado a eventos de lujo. Experiencia tecnológica exclusiva, diseñada desde cero y sin plantillas.
            </p>
            <ul className={styles.featureList}>
              <li className={styles.featureItem}>Diseño, paleta y animaciones 100% personalizados.</li>
              <li className={styles.featureItem}>Dominio web propio por un año (ej. bodadeana.com).</li>
              <li className={styles.featureItem}>Panel administrativo de invitados.</li>
              <li className={styles.featureItem}>Pases digitales con códigos QR únicos para escanear.</li>
              <li className={styles.featureItem}>Invitación inicial "Save the Date" pre-evento.</li>
            </ul>
          </div>
          <div className={styles.crystalPriceContainer}>
            <div className={styles.crystalPrice}>
              <span className={styles.crystalCurrency}>$</span>2,500<span className={styles.crystalSuffix}>MXN</span>
            </div>
            <a
            href="https://wa.me/525543079745?text=Hola%20MBS,%20me%20interesa%20la%20invitación%20VIP"
            target="_blank"
            rel="noopener noreferrer">
            <button className="w-full mt-6 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-colors shadow-md">
              Cotizar Proyecto VIP
            </button>
          </a>
            
          </div>
        </div>

      </div>

    </div>
  );
}