import fg from 'fast-glob'
import path from 'path'
import {
  description,
  githubSourceContentRegex,
  googleFontRegex,
  googleStaticFontRegex,
  jsdelivrCDNRegex,
  title,
} from '../meta'

/**
 * Vite Plugin PWA uses Workbox  library to build the service worker
 * can find more information on Workbox section.
 * @see https://vite-plugin-pwa.netlify.app/
 */
export const pwa = {
  outDir: '../dist',
  registerType: 'autoUpdate',
  // include all static assets under public/
  includeAssets: fg.sync('**/*.{png,svg,gif,ico,txt}', { cwd: path.resolve(__dirname, '../../public') }),
  manifest: {
    id: '/',
    name: title,
    short_name: title,
    description,
    theme_color: '#06f',
    icons: [
      {
        src: '/images/icon/apple-touch-icon.png',
        sizes: '120x120',
        type: 'image/png',
      },
      {
        src: '/images/icon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/images/icon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  workbox: {
    navigateFallbackDenylist: [/^\/new$/],
    globPatterns: ['**/*.{js,css,webp,png,svg,gif,ico,woff2}'],
    navigateFallback: null,
    runtimeCaching: [
      {
        urlPattern: googleFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-font-style-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: googleStaticFontRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'google-fonts-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: jsdelivrCDNRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'jsdelivr-cdn-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
      {
        urlPattern: githubSourceContentRegex,
        handler: 'CacheFirst',
        options: {
          cacheName: 'githubusercontent-images-cache',
          expiration: {
            maxEntries: 10,
            maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
}