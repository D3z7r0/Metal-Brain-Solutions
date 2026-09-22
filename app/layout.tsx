import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://metal-brain-solutions.vercel.app/'),
  title: {
    template: '%s | Metal Brain Solutions',
    default: 'Metal Brain Solutions | Desarrollo Web, Bases de Datos e Invitaciones Digitales',
  },
  description: 'Ingeniería web a la medida, invitaciones digitales y bases de datos en el Estado de México y CDMX.',
  keywords: ['Desarrollo web Next.js', 'Páginas web WordPress', 'Invitaciones digitales CDMX', 'Bases de datos a la medida, SEO Web'],
  openGraph: {
    title: 'Metal Brain Solutions',
    description: 'Optimizando el futuro de tu negocio.',
    url: 'https://metal-brain-solutions.vercel.app/',
    siteName: 'Metal Brain Solutions',
    images: [
      {
        url: '/Logo_MBS.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  verification: {
    google: 'dMMMudAznRDSg9FAw8c30cpuLENxWirdc5sJ-VBWKnw',
  },
};