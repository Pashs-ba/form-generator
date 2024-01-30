import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
// TODO Split css
export default defineConfig({
    plugins: [
        react(),
        libInjectCss(),
        dts({include: ["lib"]})
    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'lib/main.ts'),
            formats: ['es']
        },
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
        },
    }
})
