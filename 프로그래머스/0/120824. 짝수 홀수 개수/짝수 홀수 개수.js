const solution = numlist => {
    const result = [0, 0]
    numlist.forEach(num => num % 2 === 0 ? result[0]++ : result[1]++)
    return result
}