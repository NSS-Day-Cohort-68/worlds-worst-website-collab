// anxiety inducing code exercises in the afternoon/afterlife
// list of thing make you sweat (objects)

import { getSweat } from "./database.js";
import { getRandom } from "./utility.js";

// { name: "", "sweat_level": number, "willItDehydrate": boolean, "remedy": "string"}

// How to display: Cards (image) in line of 5 random ones

//  ------------------
//  -     Title
//  -
//  -
//  -
//  -     Click
//  -
//  -
//  -
//  -
//  ------------------

// Click on word to get details

export const sweatList = () => {
  const sweatData = getRandom(getSweat(), 5);

  let htmlString = `<article class="sweatList">
  <h2>Sweat</h2>`;

  for (const sweat of sweatData) {
    htmlString += `
            <section class="sweatCard" style="background-image:url(${
              sweat.image
            });">
                <img id=sweat-image--${
                  sweatData.indexOf(sweat) + 1
                } src="" alt="Sweat placeholder" />
                <h1 class="headSweat">${sweat.name}</h1>
                <p class="sweatLevel">Sweat Level: ${sweat.sweat_level}</p>
                <p class="dehydrate">${
                  sweat.willItDehydrate
                    ? "This will dehydrate you!"
                    : "Safe to fail..."
                }</p>
                <p class="remedy">To remedy this situation try this: ${
                  sweat.remedy
                }</p>
            </section>
        `;
  }
  htmlString += `</article>`;
  return htmlString;
};
