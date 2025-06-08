const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const data = input.split('\n');

const [aRow, aCol] = data[0].split(' ').map(Number);
const [bRow, bCol] = data[aRow + 1].split(' ').map(Number);

const aArray = [];
const bArray = [];

const result = Array.from({ length: aRow }, () =>
  Array.from({ length: bCol }, () => 0)
);

for (let i = 1; i <= aRow; i++) {
  const row = data[i].split(' ').map(Number);
  aArray.push(row);
}

for (let i = aRow + 2; i <= aRow + bRow + 1; i++) {
  const row = data[i].split(' ').map(Number);
  bArray.push(row);
}

for (let i = 0; i < aRow; i++) {
  for (let j = 0; j < bCol; j++) {
    let sum = 0;
    for (let k = 0; k < aCol; k++) {
      sum += aArray[i][k] * bArray[k][j];
    }
    result[i][j] = sum;
  }
}

result.forEach((row) => console.log(row.join(' ')));
