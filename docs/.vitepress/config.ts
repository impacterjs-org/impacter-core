import { fileURLToPath, URL } from "node:url"
import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  appearance: false,
  title: "Impacter",
  description:
    "🔆 Impacter is an innovative framework for building web interfaces.",
  themeConfig: {
    logo: "/impacter.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Composition",
        items: [
          {
            text: "Stacks",
            link: "/stacks",
          },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/impacterjs-org/impacter-core",
      },
      { icon: "twitter", link: "https://twitter.com/OwOSteveYu" },
    ],
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^.*\/VPHomeHero\.vue$/,
          replacement: fileURLToPath(
            new URL("./components/HomeHero.vue", import.meta.url),
          ),
        },
      ],
    },
  },
})
