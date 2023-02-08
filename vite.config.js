import { resolve } from 'path'
import { defineConfig, resolveBaseUrl } from 'vite';

const rootHome  = resolve(__dirname, './src/portafolio');
const root  = resolve(__dirname, './');
const rootIndex  = resolve(__dirname, './src/portafolio');
export default defineConfig({
    base: '/portafolio/',
    build: {
        rollupOptions:{
            input: {
                index: resolve(__dirname,'index.html'),
                homehtml: resolve(__dirname, 'home.html'),
                home: resolve(rootHome, 'home.js'),
            }
        }
    }
});