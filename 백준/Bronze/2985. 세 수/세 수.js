const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [x, y, z] = input.split(' ').map(Number);
function findOperator(x, y, z) {
  if (x + y === z) {
    return `${x}+${y}=${z}`;
  } else if (x - y === z) {
    return `${x}-${y}=${z}`;
  } else if (x * y === z) {
    return `${x}*${y}=${z}`;
  } else if (x / y === z) {
    return `${x}/${y}=${z}`;
  } else if (y + z === x) {
    return `${x}=${y}+${z}`;
  } else if (y - z === x) {
    return `${x}=${y}-${z}`;
  } else if (y * z === x) {
    return `${x}=${y}*${z}`;
  } else if (y / z === x) {
    return `${x}=${y}/${z}`;
  }
}
console.log(findOperator(x, y, z));