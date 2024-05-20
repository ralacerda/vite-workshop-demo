import { defineConfig } from "vite";
import pageTitle from "./plugins/pageTitle";
import modePageTitle from "./plugins/modePageTitle";
import buildInfo from "./plugins/buildInfo";

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [buildInfo()],
});
