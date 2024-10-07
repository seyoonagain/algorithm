const solution = (string, m, c) => {
    const arr = []
    for (let i = 0; i < string.length / m; i++) {
        arr.push(string.slice(m * i, (m * i) + m))
    }
    return arr.map(str => str[c - 1]).join('')
}