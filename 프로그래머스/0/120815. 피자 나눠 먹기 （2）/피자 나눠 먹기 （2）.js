const solution = n => {
    let result
    for(let i = 1; i <= n; i++) {
        if((6 * i) % n === 0) {
            result = i
            break;
        }
    }
    return result
}