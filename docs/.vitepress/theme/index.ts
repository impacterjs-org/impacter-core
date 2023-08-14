// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import Theme from "vitepress/theme"
import "./style.css"
import Layout from "./layout.vue"

// https://vitepress.dev/guide/extending-default-theme#layout-slots
export default {
  extends: Theme,
  Layout,
  enhanceApp({ app, router, siteData }) {
    // ...
  },
}
