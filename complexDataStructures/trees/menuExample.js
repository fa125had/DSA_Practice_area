import { TreeNode } from "./TreeNode.js";

const menu = new TreeNode("Menu");

const entries = {
  Breakfast: ["Cereal", "BBQ Chicken", "Oatmeal"],
  Lunch: ["Soup", "Sandwich", "Lasagna"],
  Dinner: ["Yogurt", "Filet Mignon", "Fish Florentine"],
};

const meals = Object.keys(entries);
for (let meal = 0; meal < meals.length; meal++) {
  menu.addChild(meals[meal]);
  const entryList = entries[meals[meal]];
  entryList.forEach((entry) => {
    menu.children[meal].addChild(entry);
  });
}

menu.print();

menu.removeChild("BBQ Chicken");
menu.children[2].addChild("BBQ Chicken");

menu.removeChild("Yogurt");
menu.children[0].addChild("Yogurt");

console.log("\n--Corrected Menu--\n");
menu.print();

menu.depthFirstTraversal();
