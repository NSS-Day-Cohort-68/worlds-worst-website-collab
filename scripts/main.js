// import { bloodTest } from "./blood.js";
import { sweatList } from "./sweat.js";

// console.log("server test");

// const testing = bloodTest;

// const parentHTMLElement = document.querySelector("#test");
// parentHTMLElement.innerHTML = testing;

const createDomContainers = () => {
  const htmlString = `<section id="sweat-section">Sweat
    </section>
    <section id="tears-section">Tears
    </section>
    <section id="blood-section">Blood
    </section>`;

  const mainElement = document.querySelector("#main-content");
  mainElement.innerHTML = htmlString;
};

createDomContainers();

const sweatHTMLElement = document.querySelector("#sweat-section");
sweatHTMLElement.innerHTML = sweatList();
