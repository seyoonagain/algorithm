const solution = (str, n1, n2) => str.split('')
    .map((letter, index) => index === n1 
            ? str[n2] 
            : index === n2
            ? str[n1]
            :   letter
    ).join('')
