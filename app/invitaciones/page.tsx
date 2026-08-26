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

      {/* PRECIO Y CTA */}
      <div className={styles.pricingSection}>
        <h2 className="text-2xl font-bold text-slate-800">Crea una experiencia única</h2>
        <div className={styles.priceBadge}>
          Desde $1,300 MXN
        </div>
        <p className="text-slate-500 font-medium mb-2">Diseño responsivo, rápido e interactivo.</p>
        
        <a 
          href="https://wa.me/525543079745?text=Hola,%20me%20interesa%20cotizar%20una%20invitación%20digital" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.btnPrimary}
        >
          <FaWhatsapp className="text-2xl" />
          Cotiza tu invitación hoy mismo
        </a>
      </div>

    </div>
  );
}