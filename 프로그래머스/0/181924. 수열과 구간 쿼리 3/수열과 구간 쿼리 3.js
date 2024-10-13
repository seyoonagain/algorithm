const solution = (arr, queries) => {
    queries.forEach(([i, j]) => {
        arr[i] ^= arr[j]
        arr[j] ^= arr[i]
        arr[i] ^= arr[j]
    })
    return arr
}