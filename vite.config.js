// vite.config.js

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const path = require("path")
export default defineConfig({
    resolve: {
        plugins: [vue()],
        alias: {
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
            "@": path.resolve(__dirname, "./src"),
        }
    }
})