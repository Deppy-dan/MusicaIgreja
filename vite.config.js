import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig(({ mode }) => {
    return {
        plugins: [
            laravel({
                input: [
                    'resources/css/App.css',
                    'resources/js/main.jsx',
                ],
                refresh: true,
            }),
            react(),
        ],
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "./src/styles/variables.scss";', // opcional
                },
            },
        },
        build: {

            outDir: "public/build",
            manifest: 'manifest.json',
            cssCodeSplit: true,
            emptyOutDir: false,
            assetsDir: ".", // Isso evita que o Vite crie uma subpasta `.vite`
            cacheDir: "node_modules/.cache",
            rollupOptions: {
                input: './resources/js/main.jsx',
                external: [
                    'resources/css/App.css',
                    '@radix-ui/react-select',
                    '@radix-ui/react-popover',
                    '@radix-ui/react-separator',
                    '@radix-ui/react-label',
                    '@radix-ui/react-tabs',
                    '@radix-ui/react-checkbox',
                    '@radix-ui/react-dropdown-menu',
                    '@radix-ui/react-accordion',
                    '@radix-ui/react-router-dom',
                    '@radix-ui/react-jsx'
                ],
                output: {
                    entryFileNames: 'App.js',
                    assetFileNames: (assetInfo) => {
                        if (assetInfo.name.endsWith('.css')) {
                            return 'App.css';
                        }
                        return assetInfo.name;
                    }
                }
            },
        },
        optimizeDeps: {
            include: ['react', 'react-dom'],
            exclude: ['lucide-react'],
        },
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "../../src"), // Aponta para os arquivos css
                "@radix-ui/react-dropdown-menu": "node_modules/@radix-ui/react-dropdown-menu"
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        server: {
            proxy: {
                '/api': {
                    target: 'http://localhost:8000',
                    changeOrigin: true,
                    secure: false,
                }
            }
        }
    };
});