import { AllowedCategories, AllowedColors, Fruit } from "../types/Fruit";
import { fruits } from "./fruits";

// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: string): string | undefined => {
  let matchingFruit: Fruit | undefined;

  fruits.forEach((fruit) => {
    if (!matchingFruit && fruit.name === name) {
      matchingFruit = fruit;
    }
  });
  if (matchingFruit) {
    let result: string = "";
    result += `getFruit:\nName: ${matchingFruit.name}\nIcon: ${matchingFruit.icon}\nColor: ${matchingFruit.color}\nCategory: ${matchingFruit.category}
	`;
    return result;
  } else return undefined;
};

export const getFruits = (name: string): Fruit[] | undefined => {
  return fruits.filter((f) => f.name.includes(name.toLowerCase()));
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (icon: string): string | undefined => {
  let matchingFruit: Fruit | undefined;
  fruits.forEach((fruit) => {
    if (!matchingFruit && fruit.icon === icon) {
      matchingFruit = fruit;
    }
  });
  if (matchingFruit) {
    let result: string = "";
    result += `getIcon:\nIcon: ${matchingFruit.icon}`;

    return result;
  } else {
    return undefined;
  }
};

// använd fruits-arrayen och returnera färgen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getColor = (name: string): string | undefined => {
  let matchingFruit: Fruit | undefined;
  fruits.forEach((fruit) => {
    if (!matchingFruit && fruit.name === name) {
      matchingFruit = fruit;
    }
  });
  if (matchingFruit) {
    const fruitDiv = document.querySelector("#func") as HTMLElement;
    const fruitP = document.createElement("p") as HTMLElement;

    let result: string = "";

    result += `getColor:\n${matchingFruit.color}`;

    fruitP.textContent = result;
    fruitDiv.appendChild(fruitP);
    return result;
  } else return undefined;
};

// gör en till funktion som man ger ett fruktnamn och som returnerar en frukts kategori
export const getCategory = (name: string): AllowedCategories | undefined => {
  let matchingFruit: Fruit | undefined;

  fruits.forEach((fruit) => {
    if (!matchingFruit && fruit.name === name) {
      matchingFruit = fruit;
    }
  });
  if (matchingFruit) {
    return matchingFruit.category;
  }
};

export const getAllCategories = (fruits: Fruit[]) => {
  let uniqueFruitCategory: Fruit[] = [];
  let uniqueCategory: string[] = [];

  fruits.forEach((fruit) => {
    if (!uniqueCategory.includes(fruit.category)) {
      uniqueCategory.push(fruit.category);
      uniqueFruitCategory.push(fruit);
    }
  });
  return uniqueFruitCategory;
};

// använd fruits-arrayen och returnera hur många frukter det finns av en given färg color
// finns det inga frukter av den färgen så svara 0
export const numberOfColoredFruits = (color: AllowedColors): number => {
  let uniqueColors: string[] = [];
  fruits.forEach((fruit) => {
    if (color === fruit.color) {
      uniqueColors.push(color);
    } else return 0;
  });

  return uniqueColors.length;
};

/*// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori

export const getFruitsByCategory = (category) => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
};

// gör en getFruitsByColor också

export const getIconsByCategory = (category) => {
  // använd fruits-arrayen
  // ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
};

// gör en getIconsByColor också

// gör en getCategories som returnerar en array av alla kategorier
// gör en getColors som returnerar en array av alla färger */
