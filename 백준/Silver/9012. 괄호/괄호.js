const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [_, ...parens] = input.split('\n');

parens.forEach((row) => {
  const stack = [];
  let isError = false;

  for (const paren of row) {
    if (paren === '(') {
      stack.push(paren);
    } else if (paren === ')') {
      if (stack.length === 0) {
        isError = true;
        break;
      }
      stack.pop();
    }
  }

  console.log(isError || stack.length !== 0 ? 'NO' : 'YES');
});
