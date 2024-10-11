function solution(s) {
    let count = 0
    let countZeros = 0
    for (let i = 1; Number(s) > 1; i++) {
        const withoutZeros = s.replaceAll("0","")
        countZeros += s.length - withoutZeros.length
        s = withoutZeros.length.toString(2)
        count++
    }
    return [count, countZeros];
}