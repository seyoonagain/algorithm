const solution = (numbers, dir) => {
    dir === 'right' 
        ? numbers.unshift(numbers.pop()) 
        : numbers.push(numbers.shift())
                                   
    return numbers
}