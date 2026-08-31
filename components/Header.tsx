'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css'; // Crearemos este archivo en el paso 3

export default function Header() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHeaderVisible(false); // Ocultar al bajar
      } else {
        setIsHeaderVisible(true);  // Mostrar al subir
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.glassHeader} transition-transform duration-300 ease-in-out ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>        
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/">
          <Image src="/Logo_MBS.png" width={100} height={100} alt="Logo_MBS" className="h-auto w-auto" priority />
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-semibold tracking-wide text-slate-600">
          <Link href="/websites" className="hover:text-blue-500 transition-colors">Páginas Web</Link>
          <Link href="/database" className="hover:text-purple-500 transition-colors">Bases de Datos</Link>
          <Link href="/invitaciones" className="hover:text-orange-500 transition-colors">Invitaciones</Link>
        </nav>
      </div>
    </header>
  );
}