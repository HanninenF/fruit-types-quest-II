import { fruits } from "./fruits/fruits";
import { getFruit } from "./fruits/utils";
import "./styles.css";
/* import { Fruit } from "./types/Fruit"; */

console.log("Welcome to fruit-types-quest-II, please fix the code!");

// skriv ett program här nedan som testar alla de funktioner som finns i fruits/utils

console.log(getFruit(fruits[0].name));
console.log(getFruit("melon"));
console.log(getFruit(fruits[4].name));
