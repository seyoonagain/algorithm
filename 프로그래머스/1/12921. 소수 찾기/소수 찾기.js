function solution(n) {
    const array = Array(n).fill(0).map((_, idx) => idx + 1)
    console.log(array)
    let primeCount = 0
    for (let i = 2; i <= n; i++) {
        let isPrime = true
        for(let j = 2; j <= Math.sqrt(i); j++) {
            if(i !== j && i % j === 0) {
                isPrime = false
                break;
            }
        }
        isPrime && primeCount++
    }
    return primeCount
}