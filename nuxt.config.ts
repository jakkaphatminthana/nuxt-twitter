// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ['@nuxt/eslint', '@prisma/nuxt', '@pinia/nuxt'],
  runtimeConfig: {
    jwtAccessTokenSecret: '',
    jwtRefreshTokenSecret: '',
    public: {
      nodeEnv: 'development',
      baseUrl: 'http://localhost:3000',
    },
  },
});
