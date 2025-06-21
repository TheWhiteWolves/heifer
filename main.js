import { moo } from "./moo.js";
import { say } from "cowsay";

const name = "boot.dev";
console.log(say({text:moo(name)}));