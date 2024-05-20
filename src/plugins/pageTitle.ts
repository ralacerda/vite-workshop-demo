import type { Plugin } from "vite";

type Options = {
  title: string;
};

export default function pageTitle(options?: Options): Plugin {
  const title = options?.title || "Vite App";

  return {
    name: "page-title",
    transformIndexHtml(html) {
      return html.replace(/<title>(.*?)<\/title>/, `<title>${title}</title>`);
    },
  };
}
