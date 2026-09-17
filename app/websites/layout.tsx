import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Desarrollo Web a la Medida | WordPress y Next.js',
  description: 'Diseño de páginas web corporativas, landing pages de alto rendimiento y experiencias 3D. Soluciones digitales escalables para negocios en Tlalnepantla y el Valle de México.',
  keywords: [
    'Desarrollo web a la medida', 
    'Páginas web WordPress CDMX', 
    'Agencia de diseño web Estado de México', 
    'Desarrollo Next.js', 
    'Landing pages optimizadas SEO'
  ],
  openGraph: {
    title: 'Ingeniería Web a la Medida | Metal Brain Solutions',
    description: 'Desde landing pages rápidas hasta aplicaciones empresariales interactivas.',
  }
};

export default function DesarrolloWebLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}