import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' //配置src路径别名
// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    server: {
        proxy: {
            '/web': {
                target: 'http://localhost:8000',
                changeOrigin: true,
            },
        }
    }
})
