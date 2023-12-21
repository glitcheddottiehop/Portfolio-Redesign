import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.startsWith("rwc-") || tag === "spline-viewer",
        },
      },
    }),
    viteStaticCopy({
      targets: [
        {
          src:
            "node_modules/@rehaps/rehaps-web-components/dist/rehaps-web-components/rehaps-web-components.css",
          dest: "assets",
        },
        {
          src:
            "node_modules/@rehaps/rehaps-web-components/dist/rehaps-web-components/assets/**/*",
          dest: "assets/assets",
        },
      ],
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
