import {
  AllowedCategories,
  AllowedColors,
  AllowedIcons,
  AllowedNames,
  Fruit,
} from "../types/fruitType";
import { fruits } from "./fruits";

// använd fruits-arrayen och returnera det fruit-objekt som matchar name
// finns det ingen sådan fruit så returnera undefined
export const getFruit = (name: AllowedNames): string | undefined => {
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

export const getFruits = (name: AllowedNames): Fruit[] | undefined => {
  return fruits.filter((f) => f.name.includes(name.toLowerCase()));
};

// använd fruits-arrayen och returnera ikonen som matchar frukten name
// finns det ingen sådan frukt så returnera undefined
export const getIcon = (name: AllowedNames): string | undefined => {
  let matchingFruit: Fruit | undefined;
  fruits.forEach((fruit) => {
    if (!matchingFruit && fruit.name === name) {
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
export const getColor = (name: AllowedNames): string | undefined => {
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
export const getCategory = (
  name: AllowedNames
): AllowedCategories | undefined => {
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

export const getAllCategories = (fruits: Fruit[]): Fruit[] => {
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

// gör en numberOfCategoryFruits här också
// använd fruits-arrayen och returnera hur många frukter det finns av en given kategori
export const numberOfFruitsPerCategory = (
  category: AllowedCategories
): number => {
  let fruitsForCategory: string[] = [];
  fruits.forEach((fruit) => {
    if (fruit.category === category) {
      fruitsForCategory.push(category);
    }
  });

  return fruitsForCategory.length;
};
// använd fruits-arrayen
// ta emot en kategori och returnera en array av alla frukter som ingår i den kategorin
export const getFruitsByCategory = (category: AllowedCategories): Fruit[] => {
  let sortedFruits: Fruit[] = [];
  fruits.forEach((fruit) => {
    if (fruit.category === category) {
      sortedFruits.push(fruit);
    }
  });
  return sortedFruits;
};

// gör en getFruitsByColor också
export const getFruitsByColor = (color: AllowedColors): Fruit[] => {
  let sortedFruits: Fruit[] = [];
  fruits.forEach((fruit) => {
    if (fruit.color === color) {
      sortedFruits.push(fruit);
    }
  });
  return sortedFruits;
};

// använd fruits-arrayen
// ta emot en kategori och returnera alla ikoner från alla frukter i den kategorin
export const getIconsByCategory = (
  category: AllowedCategories
): AllowedIcons[] => {
  let sortedIcons: AllowedIcons[] = [];
  fruits.forEach((fruit) => {
    if (fruit.category === category) {
      sortedIcons.push(fruit.icon);
    }
  });

  return sortedIcons;
};

// gör en getIconsByColor också
export const getIconsByColor = (color: AllowedColors): AllowedIcons[] => {
  let sortedIcons: AllowedIcons[] = [];
  fruits.forEach((fruit) => {
    if (fruit.color === color) {
      sortedIcons.push(fruit.icon);
    }
  });
  return sortedIcons;
};

// gör en getColors som returnerar en array av alla färger */
export const getAllColors = (): AllowedColors[] => {
  let allColors: AllowedColors[] = [];
  fruits.forEach((fruit) => {
    if (!allColors.includes(fruit.color)) {
      allColors.push(fruit.color);
    }
  });
  return allColors;
};

//gör en funktion som skickar in en icon och får till baka alla frukter med matchande icon
export const getFruitByIcon = (icon: AllowedIcons): Fruit => {
  let matchingFruit: Fruit = fruits[0];
  let matchingIcon: AllowedIcons = "🍅";
  fruits.forEach((fruit) => {
    if (fruit.icon === icon && matchingFruit !== null) {
      matchingFruit = fruit;
      matchingIcon = fruit.icon;
    }
  });
  return matchingFruit;
};

export const charAt0toUpperCase = (stringInput: string): string => {
  let stringWithUpperCase: string = "";
  stringWithUpperCase =
    stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
  return stringWithUpperCase;
};
