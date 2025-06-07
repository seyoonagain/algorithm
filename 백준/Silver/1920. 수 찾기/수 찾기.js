const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [n, nNumbers, m, mNumbers] = input.split('\n');

const nSet = new Set(nNumbers.split(' ').map(Number));
const mArray = mNumbers.split(' ').map(Number);

mArray.map((target) => console.log(nSet.has(target) ? 1 : 0));
