import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  // Cambiamos temporalmente a server para forzar a Vercel a ignorar el caché estático
  output: 'server', 
  adapter: vercel({
    webAnalytics: { enabled: true }, // Esto añade un cambio en la estructura
  }),
  integrations: [react()],
});