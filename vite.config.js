import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { VitePluginNode } from 'vite-plugin-node'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    vue(),
    {
      ...VitePluginNode({
        adapter: 'express',
        // Custom Adapter
        // adapter({ app, server, req, res, next }) {
        //   app(res, res)
        // }
        appPath: './src/server/server.js'
      }),
      apply: 'serve'
    }
  ],
})
