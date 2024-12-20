const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [x, y] = input.split('\n');

if (x > 0) {
  if (y > 0) {
    return console.log(1);
  }
  return console.log(4);
} else {
  if (y > 0) {
    return console.log(2);
  }
  return console.log(3);
}
