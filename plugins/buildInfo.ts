import type { Plugin } from "vite";
import { execSync } from "node:child_process";

function getCurrentSha() {
  return execSync("git rev-parse HEAD").toString().trim();
}

function getCurrentTimeAndDate() {
  const currentDate = new Date();
  return currentDate.toLocaleString();
}

export default function buildInfo(): Plugin {
  const virtualModuleId = "virtual:buildInfo";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;

  return {
    name: "build-info", // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        const sha = getCurrentSha();
        const time = getCurrentTimeAndDate();
        return `
          export const sha = "${sha}";
          export const time = "${time}";
        `;
      }
    },
  };
}
