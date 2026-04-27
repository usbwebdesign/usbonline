// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static', // O 'hybrid' si usas Supabase en el servidor
  adapter: vercel({
    entrypointResolution: 'auto'
  }),
  integrations: [react()],
});