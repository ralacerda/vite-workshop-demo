import type { Plugin, ResolvedConfig } from "vite";

type Options = {
  title: string;
};

export default function modePageTitle(options?: Options): Plugin {
  let config: ResolvedConfig;

  return {
    name: "vite-plugin-page-title",
    configResolved(resolvedConfig) {
      config = resolvedConfig;
    },
    transformIndexHtml(html) {
      const title = createTitle(options?.title || "Vite App", config.mode);
      return html.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);
    },
  };
}

function createTitle(title: string, mode: string) {
  if (mode === "production") {
    return title;
  }
  return `${title} | ${mode}`;
}
