const solution = nums => {
    let result = ''
    nums.reduce((acc, curr) => {
        if(curr - acc === 1) result += 'w'
        else if(curr - acc === -1) result += 's'
        else if(curr - acc === 10) result += 'd'
        else if(curr - acc === -10) result += 'a'
        return curr
    })
    return result
}