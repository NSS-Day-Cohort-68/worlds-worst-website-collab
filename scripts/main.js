import { test } from "./blood.js";

console.log("server test");

const testing = test();

const parentHTMLElement = document.querySelector("#test");
parentHTMLElement.innerHTML = testing;
