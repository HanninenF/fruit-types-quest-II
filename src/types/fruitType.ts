export type Fruit = {
  name: AllowedNames;
  icon: AllowedIcons;
  color: AllowedColors;
  category: AllowedCategories;
};

const allowedColors = [
  "purple",
  "green",
  "red",
  "orange",
  "yellow",
  "limegreen",
  "blue",
  "brown",
] as const;

const allowedCategories = ["berry", "pepo", "citrus", "drupe", "pome"] as const;

const allowedNames = [
  "grape",
  "melon",
  "watermelon",
  "tangerine",
  "lemon",
  "lime",
  "banana",
  "pineapple",
  "mango",
  "red apple",
  "green apple",
  "pear",
  "peach",
  "cherry",
  "strawberry",
  "blueberry",
  "kiwi",
  "tomato",
  "olive",
  "coconut",
] as const;

const allowedIcons = [
  "🍇",
  "🍈",
  "🍉",
  "🍊",
  "🍋",
  "🍋‍🟩",
  "🍌",
  "🍍",
  "🥭",
  "🍎",
  "🍏",
  "🍐",
  "🍑",
  "🍒",
  "🍓",
  "🫐",
  "🥝",
  "🍅",
  "🫒",
  "🥥",
] as const;

export type AllowedColors = (typeof allowedColors)[number];
export type AllowedCategories = (typeof allowedCategories)[number];
export type AllowedNames = (typeof allowedNames)[number];
export type AllowedIcons = (typeof allowedIcons)[number];
