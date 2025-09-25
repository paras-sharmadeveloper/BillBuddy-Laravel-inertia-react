import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';

import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            'css_root': path.resolve(__dirname, 'resources/css'),
            'js_root': path.resolve(__dirname, 'resources/js'),
            '@res' : path.resolve(__dirname, 'resources'),
        },
    },
});

