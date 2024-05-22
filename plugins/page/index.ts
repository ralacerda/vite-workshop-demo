import sirv from "sirv";
import type { Plugin } from "vite";

export default function page(): Plugin {
  return {
    name: "page",
    configureServer(server) {
      server.middlewares.use(
        "/__page",
        sirv("plugins/page/client", {
          dev: true,
          single: true,
        })
      );
    },
  };
}
