function solution(A, B){
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    let sum = 0
    A.forEach((num, idx) => sum += num * B[idx])
    return sum;
}