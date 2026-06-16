// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'server', // <-- Cámbialo aquí
  adapter: vercel({
    entrypointResolution: 'auto'
  }),
  integrations: [react()],
});