// tear inducing code exercises in the afternoon/afterlife
// list of thing make you cry (objects)

import { getTears } from "./database.js";

// { name: "", "weep_level": number, "willItMakeYouQuit": boolean, "remedy": "string"}

// How to display: Cards (image) all in a grid

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
export const tearsList = () => {
  // string of data that will end up in HTML
  // Iterate through tear list
  // Get object properties
  // Convert to HTML
  // Return the HTML string

  const tearsData = getTears();
  //   const tearData = getTear().sort((a, b) => b.hemorrhage_level - a.hemorrhage_level);

  let htmlString = `<article class="tearsList">
  <h2>Tears</h2>`;
  for (const tear of tearsData) {
    htmlString += `<section class="tearCard" style="background-image:url(${
      tear.image
    });>
          <img id=tear-image--${tearsData.indexOf(tear) + 1} src=${
      tear.image
    } alt="Tear placeholder" />
          <h1 class="headTear">${tear.name}</h1>
          <p class="weep_level">${tear.weep_level}</p>
          <p class="willItMakeYouQuit">${tear.willYouQuit}</p>
          <p class="remedy">${tear.remedy}</p>
          </section>
          `;
  }
  htmlString += `</article>`;

  return htmlString;
};
