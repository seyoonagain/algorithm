const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [_, ...orders] = input.split('\n');

const stack = [];

orders.map((order) => {
  switch (order) {
    case 'pop':
      console.log(stack.length > 0 ? stack.pop() : -1);
      break;
    case 'size':
      console.log(stack.length);
      break;
    case 'empty':
      console.log(stack.length === 0 ? 1 : 0);
      break;
    case 'top':
      console.log(stack.length > 0 ? stack.at(-1) : -1);
      break;
    default:
      stack.push(order.split('push ')[1]);
  }
});
