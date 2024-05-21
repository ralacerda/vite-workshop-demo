import { defineConfig } from "vite";
import pageTitle from "./plugins/pageTitle";
import modePageTitle from "./plugins/modePageTitle";
import buildInfo from "./plugins/buildInfo";
import removeLogs from "./plugins/removeLogs";
import vue from "@vitejs/plugin-vue";
import coolStyles from "./plugins/coolStyles";

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [buildInfo(), removeLogs(), vue(), coolStyles()],
});
