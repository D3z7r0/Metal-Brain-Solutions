'use client';

import React from 'react';
import { 
  FaDatabase, FaUsers, FaShieldAlt, FaBolt, 
  FaServer, FaProjectDiagram, FaExchangeAlt, FaChartLine, FaWhatsapp 
} from 'react-icons/fa';
import styles from './database.module.css';

export default function BasesDeDatosPage() {
  return (
    <div className={styles.pageWrapper}>
      
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 font-bold px-4 py-2 rounded-full text-sm mb-6 uppercase tracking-wider">
          <FaDatabase /> Arquitectura Relacional y No Relacional
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
          Ingeniería de Datos <br />
          <span className={styles.textGradient}>a la Medida</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto mb-10">
          Si todavía manejas tu información en Excel, es momento de evolucionar. Construimos estructuras adaptables, seguras y diseñadas para soportar el volumen real de tu negocio.
        </p>
        <a 
          href="https://wa.me/525543079745?text=Hola,%20necesito%20asesoría%20para%20migrar%20mi%20información%20a%20una%20Base%20de%20Datos%20profesional."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-8 py-4 rounded-xl shadow-[0_4px_15px_rgba(59,130,246,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(59,130,246,0.4)] transition-all"
        >
          Cotizar Arquitectura de Datos
        </a>
      </section>

      {/* POR QUÉ DAR EL SALTO (VS EXCEL) */}
      <section>
        <div className="text-center max-w-3xl mx-auto mt-10">
          <h2 className="text-3xl font-bold text-slate-900">¿Por qué dejar atrás las hojas de cálculo?</h2>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}><FaShieldAlt /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Persistencia y Seguridad</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Los archivos se corrompen o se borran. Una base de datos centralizada garantiza respaldos automáticos y resguardo inquebrantable contra pérdida de información.
            </p>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}><FaUsers /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Concurrencia Multi-usuario</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Olvídate del "archivo bloqueado". Múltiples operadores pueden leer y escribir datos en tiempo real de forma simultánea sin colisiones ni demoras.
            </p>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}><FaDatabase /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Integridad Estricta</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Mediante reglas relacionales, se elimina la captura de datos duplicados, errores de dedo o información inconsistente que arruina tus reportes.
            </p>
          </div>
          <div className={styles.glassCard}>
            <div className={styles.iconWrapper}><FaBolt /></div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Rendimiento a Gran Escala</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Búsquedas que congelan Excel durante minutos, en un motor SQL optimizado se ejecutan en milisegundos, sin importar si tienes millones de registros.
            </p>
          </div>
        </div>
      </section>

      {/* DIFERENCIADOR: BD + DASHBOARD */}
      <section className={styles.differentiatorBanner}>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
            Nuestra Ventaja Competitiva
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            No solo vendemos datos invisibles. <br/> <span className="text-blue-400">Entregamos el control total.</span>
          </h2>
          <p className="text-slate-300 text-lg md:text-xl font-medium leading-relaxed mb-10">
            Una base de datos es inútil si no puedes verla. Empaquetamos nuestra arquitectura con un <strong>Panel Administrativo en Tiempo Real</strong> diseñado a la medida. Visualiza KPIs, filtra reportes y gestiona tu inventario desde un navegador, sin tocar una sola línea de código SQL.
          </p>
          <a 
            href="#servicios"
            className="inline-flex items-center justify-center bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors"
          >
            Ver Servicios Técnicos
          </a>
        </div>
      </section>

      {/* CATÁLOGO DE SERVICIOS TÉCNICOS */}
      <section id="servicios">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Catálogo de Servicios de Datos</h2>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.glassCard}>
            <div className={`${styles.iconWrapper} bg-orange-100 text-orange-500 border-orange-200`}>
              <FaExchangeAlt />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Migración e Integración</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Traslado seguro de históricos desde hojas de cálculo dispersas (CSV, Excel) hacia motores relacionales robustos (PostgreSQL, MySQL, SQL Server).
            </p>
          </div>
          <div className={styles.glassCard}>
            <div className={`${styles.iconWrapper} bg-emerald-100 text-emerald-500 border-emerald-200`}>
              <FaProjectDiagram />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Arquitectura Relacional</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Modelado de bases de datos desde cero aplicando formas normales para garantizar que la estructura escale (ideal para inventarios y finanzas).
            </p>
          </div>
          <div className={styles.glassCard}>
            <div className={`${styles.iconWrapper} bg-purple-100 text-purple-500 border-purple-200`}>
              <FaServer />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Desarrollo de APIs RESTful</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Conexión encriptada y segura de la base de datos con aplicaciones móviles, sitios web corporativos o integraciones con sistemas de terceros.
            </p>
          </div>
          <div className={styles.glassCard}>
            <div className={`${styles.iconWrapper} bg-pink-100 text-pink-500 border-pink-200`}>
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">Auditoría y Optimización</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Análisis de bases de datos lentas, reestructuración de índices, optimización de consultas complejas (JOINs) y reforzamiento de seguridad.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="text-center max-w-2xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">¿Listo para centralizar el conocimiento de tu empresa?</h2>
        <a 
          href="https://wa.me/525543079745?text=Hola,%20necesito%20asesoría%20para%20migrar%20mi%20información%20a%20una%20Base%20de%20Datos%20profesional."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold px-8 py-4 rounded-full shadow-[0_4px_15px_rgba(249,115,22,0.3)] hover:-translate-y-1 hover:shadow-[0_8px_25px_rgba(249,115,22,0.4)] transition-all"
        >
          <FaWhatsapp className="text-2xl" />
          Asesoría Gratuita de Arquitectura
        </a>
      </section>

    </div>
  );
}