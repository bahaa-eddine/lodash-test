const _ = require('lodash');

const numbers = [1, 2, 3, 4, 5];
const doubled = _.map(numbers, (n) => n * 2);

console.log("Nombres doublés :", doubled);
