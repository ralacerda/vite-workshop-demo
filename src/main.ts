import { sha, time } from "virtual:currentSha";
import "./style.css";

console.log(sha);
console.log(time);

const info = document.querySelector("p") as HTMLParagraphElement;

info.textContent = `Build info: ${time} - ${sha}`;

const button = document.querySelector("button") as HTMLButtonElement;

button.addEventListener("click", async () => {
  const { getUsers } = await import(`./async/index.ts`);
  console.dir(getUsers());
});
