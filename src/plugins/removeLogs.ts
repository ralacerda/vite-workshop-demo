import path from "path";
import type { Plugin } from "vite";

const extensions = [".js", ".ts"];

export default function removeLogs(): Plugin {
  return {
    name: "remove-logs",
    apply: "build",
    transform(src, id) {
      if (extensions.includes(path.extname(id))) {
        console.log(src);
        src.replace(/console\.log\((.*?)\);?/g, "");
      }

      return {
        code: src,
      };
    },
  };
}
