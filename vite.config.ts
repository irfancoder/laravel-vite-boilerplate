import { defineConfig } from "laravel-vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { chunkComponentsBySubdir } from "./resources/js/utils";

// @ts-ignore
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
    resolve: {
        alias: {
            vue: "vue/dist/vue.esm.js",
            "~": "resources",
        },
    },

    build: {
        outDir: "public/build",
        emptyOutDir: true,
        manifest: true,
        reportCompressedSize: true,
        polyfillModulePreload: false,
        rollupOptions: {
            input: "resources/scripts/main.ts",
            output: {
                sanitizeFileName: true,
                manualChunks: {
                    server: [
                        ...chunkComponentsBySubdir("components", "server"),
                        ...chunkComponentsBySubdir("forms", "server"),
                    ],
                    webapp: [
                        ...chunkComponentsBySubdir("components", "webapp"),
                        ...chunkComponentsBySubdir("forms", "webapp"),
                    ],
                },
            },
        },
    },

    optimizeDeps: {},
})
    .withPlugin(vue())
    .withPostCSS([tailwind, autoprefixer]);
