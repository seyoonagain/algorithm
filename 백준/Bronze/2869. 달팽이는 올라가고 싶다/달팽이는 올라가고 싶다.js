const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [a, b, v] = input.split(' ').map(Number);

const perDay = a - b;

const theNightBefore = v - a;

console.log(Math.ceil(theNightBefore / perDay) + 1);
