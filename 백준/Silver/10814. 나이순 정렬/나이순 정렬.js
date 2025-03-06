const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [numberOfMembers, ...members] = input.split('\n')
const sortedMembers = members.sort((a, b) => a.split(' ')[0] - b.split(' ')[0])

sortedMembers.map(member => console.log(member))
