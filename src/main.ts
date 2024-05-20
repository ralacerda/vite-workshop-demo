import { sha, time } from "virtual:currentSha";
import "./style.css";

console.log(sha);
console.log(time);

const info = document.querySelector("p") as HTMLParagraphElement;

info.textContent = `Build info: ${time} - ${sha}`;
