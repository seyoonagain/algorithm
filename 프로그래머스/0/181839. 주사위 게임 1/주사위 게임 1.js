const solution = (a, b) => (a + b) % 2 !== 0 
    ? 2 * (a + b)
    : a % 2 !== 0
    ? a ** 2 + b ** 2
    : Math.abs(a - b)