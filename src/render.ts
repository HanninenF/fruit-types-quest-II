/* import { allFruitCategories } from "./main"; */
import { fruits } from "./fruits/fruits";
import {
  getFruit,
  getFruitsByCategory,
  getFruitsByColor,
  getIconsByCategory,
} from "./fruits/utils";
import { AllowedCategories, AllowedColors, Fruit } from "./types/fruitType";

// Rendera namnet på varje kategori
export const renderFunction = (allFruitCategories: Fruit[]): void => {
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

export const renderFruitsByCategory = (category: AllowedCategories): void => {
  const renderFruits = getFruitsByCategory(category);
  const divElement = document.querySelector("#func") as HTMLElement;
  renderFruits.forEach((fruit) => {
    const pElement = document.createElement("p") as HTMLElement;
    pElement.textContent = `Name: ${fruit.name}\nIcon: ${fruit.icon}\nColor: ${fruit.color}\nCategory: ${fruit.category}`;
    divElement.appendChild(pElement);
  });
};

export const renderFruitsByColor = (color: AllowedColors): void => {
  const renderFruits = getFruitsByColor(color);
  const divElement = document.querySelector("#func") as HTMLElement;
  renderFruits.forEach((fruit) => {
    const pElement = document.createElement("p") as HTMLElement;
    pElement.textContent = `Name: ${fruit.name}\nIcon: ${fruit.icon}\nColor: ${fruit.color}\nCategory: ${fruit.category}`;
    divElement.appendChild(pElement);
  });
};

export const renderIconsByCategory = (category: AllowedCategories): void => {
  const renderIcons = getIconsByCategory(category);
  const divElement = document.querySelector("#func") as HTMLElement;
  const pElement = document.createElement("p");
  renderIcons.forEach((icon) => {
    pElement.textContent += `${icon} `;
    divElement.appendChild(pElement);
  });
};
