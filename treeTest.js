'use strict';
const BinarySearchTree = require('./BinaryTree');

function main() {
  const BST = new BinarySearchTree();
  const data = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
  data.forEach(value => BST.insert(value));
  console.log(BST.inOrder());
  console.log(BST.preOrder());
  console.log(BST.postOrder());
}
// main();