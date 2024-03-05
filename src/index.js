// create.js

const Stared = require('stared');

// Create a new instance of Stared
const myStarredList = new Stared();

// Add some items to the list
myStarredList.add('JavaScript');
myStarredList.add('Node.js');
myStarredList.add('React');

// Print all items in the list
console.log('All items:', myStarredList.getAll());
