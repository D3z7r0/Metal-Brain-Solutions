import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Invitaciones Digitales Premium | Bodas y XV Años',
  description: 'Sorprende a tus invitados con invitaciones web interactivas. Temporizador, confirmación RSVP por WhatsApp, galería de fotos y mapas. Servicio en CDMX y Estado de México.',
  keywords: [
    'Invitaciones digitales web', 
    'Invitaciones para bodas CDMX', 
    'Invitaciones interactivas XV años', 
    'Mesa de regalos digital', 
    'RSVP online'
  ],
  openGraph: {
    title: 'Invitaciones Digitales Inteligentes | Metal Brain Solutions',
    description: 'La forma más elegante y moderna de invitar a tus seres queridos.',
  }
};

export default function InvitacionesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}