const solution = (board, k) => 
    board.map((arr, i) => arr.filter((_, j) => i + j <= k))
        .flat()
        .reduce((acc, curr) => acc + curr)