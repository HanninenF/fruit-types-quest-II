import { fruits } from "./fruits/fruits";
import {
  getFruit,
  getIcon,
  getColor,
  getCategory,
  getAllCategories,
  numberOfColoredFruits,
  numberOfFruitsPerCategory as numberOfFruitsPerCategory,
  getFruitsByCategory,
  getIconsByCategory,
  getIconsByColor,
  getAllColors,
  getFruitByIcon,
} from "./fruits/utils";
import "./styles.css";
import {
  renderFunction,
  render,
  renderFruitsByCategory,
  renderFruitsByColor,
  renderIconsByCategory,
  renderIconsByColor,
  renderAllColors,
  renderFruitByIcon,
} from "./render";
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
console.log(getIcon(fruits[3].name));
console.log(getColor(fruits[9].name));

export const allFruitCategories = getAllCategories(fruits);
console.log(`allFruitCategories= `, allFruitCategories);

renderFunction(allFruitCategories);

console.log(getCategory("banana"));

console.log(numberOfColoredFruits("brown"));

const conNumberOfColoredFruits = numberOfColoredFruits("green");

//rendera numberOfColoredFruits
render(conNumberOfColoredFruits);

console.log(numberOfFruitsPerCategory("berry"));

console.log(getFruitsByCategory("drupe"));

renderFruitsByCategory("citrus");
renderFruitsByCategory("pome");

renderFruitsByColor("red");

console.log(getIconsByCategory("drupe"));

renderIconsByCategory("berry");

console.log(getIconsByColor("blue"));

renderIconsByColor("red");

console.log(getAllColors());
renderAllColors();

console.log(getFruitByIcon("🍋"));
renderFruitByIcon("🥥");
