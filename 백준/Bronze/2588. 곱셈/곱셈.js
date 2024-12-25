const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [A, B] = input.split('\n');

const [B_1, B_2, B_3] = B.split('').map(Number);

console.log(Number(A) * B_3);
console.log(Number(A) * B_2);
console.log(Number(A) * B_1);
console.log(Number(A) * B);
