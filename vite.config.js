import { resolve } from 'path'
import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

import webfontDownload from 'vite-plugin-webfont-dl'
import eslintPlugin from 'vite-plugin-eslint'
import { VitePluginNode } from 'vite-plugin-node'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      // '@': '/src'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '$injectedColor: orange;'
      }
    }
  },
  // https://github.com/vitejs/vite/blob/main/packages/vite/src/node/constants.ts
  assetsInclude: ['**/*.glb'],
  appType: 'mpa',
  server: {
    host: true,
    port: 8080,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: (proxy, options) => {
          // https://github.com/http-party/node-http-proxy#options
        }
      },
      '/socket.io': {
        target: 'ws://localhost: 8000',
        ws: true
      }
    },
    cors: true,
    headers: {
      //
    },
    hmr: true
  },
  plugins: [
    webfontDownload([
      'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap',
      'https://fonts.googleapis.com/css2?family=Fira+Code&display=swap'
    ]),
    splitVendorChunkPlugin(),
    eslintPlugin({
      include: ['./src/**/*.vue', './src/**/*.js']
    }),
    vue(),
    {
      ...VitePluginNode({
        adapter: 'express',
        appPath: './server/server.js'
      }),
      apply: 'serve'
    }
  ],
  build: {
    outDir: '/dist',
    assetsInlineLimit: 4096,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'nested/index.html')
      }
    }
  },
  experimental: {
    // hostType: 'js' | 'css' | 'html', type: 'public' | 'asset'
    // renderBuiltUrl(filename, { hostId, hostType, type }) {
    //   if (type === 'public') {
    //     return 'https://www.domain.com/' + filename
    //   }
    //   else if (path.extname(hostId) === '.js') {
    //     return { runtime: `window.__assetsPath(${JSON.stringify(filename)})` }
    //   }
    //   else {
    //     return 'https://cdn.domain.com/assets/' + filename
    //   }
    // }
  }
})
