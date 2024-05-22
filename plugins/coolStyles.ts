import type { Plugin } from "vite";

export default function coolStyles(): Plugin {
  const colors = ["#6200ee", "#3700b3", "#03dac6", "#ff0266"];

  let count = 0;

  return {
    name: "cool-style",
    configureServer(server) {
      server.hot.on("ok", () => {
        count = (count + 1) % colors.length;
      });

      server.middlewares.use("/cool-styles.css", (_req, res) => {
        res.setHeader("Content-Type", "text/css");
        res.end(`
          :root {
            --primary: ${colors[count]};
            --count: ${count};
          }
          `);
      });
    },

    transformIndexHtml(html) {
      return html.replace(
        "</head>",
        `<link rel="stylesheet" href="/cool-styles.css"></head>`
      );
    },
  };
}

// import.meta.hot?.send("ok");
// const link = document.querySelector(
//   'link[href^="/cool-styles.css"]'
// ) as HTMLLinkElement;
// link.href = `/cool-styles.css?${Date.now()}`;
