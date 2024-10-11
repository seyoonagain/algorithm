function solution(n) {
    const countOnes = (number) => number.toString(2).replaceAll('0', '').length
    function getNextNum (nextNum) {
        if (countOnes(n) === countOnes(nextNum)) return nextNum
        else return getNextNum(nextNum + 1)
    }
    return getNextNum(n + 1)
}  