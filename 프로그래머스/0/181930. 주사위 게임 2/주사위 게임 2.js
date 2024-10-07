const solution = (a, b, c) => {
    const array = [a, b, c]
    const set = new Set(array)
    let result = 1;
    for(let i = 1; i <= (4 - set.size); i++) {
        result *= array.reduce((acc, curr) => acc + Math.pow(curr, i), 0)
    }
    return result
}