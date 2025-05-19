import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ICT Shahr',
        short_name: 'NextPWATask',
        description: 'A Progressive Web App built by your new coworker with Next.js15',
        start_url: '/',
        display: 'standalone',
        background_color: '#f7f9fa',
        theme_color: '#1e2838',
        icons: [
            {
                src: '/icon-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/icon-512x512.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}