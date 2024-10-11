function solution(s){
    const parens = [...s]
    if(parens.at(-1) === '(') return false
    const countParens = (targetParen) => parens.filter(paren => paren === targetParen).length
    if(countParens('(') !== countParens(')')) return false
    const pairCheck = []
    parens.forEach(paren => {
        if(pairCheck.at(-1) === '(' && paren === ')') pairCheck.pop()
        else pairCheck.push(paren)
    })
    return !pairCheck.length ? true : false
}