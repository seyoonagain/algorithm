const solution = n => {
    const arr = Array(n).fill(0).map((_, idx) => idx + 1)
    const filteredArr = arr.filter(number => {
        let count = 0
        for(let i = 1; i <= n; i++) {
            number % i === 0 && count ++
        }
        return count >=3 ? true : false
    })
    return filteredArr.length
}