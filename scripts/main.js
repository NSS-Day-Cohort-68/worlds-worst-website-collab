// import { bloodTest } from "./blood.js";
import { bloodList } from "./blood.js";
import { sweatList } from "./sweat.js";
import { tearsList } from "./tears.js";

// console.log("server test");

// const testing = bloodTest;

// const parentHTMLElement = document.querySelector("#test");
// parentHTMLElement.innerHTML = testing;

const createDomContainers = () => {
  const htmlString = `
    <section id="blood-section"></section>
    <section id="sweat-section"></section>
    <section id="tears-section"></section>
    `;

  const mainElement = document.querySelector("#main-content");
  mainElement.innerHTML = htmlString;
};

createDomContainers();

const sweatHTMLElement = document.querySelector("#sweat-section");
sweatHTMLElement.innerHTML = sweatList();

const bloodHTMLElement = document.querySelector("#blood-section");
bloodHTMLElement.innerHTML = bloodList();

const tearsHTMLElement = document.querySelector("#tears-section");
tearsHTMLElement.innerHTML = tearsList();
