const solution = str => {
    const suffix = []
    for(let i = 0; i < str.length; i++) {
        suffix.push(str.slice(i))
    }
    return suffix.sort((a, b) => a.localeCompare(b))
}