function solution(s){
    const parens = [...s]
    const pairCheck = []
    parens.forEach(paren => {
        if(pairCheck.at(-1) === '(' && paren === ')') pairCheck.pop()
        else pairCheck.push(paren)
    })
    return !pairCheck.length
}