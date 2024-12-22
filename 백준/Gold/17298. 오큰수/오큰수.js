const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [N, numbers] = input.split('\n');
const array = numbers.split(' ').map(Number);

const result = Array(Number(N)).fill(-1);
const stack = [];

for (let i = 0; i < Number(N); i++) {
  while (stack.length > 0 && array[stack.at(-1)] < array[i]) {
    const index = stack.pop();
    result[index] = array[i];
  }
  stack.push(i);
}

console.log(...result);
