const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [A, B, C] = input.split(' ').map(Number);

console.log((A + B) % C);
console.log(((A % C) + (B % C)) % C);
console.log((A * B) % C);
console.log(((A % C) * (B % C)) % C);
