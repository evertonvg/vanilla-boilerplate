import { defineConfig } from 'astro/config';
import path from 'node:path';

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern',
                    includePaths: [
                        path.resolve('./src')
                    ],
                },
            },
        },
    },
});
