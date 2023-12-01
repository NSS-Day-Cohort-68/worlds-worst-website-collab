// export const function test()
// export const bloodTest = () => "Let it bleed!";

import { getBlood } from "./database.js";

// blood inducing code exercises in the afternoon/afterlife
// list of thing make you bleed (objects)

// { name: "", "hemorrhage_level": number, "willItDrainYou": boolean, "remedy": "string"}

// How to display: Cards (image) all in a grid depending on blood level

// sort by value
// items.sort((a, b) => a.value - b.value);

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

export const bloodList = () => {
  // string of data that will end up in HTML
  // Iterate through blood list
  // Get object properties
  // Convert to HTML
  // Return the HTML string

  const bloodData = getBlood();
  //   const bloodData = getBlood().sort((a, b) => b.hemorrhage_level - a.hemorrhage_level);

  const sortedBloodData = bloodData.sort(
    (a, b) => b.hemorrhage_level - a.hemorrhage_level
  );

  let htmlString = `<article class="bloodList">
  <h2>Blood</h2>`;
  for (const blood of sortedBloodData) {
    htmlString += `<section class="bloodCard" style="background-image:url(${
      blood.image
    });>
        <img id=blood-image--${bloodData.indexOf(blood) + 1} src=${
      blood.image
    } alt="Blood placeholder" />
        <h1 class="headBlood">${blood.name}</h1>
        <p class="hemorrhage_level">${blood.hemorrhage_level}</p>
        <p class="willItDrainYou">${blood.willItDrainYou}</p>
        <p class="remedy">${blood.remedy}</p>
        </section>
        `;
  }
  htmlString += `</article>`;

  return htmlString;
};
