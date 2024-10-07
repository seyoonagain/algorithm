const solution = dot => {
    const x = dot[0]
    const y = dot[1]
    if(x > 0) return x * y < 0 ? 4 : 1
    else return x * y < 0 ? 2 : 3
}