import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: "./src/Impacter.ts",
      name: "Impacter",
      fileName: "Impacter",
    },
  },
})
