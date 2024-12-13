export type Fruit = {
  name: string;
  icon: string;
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

const allowedNames = ["grape", "melon"];

export type AllowedColors = (typeof allowedColors)[number];
export type AllowedCategories = (typeof allowedCategories)[number];
