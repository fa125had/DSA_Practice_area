import { TreeNode } from "./TreeNode.js";

const tree = new TreeNode(1);
console.log("Initiate Tree with Data:\n", tree);

// add element by data
tree.addChild(15);
console.log("Add child with Data:\n", tree);

// add element by TreeNode instance
const node = new TreeNode(30);
tree.addChild(node);
console.log("Add child with Tree instance:\n", tree);

// remove element by data
tree.removeChild(15);
console.log("Remove child with Data:\n", tree);

// remove element by TreeNode instance
tree.removeChild(node);
console.log("Remove child with Tree instance:\n", tree);
