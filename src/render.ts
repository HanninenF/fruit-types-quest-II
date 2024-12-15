/* import { allFruitCategories } from "./main"; */
import { fruits } from "./fruits/fruits";
import {
  getAllColors,
  getFruit,
  getFruitsByCategory,
  getFruitsByColor,
  getFruitByIcon as getFruitByIcon,
  getIconsByCategory,
  getIconsByColor,
  charAt0toUpperCase,
} from "./fruits/utils";
import {
  AllowedCategories,
  AllowedColors,
  AllowedIcons,
  Fruit,
} from "./types/fruitType";

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

export const renderIconsByColor = (color: AllowedColors): void => {
  const renderIcons = getIconsByColor(color);
  const divElement = document.querySelector("#func") as HTMLElement;
  const pElement = document.createElement("p") as HTMLElement;
  renderIcons.forEach((icon) => {
    pElement.textContent += `${icon} `;
    divElement.appendChild(pElement);
  });
};

export const renderAllColors = (): void => {
  const renderColors = getAllColors();
  const divElement = document.querySelector("#side") as HTMLElement;
  const h2Element = document.createElement("h2") as HTMLElement;
  h2Element.textContent = "All colors are:\n";
  divElement.appendChild(h2Element);
  renderColors.forEach((color) => {
    const pElement = document.createElement("p") as HTMLElement;
    pElement.textContent += ` ${color.charAt(0).toUpperCase() + color.slice(1)} `;
    divElement.appendChild(pElement);
  });
};

export const renderFruitByIcon = (icon: AllowedIcons): void => {
  const renderFruit = getFruitByIcon(icon);
  const divElement = document.querySelector("#side") as HTMLElement;
  const h2Element = document.createElement("h2");
  h2Element.textContent = "Fruit by Icon is:\n";
  divElement.appendChild(h2Element);

  const pElement = document.createElement("p") as HTMLElement;
  pElement.textContent = `Name: ${charAt0toUpperCase(renderFruit.name)}\nIcon: ${charAt0toUpperCase(renderFruit.icon)}\nColor: ${charAt0toUpperCase(renderFruit.color)}\nCategory: ${charAt0toUpperCase(renderFruit.category)} `;
  divElement.appendChild(pElement);
};
