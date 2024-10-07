const solution = numbers => {
    let maxResult;
    for(let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            let multiplied;
            if(i !== j) multiplied = numbers[i] * numbers[j]
            if(maxResult === undefined || maxResult < multiplied) maxResult = multiplied
        }
    }
    return maxResult
}