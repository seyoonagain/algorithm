const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const prefixArray = []

for (let i = 0; i < input.length; i++) {
	prefixArray.push(input.slice(i))
}

const sortedArray = prefixArray.sort((a, b) => a.localeCompare(b))

sortedArray.map(word => console.log(word))