/* import { allFruitCategories } from "./main"; */
import { Fruit } from "./types/fruitType";

// Rendera namnet på varje kategori
export const renderFunction = (allFruitCategories: Fruit[]) => {
  allFruitCategories.forEach((fruitCategory) => {
    const fruitDiv = document.querySelector("#func") as HTMLElement;
    const fruitP = document.createElement("p") as HTMLElement;
    let result: string = "";
    const matchingFruit = fruitCategory.category;
    result += `getCategory:\n ${matchingFruit}`;
    fruitP.textContent = result;

    fruitDiv.appendChild(fruitP);
  });
};

export const render = (num: number): void => {
  const divElement = document.querySelector("#func") as HTMLElement;
  const pElement = document.createElement("p") as HTMLElement;
  pElement.textContent = num.toString();
  divElement.append(pElement);
};
