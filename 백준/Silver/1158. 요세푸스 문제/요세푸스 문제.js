const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [N, K] = input.split(' ').map(Number);

const people = Array.from({ length: N }, (_, i) => i + 1);
const result = [];

let index = 0;

while (people.length > 0) {
  index = (index + K - 1) % people.length;
  result.push(people[index]);
  people.splice(index, 1);
}

console.log(`<${result.join(', ')}>`);
