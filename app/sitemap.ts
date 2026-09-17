import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://metal-brain-solutions.vercel.app/'
  
  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/invitaciones`, lastModified: new Date() },
    { url: `${baseUrl}/websites`, lastModified: new Date() },
    { url: `${baseUrl}/database`, lastModified: new Date() },
  ]
}