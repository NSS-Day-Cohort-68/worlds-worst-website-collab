export const getRandom = (data, num) => {
  let randomArray = [];

  // Change the way this iterates to account for i incrementation
  for (let i = randomArray.length; i < num; i++) {
    const index = Math.floor(Math.random() * data.length);
    const item = data[index];

    if (!randomArray.includes(item)) {
      randomArray.push(item);
    }
  }
  console.log(randomArray);
  return randomArray;
};
