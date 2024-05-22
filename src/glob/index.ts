interface Module {
  name: string;
  log: () => void;
}

const moduleStrings = import.meta.glob("./*.ts");

export async function invokeModules() {
  for (const path in moduleStrings) {
    const module = (await moduleStrings[path]()) as Module;
    console.log("module:", path, " name:", module.name);
    module.log();
  }
}

export const images = import.meta.glob("./imgs/*.jpg", {
  eager: true,
});

// Object.values(images).forEach((image) => {
//   const img = document.createElement("img");
//   img.src = image.default;
//   document.body.appendChild(img);
// });
