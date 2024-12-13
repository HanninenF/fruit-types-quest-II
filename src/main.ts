import { fruits } from "./fruits/fruits";
import {
  getFruit,
  getIcon,
  getColor,
  getCategory,
  getAllCategories,
  numberOfColoredFruits,
  numberOfColoredFruits,
} from "./fruits/utils";
import "./styles.css";
/* import { Fruit } from "./types/Fruit"; */

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

const newH1 = document.querySelector("#change-icon") as HTMLElement;
const on = true;
if (on) {
  newH1.textContent = "🍓 fruit-types-quest-II 🍓";
}

console.log(getFruit(fruits[0].name));
console.log(getFruit("melon"));
console.log(getFruit(fruits[4].name));
console.log(getIcon(fruits[3].icon));
console.log(getColor(fruits[9].name));

//skicka in ett namn och få kategori tillbaka
const fruitDiv = document.querySelector("#func") as HTMLElement;
const fruitP = document.createElement("p") as HTMLElement;
let result: string = "";
const matchingFruit = getCategory("banana");
result += `getCategory:\n ${matchingFruit}`;
fruitP.textContent = result;

fruitDiv.appendChild(fruitP);

const allFruitCategories = getAllCategories(fruits);
console.log(allFruitCategories);

// Rendera namnet på varje kategori
allFruitCategories.forEach((fruitCategory) => {
  const fruitDiv = document.querySelector("#func") as HTMLElement;
  const fruitP = document.createElement("p") as HTMLElement;
  let result: string = "";
  const matchingFruit = fruitCategory.name;
  result += `getCategory:\n ${matchingFruit}`;
  fruitP.textContent = result;

  fruitDiv.appendChild(fruitP);
});
console.log(getCategory("bana"));

console.log(numberOfColoredFruits("brown"));

//rendera numberOfColoredFruits

const conNumberOfColoredFruits = numberOfColoredFruits("yellow");

const numP = document.createElement("p") as HTMLElement;
numP.textContent = "numberOfColoredFruits:\n";
numP.textContent += conNumberOfColoredFruits.toString();
fruitDiv.appendChild(numP);
