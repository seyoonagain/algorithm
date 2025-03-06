const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [testCases, ...tests] = input.split('\n')
const results = []
const sizesOfA = []
const sizesOfB = []
const numbersOfA = []
const numbersOfB = []

while (tests.length > 0) {
	const [numbersOfEachLine, numbersA, numbersB] = tests.splice(0, 3)

	const [sizeA, sizeB] = numbersOfEachLine.split(' ')

	sizesOfA.push(sizeA)
	sizesOfB.push(sizeB)

	numbersOfA.push(numbersA.split(' ').map(Number).sort((a, b) => a - b))
	numbersOfB.push(numbersB.split(' ').map(Number).sort((a, b) => b - a))
}

for (let i = 0; i < testCases; i++) {
	let count = 0
	numbersOfA[i].forEach(a => {
		const index = numbersOfB[i].findIndex(b => b < a)
		count += index === -1 ? 0 : sizesOfB[i] - index
	})
	results.push(count)
}

console.log(results.join('\n'))

