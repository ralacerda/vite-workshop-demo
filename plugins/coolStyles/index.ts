import type { Plugin } from "vite";

export default function buildInfo(): Plugin {
  let count = 0;

  return {
    name: "cool-style", // required, will show up in warnings and errors
    configureServer(server) {
      server.hot.on("ok", () => {
        count++;
      });

      server.middlewares.use((req, res, next) => {
        if (req.url === "/cool-style.css") {
          console.log("we have access");
          res.setHeader("Content-Type", "text/css");
          res.end(`
          :root {
            --primary: #6200ee;
            --count: ${count}
          }
          `);
          count++;
        } else {
          // Pass the request to the next middleware
          next();
        }
      });
    },
  };
}
