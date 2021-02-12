'use strict';
const BinarySearchTree = require('./BinaryTree');
const Queue = require('./queue');

function bfs(tree, values = []) {
  const queue = new Queue();
  const node = tree;
  queue.enqueue(node);
  while (queue.first) {
    const node = queue.dequeue();
    values.push(node.value);
    if (node.left) {
      queue.enqueue(node.left);
    }
    if (node.right) {
      queue.enqueue(node.right);
    }
  }
  return values;
}

function main() {
  const CommandTree = new BinarySearchTree();
  CommandTree.insert(5, 'Captain Picard');
  CommandTree.insert(6, 'Commander Data');
  CommandTree.insert(8, 'Lt. Cmdr. Crusher');
  CommandTree.insert(7, 'Lieutenant Selar');
  CommandTree.insert(3, 'Commander Riker');
  CommandTree.insert(2, 'Lt. Cmdr. Worf');
  CommandTree.insert(4, 'Lt. Cmdr. LaForge');
  CommandTree.insert(1, 'Lieutenant Security-officer');

  const chain = bfs(CommandTree);
  console.log(chain);
}
main();