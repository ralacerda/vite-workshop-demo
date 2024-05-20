import { defineConfig } from "vite";
import pageTitle from "./src/plugins/pageTitle";
import modePageTitle from "./src/plugins/modePageTitle";
import buildInfo from "./src/plugins/buildInfo";
import removeLogs from "./src/plugins/removeLogs";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [buildInfo(), removeLogs(), vue()],
});
