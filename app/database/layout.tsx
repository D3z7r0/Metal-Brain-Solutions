import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arquitectura de Bases de Datos y Paneles de Control',
  description: 'Migramos tu información de Excel a bases de datos relacionales seguras. Desarrollamos paneles administrativos en tiempo real para el control total de tu negocio.',
  keywords: [
    'Arquitectura de bases de datos', 
    'Migración de Excel a SQL', 
    'Desarrollo de paneles administrativos', 
    'Gestión de datos empresariales', 
    'Sistemas web a la medida'
  ],
  openGraph: {
    title: 'Ingeniería de Datos y Dashboards | Metal Brain Solutions',
    description: 'Estructuras seguras, escalables y diseñadas para soportar el volumen real de tu información.',
  }
};

export default function BasesDeDatosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}