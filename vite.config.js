import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                './resources/css/App.tsx', // Teste apotando para o arquivo
                './resources/css/app.css',
            ],
            refresh: true,
        }),
        react(),
    ],
    optimizeDeps: {
        include: ['react', 'react-dom'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'), // Aponta para os arquivos css
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    build: {
        rollupOptions: {
            input: 'resources/js/App.tsx', //  TypeScript
            external: [
                '@radix-ui/react-select',
                '@radix-ui/react-popover',
                '@radix-ui/react-separator',
                '@radix-ui/react-label',
                '@radix-ui/react-tabs',
                '@radix-ui/react-checkbox',
                '@radix-ui/react-dropdown-menu',
                '@radix-ui/react-accordion',
            ],
        },
    },
});
