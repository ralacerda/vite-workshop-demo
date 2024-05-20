import { defineConfig } from "vite";
import pageTitle from "./plugins/pageTitle";
import modePageTitle from "./plugins/modePageTitle";

export default defineConfig({
  build: {
    modulePreload: {
      polyfill: false,
    },
  },
  plugins: [modePageTitle({ title: "Renato" })],
});
