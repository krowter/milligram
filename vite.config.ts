import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgrPlugin from 'vite-plugin-svgr'
import path from 'path'

export default defineConfig({
    plugins: [
        svgrPlugin({
            svgrOptions: {
                icon: true,
            },
        }),
        ,
        react(),
    ],
    resolve: {
        alias: [
            {
                find: 'assets',
                replacement: path.resolve(__dirname, 'src/assets'),
            },
            {
                find: 'components',
                replacement: path.resolve(__dirname, 'src/components'),
            },
            {
                find: 'utils',
                replacement: path.resolve(__dirname, 'src/utils'),
            },
            {
                find: 'types',
                replacement: path.resolve(__dirname, 'src/types'),
            },
        ],
    },
})
